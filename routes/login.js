const express = require("express");
const router = express.Router();


module.exports = db => {
router.get("/", (req, res) => {
  res.render("login")
});

router.post("/", (req, res) => {
  const {email, password} = req.body
  console.log(req.body)
  db.query(`SELECT id, email, password
  FROM users
  WHERE email = $1
  AND password = $2;
  `, [email, password])
    .then(data => {
      if (data.rows[0]) {
        console.log(data.rows)
        req.session.user_id = data.rows[0].id
        res.redirect("/")
      } else {
        res.send('shits broken')
//         res.redirect("/login")
// // try again message
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
  });
})
return router
}
