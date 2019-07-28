const express = require("express");
const methodOverride = require('method-override');
const router = express.Router();

router.use(methodOverride('_method'))

module.exports = db => {
  router.get("/:id", (req, res) => {
    const resource_id = req.params.id
    db.query(`
    SELECT *
    FROM resources WHERE id = $1;
    `, [resource_id])
      .then(data => {
        const resource = data.rows;
        res.json({ resource });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/", (req, res) => {
    db.query(`
      SELECT *
      FROM resources
      ORDER BY id
      `)
    .then(data => {
      const allResources = data.rows;
      res.json({ allResources });
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
      const newResource = data.rows;
      res.json({ newResource });
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

  router.get("/new", (req, res) => {
    res.render("../views/new")
  });

  router.post("/new", (req, res) => {
    const { external_url, thumbnail_url, description, title } = req.body
    db.query(`
    INSERT INTO resources (external_url, thumbnail_url, description, title)
    VALUES ($1, $2, $3, $4);
    `, [external_url, thumbnail_url, description, title])
    .then(() => {
      res.redirect("/")
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
  })
})
  return router;
}
