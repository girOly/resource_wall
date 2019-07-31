DROP TABLE IF EXISTS categories CASCADE;


CREATE TABLE categories (
  id SERIAL PRIMARY KEY NOT NULL,
  thumbnail_url TEXT,
  title TEXT,
  description TEXT
)
