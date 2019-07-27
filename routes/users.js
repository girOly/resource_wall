const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/:id", (req, res) => {
    const user_id = req.params
    db.query(`
    SELECT *
    FROM users
    WHERE id = $1;
    `, [user_id])
      .then(data => {
        const userData = data.rows;
        res.json({ userData });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
},

(db) => {
  router.get("/:id/liked", (req, res) => {
    const user_id = req.params.id
    db.query(`
    SELECT resource_id, external_url, thumbnail_url, description, title
    FROM liked
    JOIN users ON user_id = users.id
    JOIN resources ON resource_id = resources.id
    WHERE users.id = $1;
    `, [user_id])
      .then(likedResourceInfo => {
        const userData = likedResourceInfo.rows;
        res.json({ userData });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}
