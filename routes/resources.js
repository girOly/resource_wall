const express = require("express");
const router = express.Router();

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
  return router;
},

db => {
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
  return router;
},

db => {
  router.put("/:id", (req, res) => {
    const resource_id = req.params.id
    const { external_url, description, title, thumbnail_url } = req.body
    db.query(`
      UPDATE resources
      SET extrnal_url = $1, thumbnail_url = $2, description = $3, title = $4
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
  return router;
},

db => {
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
  return router;
}
