DROP TABLE IF EXISTS categories CASCADE;


CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  title TEXT,
  description TEXT,
  cat_photo TEXT
)
