DELETE FROM categories;

ALTER SEQUENCE categories_id_seq RESTART WITH 1;

INSERT INTO categories (title, description, cat_photo)
VALUES ('Fitness', 'Want to learn how to get in shape? Or maybe just want to understand sport theory? Fitness is the category for you!', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fyt3.ggpht.com%2F-wId6edRJ5BA%2FAAAAAAAAAAI%2FAAAAAAAAAAA%2FnsedKbaK3Qs%2Fs900-c-k-no-mo-rj-c0xffffff%2Fphoto.jpg&f=1');

INSERT INTO categories (title, description, cat_photo)
VALUES ('Games', 'Traditional learning not really your thing? Maybe play a game or two and expand your horizons at the same time.', 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Ff%2Ff1%2FChess_piece_-_Black_king.JPG&f=1');

INSERT INTO categories (title, description, cat_photo)
VALUES ('Math', 'Math, what more needs to be said?', 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fthumbs.dreamstime.com%2Fb%2Fmath-problem-4227220.jpg&f=1');

INSERT INTO categories (title, description, cat_photo)
VALUES ('For Kids', 'The best learning resources on the web catered to young minds of the worlds!', 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fthumb7.shutterstock.com%2Fdisplay_pic_with_logo%2F69557%2F69557%2C1267590768%2C1%2Fstock-photo-kid-holding-a-lemon-and-making-a-funny-face-six-years-old-47837062.jpg&f=1');
