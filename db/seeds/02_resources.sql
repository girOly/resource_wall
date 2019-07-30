DELETE FROM resources;

ALTER SEQUENCE resources_id_seq RESTART WITH 1;

INSERT INTO resources (external_url, thumbnail_url, description, title) VALUES ('https://i.pinimg.com/564x/b3/65/9d/b3659db5ab4023c16742463757934d3f.jpg', 'https://dearcrissy.com/spaghetti-salad/', 'Sphaghett Salade', 'Healthy Meals for the Family');

INSERT INTO resources (external_url, thumbnail_url, description, title) VALUES ('https://i.pinimg.com/564x/cc/77/e6/cc77e61abad1887b0127891801b61838.jpg', 'https://www.popularmechanics.com/home/interior-projects/how-to/a9483/4-steps-to-saving-a-scuffed-up-staircase-15962251/', 'Sleek Wooden Stairs', 'Wood Varnish for the Staircase');

INSERT INTO resources (external_url, thumbnail_url, description, title) VALUES ( 'https://lh3.googleusercontent.com/2yE5Gg_aY5mcUC2EUVUoYOqVtLyxO00_B-krB5u3B81uGY2Cxz1WlomItoBlZsG1MuRYEgjNawu6xa9jg0DPeOP9cDehYqFnVFs01w=w800-l68', 'http://www.justapinch.com/recipes/side/vegetable/summer-vinegar-salad.html','Strange looking Kimchi', 'Easy, Breazy, Pickled Vegies');

INSERT INTO resources (external_url, thumbnail_url, description, title) VALUES ('https://i.pinimg.com/564x/31/e4/f0/31e4f0efb0fd6974360aac304dd93532.jpg', 'http://www.cultofpedagogy.com/educational-podcasts-for-kids/?utm_medium=social&utm_source=pinterest&utm_campaign=tailwind_smartloop&utm_content=smartloop&utm_term=27009888', 'Blah blah blah', 'Great podcasts for Young Learners');

INSERT INTO resources (external_url, thumbnail_url, description, title) VALUES ('https://i.pinimg.com/564x/08/13/8e/08138e95d36605ce5a7f25e1079db25b.jpg', 'https://i.pinimg.com/564x/08/13/8e/08138e95d36605ce5a7f25e1079db25b.jpg', 'Blah blah blah', '5 Must Watch Math Ted Talks');

INSERT INTO resources (external_url, thumbnail_url, description, title) VALUES ('https://i.pinimg.com/564x/e2/c5/06/e2c5062a96a63c7139fc01025a4fc590.jpg', 'https://schoolleadersnow.weareteachers.com/best-principal-blogs/', 'Blah blah blah', 'Great Leadership Tips');

INSERT INTO resources (external_url, thumbnail_url, description, title) VALUES ('https://i.pinimg.com/564x/b4/61/66/b461660277c4f84eac8f226a0de83ed0.jpg', 'https://whatshotblog.com/most-beautiful-oxford-colleges/', 'Blahblahbalah', 'Top 10 Best Colleges');

INSERT INTO resources (external_url, thumbnail_url, description, title) VALUES ('https://i.pinimg.com/564x/7c/32/b8/7c32b8d49ddeb6c867f50e715f7f0076.jpg', 'https://www.instagram.com/p/83pM4Myp_X/', 'Blah blah blah', 'Easy Planning tips to help you Organize');
