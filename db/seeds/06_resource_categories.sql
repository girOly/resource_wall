DELETE FROM resource_categories;

ALTER SEQUENCE resource_categories_id_seq RESTART WITH 1;

INSERT INTO resource_categories (resource_id, category_id)
VALUES (1,2);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (2,3);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (2,1);
