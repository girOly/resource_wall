const express = require("express");
const methodOverride = require('method-override');
const router = express.Router();
router.use(methodOverride('_method'))

module.exports = db => {
router.post("/:id/rating", (req, res) => {
  // const rating = req.query.value
  console.log(req.body)
  const { rating } = req.body
  db.query(`
  INSERT INTO resource_rating (created_by, rating, resource_id)
  VALUES ($1, $2, $3);
  `, [req.user.id, rating, req.params.id])
  .then(() => {
    res.redirect(`/resources/${req.params.id}`)
  })
})

router.get("/new", (req, res) => {
  if (req.user) {
    db.query(`
    SELECT *
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

router.get("/search", (req, res) => {
  const { search } = req.query
  db.query(`
  SELECT *
  FROM resources
  WHERE description LIKE $1
  OR title LIKE $1;
  `, [`%${search}%`])
  .then(data => {
    res.render('home', { user:req.user, allResources:data.rows })
  })
  .catch(err => {
    res.status(500).json({ error: err.message });
  })
})

router.put("/:id/edit", (req, res) => {
  const resId = req.params.id
  const resChanges = req.body
  const findRes = `
    SELECT *
    FROM resources
    WHERE id = $1;
    `
  const updateQuery = `
    UPDATE resources
    SET external_url = $1, thumbnail_url = $2, description = $3, title = $4
    WHERE id = $5
    RETURNING *;
    `
  db.query(findRes, [resId])
  .then((data) => {
    if (req.user.id === data.rows[0].created_by) {
      db.query(updateQuery, [resChanges])
      .then((resource) => {
        res.render(`resource`, { resource:resource.rows[0], user:req.user })
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    } else {
      res.redirect(`/${resId}`)
    }
  })
})

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
      res.redirect(`/${resource_id}`)
    } else {
      db.query(`
      SELECT *
      FROM categories;
      `)
      .then((cats) => {
        let { categories } = cats.rows
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
  SELECT DISTINCT r.*, c.date_created, c.content, u.full_name
  FROM resources r
  LEFT JOIN comments c ON c.resource_id = r.id
  LEFT JOIN users u ON c.user_id = u.id
  WHERE r.id = $1;
  `, [resource_id])
  .then((comments) => {
    db.query(`
    SELECT AVG(rating)
    FROM resource_rating
    WHERE resource_id = $1;
    `,[resource_id])
    .then((rating) => {
      const resource = comments.rows;
      resource.rating = parseFloat(rating.rows[0].avg).toFixed(1);
      res.render("resource",{ resource, user: req.user });
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    })
  })
  .catch(err => {
    res.status(500).json({ error: err.message });
  });
});

router.put("/:id", (req, res) => {
  const resource_id = req.params.id
  const { external_url, description, title, thumbnail_url } = req.body
  db.query(`
    UPDATE resources
    SET external_url = $1, thumbnail_url = $2, description = $3, title = $4
    WHERE id = $5
    RETURNING *;
    `, [external_url, thumbnail_url, description, title, resource_id])
  .then(data => {
    res.redirect(`resources/${resource_id}`);
  })
  .catch(err => {
    res.status(500).json({ error: err.message });
  });
})

router.delete("/:id", (req, res) => {
  const resource_id = req.params.id
  db.query(`
    DELETE FROM resources
    WHERE id = $1;
    `, [resource_id])
  .then(() => {
    res.redirect("/users/my_resources");
  })
  .catch(err => {
    res.status(500).json({ error: err.message });
  });
})

router.post("/:id/comment", (req, res) => {
  const { comment } = req.body
  console.log(req.body)
  const user_id = req.user.id
  const resource_id = req.params.id
  db.query(`
  INSERT INTO comments (content, user_id, resource_id)
  VALUES ($1, $2, $3);
  `, [comment, user_id, resource_id])
  .then(() => {
    res.redirect(`/resources/${resource_id}`)
  })
  .catch(err => {
    res.status(500).json({ error: err.message });
  })
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

router.post("/:id/bookmarked", (req, res) => {
  const resource_id = req.params.id
  const user_id = req.user.id
  db.query(`
  INSERT INTO bookmarked (resource_id, user_id)
  VALUES ($1, $2)
  `, [resource_id, user_id])
  .then(() => {
    res.redirect(`/resources/${resource_id}`)
  })
  .catch(err => {
    res.status(500).json({ error: err.message });
  })
})

  return router;
}
