DROP TABLE IF EXISTS resources CASCADE;

CREATE TABLE resources (
  id SERIAL PRIMARY KEY NOT NULL,
  external_url TEXT,
  thumbnail_url TEXT,
  description TEXT,
  title TEXT
);
