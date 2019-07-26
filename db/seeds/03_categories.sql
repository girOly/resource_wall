DELETE FROM categories;

ALTER SEQUENCE categories_id_seq RESTART WITH 1;

INSERT INTO categories (title, description)
VALUES ('Sports', 'Anything sports related, no video games');

INSERT INTO categories (title, description)
VALUES ('Video Games', 'Anything gaming related, no sports');

INSERT INTO categories (title, description)
VALUES ('Food', 'For all your hungry needs)
