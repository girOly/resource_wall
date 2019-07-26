DELETE FROM users;

ALTER SEQUENCE users_id_seq RESTART WITH 1;

INSERT INTO users (full_name, password, email) VALUES ('Alice Smith', 'password', 'alicesmith@gmail.com');

INSERT INTO users (full_name, password, email) VALUES ('John Michael', 'password', 'johnmichael@gmail.com');

INSERT INTO users (full_name, password, email) VALUES ('Lauren Ipsum', 'password', 'laurenipsum@hotmail.com');

INSERT INTO users (full_name, password, email) VALUES ('Guy Desjardin', 'password', 'guy@live.com');

INSERT INTO users (full_name, password, email) VALUES ('Jannet Darette', 'password', 'janet@hotmail.com');

INSERT INTO users (full_name, password, email) VALUES ('Petito Childo', 'password', 'petito@gmail.com');

INSERT INTO users (full_name, password, email) VALUES ('Doette Man', 'password', 'doette@gmail.com');

INSERT INTO users (full_name, password, email) VALUES ('Jane Doe', 'password', 'janedoe@hotmail.com');

INSERT INTO users (full_name, password, email) VALUES ('Huawai Hayh', 'password', 'huawai@gmail.com');

INSERT INTO users (full_name, password, email) VALUES ('Michael Johnson', 'password', 'mj@gmail.com');
