const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/", (req, res) => {
    db.query(`
    `)
    res.render("categories", {user:req.user})
  });

  router.post("/", (req, res) => {
    const { email, password, full_name } = req.body
    db.query(`
    SELECT email
    FROM users
    WHERE email = $1;
    `, [email])
      .then(data => {
      if (data) {
        //return email already in use try again please
      }
      })
      .then(db.query(`
      INSERT INTO users (email, password, full_name)
      VALUES ($1, $2, $3)
      RETURNING *;
    ` , [email, password, full_name])
      .then(accInfo => {
        res.redirect("login")
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
    })
  )
})
return router
}