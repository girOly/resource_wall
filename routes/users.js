const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.put("/:id/edit", (req, res) => {
    // will need to consolelog req.body when put button works
    const profileChanges = req.body
    const updateQuery = `
    UPDATE resources
    SET external_url = $1, thumbnail_url = $2, description = $3, title = $4
    WHERE id = $5
    RETURNING *;
    `
    if (req.user.id === req.params.id) {
      db.query(updateQuery, profileChanges)
    }
  })

  router.get("/:id/edit", (req, res) => {
    const user_id = req.params.id
    if (req.user.id === user_id) {
      db.query(`
      SELECT thumbnail_url, full_name, bio
      FROM users
      WHERE id = $1;
      `, [user_id])
      .then((data) => {
        const userData = data.rows[0]
         res.render("users-edit", {userData, user:req.user})
      })
    } else {
      db.query(`
    SELECT thumbnail_url, full_name, bio
    FROM users
    WHERE id = $1;
    `, [user_id])
      .then((data) => {
        const userData = data.rows[0]
         res.render("users", {userData, user:req.user})
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    }
})

  router.get("/:id", (req, res) => {
    const user_id = req.params.id
    db.query(`
    SELECT thumbnail_url, full_name, bio
    FROM users
    WHERE id = $1;
    `, [user_id])
      .then(data => {
        const userData = data.rows[0];
        res.render("users", {userData, user:req.user})
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });

  router.get("/:id/liked", (req, res) => {
    const user_id = req.params.id
    db.query(`
    SELECT resource_id, resources.external_url, resources.thumbnail_url, description, title
    FROM liked
    JOIN users ON user_id = users.id
    JOIN resources ON resource_id = resources.id
    WHERE users.id = $1;
    `, [user_id])
      .then(data => {
        const allResources = data.rows;
        res.render("resource-liked", { allResources, user:req.user });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}
