DELETE FROM categories;

ALTER SEQUENCE categories_id_seq RESTART WITH 1;

INSERT INTO categories (title, description, age)
VALUES ('Sports', 'Anything sports related, no video games', false);

INSERT INTO categories (title, description, age)
VALUES ('Video Games', 'Anything gaming related, no sports', false);

INSERT INTO categories (title, description, age)
VALUES ('Tits', 'Anything tits related, no children', true);
