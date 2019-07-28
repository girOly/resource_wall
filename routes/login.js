const express = require("express");
const router = express.Router();


module.exports = db => {
router.get("/", (req, res) => {
  res.render("login")
});

router.post("/", (req, res) => {
  const {email, password} = req.body
  db.query(`SELECT id, email, password
  FROM users
  WHERE email = $1
  AND password = $2;
  `, [email, password])
    .then(data => {
      if (data) {
        res.redirect("/")
      } else {
// try again message
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
  });
})
return router
}
