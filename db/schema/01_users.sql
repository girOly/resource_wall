DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  full_name TEXT,
  password TEXT,
  email TEXT,
  bio TEXT,
  thumbnail_url TEXT
);
