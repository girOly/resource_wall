const express = require("express");
const methodOverride = require('method-override');
const router = express.Router();

router.use(methodOverride('_method'))

module.exports = db => {
  router.get("/new", (req, res) => {
    if (req.user) {
      console.log(req.user)
    res.render("new", { user:req.user })
    }
  });

router.put("/:id/edit", (req, res) => {
  const resId = req.params.id
    // will need to consolelog req.body when put button works
  const resChanges = req.body
  const findRes = `
    SELECT *
    FROM resources WHERE id = $1;
    `
  const updateQuery = `
    UPDATE resources
    SET external_url = $1, thumbnail_url = $2, description = $3, title = $4
    WHERE id = $5
    RETURNING *;
    `
  db.query(findRes, [resId])
  .then((data) => {
    if (req.user.id === data.rows[0].created_by) {
      db.query(updateQuery, [resChanges])
      .then((resource) => {
        res.render(`resource`, { resource:resource.rows[0], user:req.user })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    } else {
      res.redirect(`/${resId}`)
    }
  })
})

  router.get("/:id/edit", (req, res) => {
    const user_id = req.user.id
    const resource_id = req.params.id
    db.query(`
    SELECT *
    FROM resources
    WHERE id = $1;
    `, [resource_id])
    .then((resource) => {
      if (user_id !== resource.rows[0].created_by) {
        res.redirect(`/${resource_id}`)
      } else {
        res.render(`resources-edit`, { user:req.user, resource:resource.rows[0] })
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
  });

  router.get("/:id", (req, res) => {
    const resource_id = req.params.id
    db.query(`
    SELECT *
    FROM resources WHERE id = $1;
    `, [resource_id])
    .then(data => {
      const resource = data.rows[0];
      res.render("resource",{ resource, user: req.user });
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
      res.render("home",{allResources, user:req.user});
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
    INSERT INTO resources (external_url, thumbnail_url, description, title, created_by)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `, [external_url, thumbnail_url, description, title, req.user.id])
    .then((data) => {
      const resource = data.rows[0]
      res.redirect(`/${resource.id}`)
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
  })
})
  return router;
}
