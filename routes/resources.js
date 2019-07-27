/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();

module.exports = db => {
  router.get("/:resource.id", (req, res) => {
    const values = req.params
    db.query(`SELECT id FROM resources WHERE id = $1;`, [values])
      .then(data => {
        const resources = data.rows;
        res.json({ resources });
      })
      .catch(err => {
        res.status(500).json({ error: err.message });
      });
  });
  return router;
};
