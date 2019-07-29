DELETE FROM users;

ALTER SEQUENCE users_id_seq RESTART WITH 1;

INSERT INTO users (full_name, password, email, bio, thumbnail_url) VALUES ('Alice Smith', 'password', 'alicesmith@gmail.com', 'my name is Alice and I like apples', 'https://placekeanu.com/200/150');

INSERT INTO users (full_name, password, email, bio, thumbnail_url) VALUES ('John Michael', 'password', 'johnmichael@gmail.com','my name is John and I like lemons', 'https://placekeanu.com/200/150');

INSERT INTO users (full_name, password, email, bio, thumbnail_url) VALUES ('Lauren Ipsum', 'password', 'laurenipsum@hotmail.com', 'my name is Lauren and I like oranges', 'https://placekeanu.com/200/150');

INSERT INTO users (full_name, password, email, bio, thumbnail_url) VALUES ('Guy Desjardin', 'password', 'guy@live.com', 'who calls their kid guy, really', 'https://placekeanu.com/200/150');

INSERT INTO users (full_name, password, email, bio, thumbnail_url) VALUES ('Jannet Darette', 'password', 'janet@hotmail.com','my name is Jannet and I like watermelon', 'https://placekeanu.com/200/150');

INSERT INTO users (full_name, password, email, bio, thumbnail_url) VALUES ('Petito Childo', 'password', 'petito@gmail.com','my name is Petito and I like muffins', 'https://placekeanu.com/200/150');

INSERT INTO users (full_name, password, email, bio, thumbnail_url) VALUES ('Doette Man', 'password', 'doette@gmail.com', 'my name is Doette and I like scones', 'https://placekeanu.com/200/150');

INSERT INTO users (full_name, password, email, bio, thumbnail_url) VALUES ('Jane Doe', 'password', 'janedoe@hotmail.com', 'my name is Jane and I like bagels', 'https://placekeanu.com/200/150');

INSERT INTO users (full_name, password, email, bio, thumbnail_url) VALUES ('Huawai Hayh', 'password', 'huawai@gmail.com','my name is Huawai and I like pamplemousse', 'https://placekeanu.com/200/150');

INSERT INTO users (full_name, password, email, bio, thumbnail_url) VALUES ('Michael Johnson', 'password', 'mj@gmail.com','my name is Michael and I like lamp', 'https://placekeanu.com/200/150');
