const express = require("express");
const methodOverride = require('method-override');
const router = express.Router();

router.use(methodOverride('_method'))

module.exports = db => {
  router.get("/:id", (req, res) => {
    const resource_id = req.params.id
    const userID = req.session['user_id'];
    db.query(`
    SELECT *
    FROM resources WHERE id = $1;
    `, [resource_id])
    .then(data => {
      const resource = data.rows[0];
      res.render("resource", resource);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
  });

  router.get("/new", (req, res) => {
    const userID = req.session['user_id'];
    res.render("new")
  });

  router.get("/", (req, res) => {
    db.query(`
      SELECT *
      FROM resources
      ORDER BY id
      `)
    .then(data => {
      const allResources = data.rows;
      const userID = req.session['user_id'];
      res.render("home",{allResources});
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
  })

  router.put("/:id", (req, res) => {
    const resource_id = req.params.id
    const { external_url, description, title, thumbnail_url } = req.body
    db.query(`
      UPDATE resources
      SET external_url = $1, thumbnail_url = $2, description = $3, title = $4
      WHERE id = $5
      RETURNING *;
      `, [external_url, thumbnail_url, description, title, resource_id])
    .then(data => {
      res.redirect(`/${resource_id}`);
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
  })

  router.delete("/:id", (req, res) => {
    const resource_id = req.params.id
    db.query(`
      DELETE FROM resources
      WHERE id = $1;
      `, [resource_id])
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
  })


  router.post("/new", (req, res) => {
    const { external_url, thumbnail_url, description, title } = req.body
    db.query(`
    INSERT INTO resources (external_url, thumbnail_url, description, title)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
    `, [external_url, thumbnail_url, description, title])
    .then((data) => {
      const newRes = data.rows[0]
      res.redirect(`/${newRes.id}`)
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
  })
})
  return router;
}
