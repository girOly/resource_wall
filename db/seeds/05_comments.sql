DELETE FROM comments;

ALTER SEQUENCE comments_id_seq RESTART WITH 1;

INSERT INTO comments (user_id, resource_id, content, date_created)
VALUES (1, 2, 'Wow.. Quite the excellent Resource!', '1990-01-01');

INSERT INTO comments (user_id, resource_id, content, date_created)
VALUES (2, 2, 'This post really makes you think..', '2000-01-01');

INSERT INTO comments (user_id, resource_id, content, date_created)
VALUES (4, 2, 'This is the best post, I love it!', '1992-01-01');

INSERT INTO comments (user_id, resource_id, content, date_created)
VALUES (3, 1, 'Not a huge fan personally..', '1995-01-01');

INSERT INTO comments (user_id, resource_id, content, date_created)
VALUES (7, 1, 'Great Post!', '2010-10-01');
