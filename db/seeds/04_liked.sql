DELETE FROM liked;

ALTER SEQUENCE liked_id_seq RESTART WITH 1;

INSERT INTO liked (user_id, resource_id)
VALUES (1, 1);

INSERT INTO liked (user_id, resource_id)
VALUES (1, 2);

INSERT INTO liked (user_id, resource_id)
VALUES (3, 1);

INSERT INTO liked (user_id, resource_id)
VALUES (3, 2);

INSERT INTO liked (user_id, resource_id)
VALUES (5, 1);

INSERT INTO liked (user_id, resource_id)
VALUES (7, 1);

INSERT INTO liked (user_id, resource_id)
VALUES (8, 2);
