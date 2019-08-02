const express = require("express");
const router = express.Router();

module.exports = db => {

  router.get("/:id", (req, res) => {
    const categoryId = req.params.id
    db.query(`
    SELECT *
    FROM resource_categories
    JOIN resources ON resources.id = resource_id
    WHERE category_id = $1;
    `, [categoryId])
      .then(data => {
      res.render("category", { user:req.user, category:data.rows })
    })
      .catch(err => {
        res.status(500).json({ error: err.message });
      })
    })

    router.get("/", (req, res) => {
      db.query(`
      SELECT *
      FROM categories
      `)
      .then((categories) => {
        res.render("categories", { allCategories:categories.rows, user:req.user, res:resource.rows })
      })
    });
  return router
}
