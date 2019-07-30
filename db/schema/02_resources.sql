DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY NOT NULL,
  created_by INTEGER REFERENCES users(id) ON DELETE CASCADE,
  external_url TEXT,
  thumbnail_url TEXT,
  description TEXT,
  title TEXT
);
