DELETE FROM resource_categories;

ALTER SEQUENCE resource_categories_id_seq RESTART WITH 1;

INSERT INTO resource_categories (resource_id, category_id)
VALUES (8,1);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (9,1);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (15,1);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (1,2);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (2,2);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (3,2);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (4,2);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (5,2);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (13,2);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (4,3);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (13,3);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (14,3);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (4,4);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (5,4);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (15,4);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (14,4);

INSERT INTO resource_categories (resource_id, category_id)
VALUES (13,4);
