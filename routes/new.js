const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/", (req, res) => {
    res.render("../views/new")
  });
},

db => {
  router.post("/", (req, res) => {
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
return router
}
