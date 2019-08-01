DELETE FROM resource_rating;

ALTER SEQUENCE resource_rating_id_seq RESTART WITH 1;

INSERT INTO resource_rating (resource_id, rating, created_by)
VALUES (1,2,1);

INSERT INTO resource_rating (resource_id, rating, created_by)
VALUES (2,3, 3);

INSERT INTO resource_rating (resource_id, rating, created_by)
VALUES (2,1, 2);

INSERT INTO resource_rating (resource_id, rating, created_by)
VALUES (1,2,4);

INSERT INTO resource_rating (resource_id, rating, created_by)
VALUES (1,5, 5);

INSERT INTO resource_rating (resource_id, rating, created_by)
VALUES (1,5, 6);
