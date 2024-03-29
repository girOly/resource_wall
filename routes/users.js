const express = require('express');
const router  = express.Router();

module.exports = (db) => {
router.put("/:id/edit", (req, res) => {
const { thumbnail_url, bio, full_name, email } = req.body
const updateQuery = `
  UPDATE users
  SET thumbnail_url = $1, bio = $2, full_name = $3, email = $4
  WHERE id = $5;
  `
  db.query(updateQuery, [thumbnail_url, bio, full_name, email, req.user.id])
  .then(() => {
    res.redirect(`/users/${req.user.id}`)
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
})

router.get("/my_resources", (req, res) => {
  db.query(`
  SELECT *, resources.id AS res_id, resources.thumbnail_url AS profile_pic
  FROM resources
  JOIN users ON created_by = users.id
  WHERE created_by = $1;
  `, [req.user.id])
  .then((userRes) => {
    const allResources = userRes.rows
    res.render("myresources", { user:req.user, allResources })
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
})

router.get("/edit", (req, res) => {
const user_id = req.user.id
  db.query(`
  SELECT thumbnail_url, full_name, bio, email
  FROM users
  WHERE id = $1;
  `, [user_id])
  .then((data) => {
      res.render("users-edit", {profile_info: data.rows[0], user:req.user })
  })
  .catch(err => {
    res
      .status(500)
      .json({ error: err.message });
  });
});

router.get("/:id/bookmarked", (req, res) => {
const user_id = req.params.id
  db.query(`
  SELECT resource_id, resources.external_url, resources.thumbnail_url, description, title
  FROM bookmarked
  JOIN users ON user_id = users.id
  JOIN resources ON resource_id = resources.id
  WHERE users.id = $1;
  `, [user_id])
  .then(data => {
      const allResources = data.rows;
      res.render("resource-bookmarked", { allResources, user:req.user });
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    });
});

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
  return router;
}
