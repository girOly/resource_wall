const express = require('express');
const router  = express.Router();

module.exports = (db) => {
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
    SELECT resource_id, external_url, thumbnail_url, description, title
    FROM liked
    JOIN users ON user_id = users.id
    JOIN resources ON resource_id = resources.id
    WHERE users.id = $1;
    `, [user_id])
      .then(likedResourceInfo => {
        const userData = likedResourceInfo.rows;
        res.json({ userData, user:req.user });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
  return router;
}
