DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users (
  id SERIAL PRIMARY KEY NOT NULL,
  full_name TEXT,
  password TEXT,
  age BOOLEAN,
  email TEXT
);
