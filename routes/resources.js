const express = require("express");
const methodOverride = require('method-override');
const router = express.Router();
router.use(methodOverride('_method'))

module.exports = db => {
  router.get("/new", (req, res) => {
    if (req.user) {
      db.query(`SELECT *
        FROM categories;
        `)
        .then((data) => {
          res.render("new", { user:req.user, categories:data.rows})
        })
        .catch(err => {
          res
            .status(500)
            .json({ error: err.message });
      });
    }
  });

// router.put("/:id/edit", (req, res) => {
//   const resId = req.params.id
//     // will need to consolelog req.body when put button works
//   const resChanges = req.body
//   console.log(resChanges);
//   const findRes = `
//     SELECT *
//     FROM resources
//     WHERE id = $1;
//     `
//   const updateQuery = `
//     UPDATE resources
//     SET external_url = $1, thumbnail_url = $2, description = $3, title = $4
//     WHERE id = $5
//     RETURNING *;
//     `
//   db.query(findRes, [resId])
//   .then((data) => {
//     if (req.user.id === data.rows[0].created_by) {
//       db.query(updateQuery, [resChanges])
//       .then((resource) => {
//         res.render(`resource`, { resource:resource.rows[0], user:req.user })
//       })
//       .catch(err => {
//         res
//           .status(500)
//           .json({ error: err.message });
//       });
//     } else {
//       res.redirect(`/${resId}`)
//     }
//   })
// })

  router.get("/:id/edit", (req, res) => {
    const user_id = req.user.id
    const resource_id = req.params.id
    db.query(`
    SELECT *
    FROM resources
    WHERE id = $1;
    `, [resource_id])
    .then((resource) => {
      if (user_id !== resource.rows[0].created_by) {
        res.redirect(`/resources/${resource_id}`)
      } else {
        db.query(`
        SELECT *, thumbnail_url AS category_pic
        FROM categories;
        `)
        .then((cats) => {
          let categories = cats.rows
          res.render(`resources-edit`, { user:req.user, resource:resource.rows[0], categories })
        })
      }
    })
    .catch(err => {
      res
        .status(500)
        .json({ error: err.message });
    })
  })

  router.get("/:id", (req, res) => {
    const resource_id = req.params.id
    db.query(`
    SELECT *
    FROM resources WHERE id = $1;
    `, [resource_id])
    .then(data => {
      const resource = data.rows[0];
      res.render("resource",{ resource, user: req.user });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
  });

  router.put("/:id/edit", (req, res) => {
    const resource_id = req.params.id
    const { external_url, description, title, thumbnail_url } = req.body
    let categories = req.body.categories
    console.log(typeof categories)
    if (typeof categories === 'string') {
      categories = [categories]
    }
        db.query(`
      UPDATE resources
      SET external_url = $1, thumbnail_url = $2, description = $3, title = $4
      WHERE id = $5
      RETURNING *;
      `, [external_url, thumbnail_url, description, title, resource_id])
      .then((data) => {
        const resource_id = data.rows[0].id
        let queryArr = [];
        queryArr.push(db.query(`
        DELETE
        FROM resource_categories
        WHERE resource_id = $1;
        `, [resource_id]))

        for (let cat of categories) {
          queryArr.push(db.query(`
            INSERT INTO resource_categories (category_id, resource_id)
            VALUES ($1, $2);
            `, [cat.id, resource_id]))
          }
          Promise.all(queryArr)
          .then(() => {
            res.redirect(`/resources/${resource_id}`)
          })
          .catch(err => {
            res.status(500).json({ error: err.message });
          })
        })
  })

  router.delete("/:id", (req, res) => {
    const resource_id = req.params.id
    db.query(`
      DELETE FROM resources
      WHERE id = $1;
      `, [resource_id])
    .then(() => {
      res.redirect("/");
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
  })


  router.post("/new", (req, res) => {
    const { external_url, thumbnail_url, description, title, categories } = req.body
    db.query(`
    INSERT INTO resources (external_url, thumbnail_url, description, title, created_by)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
    `, [external_url, thumbnail_url, description, title, req.user.id])
    .then((data) => {
      const resource_id = data.rows[0].id
      let queryArr = [];
      for (let cat of categories) {
        queryArr.push(db.query(`
          INSERT INTO resource_categories (category_id, resource_id)
          VALUES ($1, $2);
          `, [cat, resource_id]))
        }
        Promise.all(queryArr)
        .then(() => {
          res.redirect(`/resources/${resource_id}`)
        })
        .catch(err => {
          res.status(500).json({ error: err.message });
        })
      })

    })
    return router;
  }
