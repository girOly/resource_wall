DELETE FROM resources;

ALTER SEQUENCE resources_id_seq RESTART WITH 1;

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://codecombat.com/images/pages/about/desert.jpg', 'https://www.codingame.com/start', 1, 'Games to help you improve your coding skills, support for most languages including PHP, JavaScript, C++ and more.', 'Learn and Game!');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('http://joshuahunter.com/images/flexbox_froggy_19start.png', 'https://flexboxfroggy.com/', 2,'A fun game to play if you want to learn Flex Box, lots of frogs too.', 'Flexbox Froggy');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ( 'https://www.tynker.com/image/course/g201/g201-minecraft-game-design-td-code.png', 'https://codecombat.com/',5 , 'Code Combat is the gamingest way to learn to code, only the best gamers, and most powerful coders can handle this.', 'Code Combat');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://cdn.themeasuredmom.com/wp-content/uploads/2013/03/color-race-train.jpg', 'https://ca.ixl.com/?partner=bing&adGroup=maths&campaign=1408&msclkid=f646a36c93cc1e4a68e6fe2f1a7a7ad9&utm_source=bing&utm_medium=cpc&utm_campaign=Search%20-%20General%20-%20Mod%20Broad%20-%20CA&utm_term=%2Bmaths&utm_content=maths', 4, 'Math games for kids, learn how to math while you grow, great for kids and slow adults alike!', 'Math Games for Kids');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('http://scottadelman.com/wp-content/uploads/2014/02/photo-4-768x1024.png', 'https://www.education.com/', 3, 'Educational games for kids, general learning games for your children. Everything from chemistry to history.', 'Education Games for Kids');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://www.thoughtco.com/thmb/JBIlQUaYUuQq8jHitRz_1rmfhyM=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/ChemistryGirl-58ebbf2c5f9b58ef7e7106a8.jpg', 'https://www.thoughtco.com/teach-yourself-chemistry-604139', 1, 'An article outlining baisic chemistry conepts for beginners, by
Anne Marie Helmenstine.', 'Teach Yourself Chemistry Today');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://www.wikihow.com/images/thumb/e/e1/Learn-Chemistry-Step-1-Version-3.jpg/aid767920-v4-728px-Learn-Chemistry-Step-1-Version-3.jpg.webp', 'https://www.wikihow.com/Learn-Chemistry', 2, 'WikiHow article explaining the best ways to learn chmistry. Written with lots of love this is my favorite chemistry article to date. 10/10 would recommend!', 'How To Learn Chemistry');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fyurielkaim.com%2Fwp-content%2Fuploads%2F2017%2F04%2FThe-Best-Bodyweight-Hamstring-Exercises-800x1044.png&f=1', 'https://www.reddit.com/r/bodyweightfitness/', 1,  'Bodyweight fitness community at reddit, find people that want to better themselves through physical riggor. Free and supportive community', 'Reddit Bodyweight Fitness');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fyurielkaim.com%2Fwp-content%2Fuploads%2F2017%2F04%2FThe-Best-Bodyweight-Hamstring-Exercises-800x1044.png&f=1', 'https://www.reddit.com/r/bodyweightfitness/', 1,  'Bodyweight fitness community at reddit, find people that want to better themselves through physical riggor. Free and supportive community', 'Reddit Bodyweight Fitness');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Arnold_Schwarzenegger_1974.jpg/800px-Arnold_Schwarzenegger_1974.jpg', 'https://en.wikipedia.org/wiki/Bodybuilding', 1,  'Bodyweight Wikipedia page, buy guys with big muscles, read all about it from the comfort of your couch.', 'Wikipedia Bodybuilding');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Ffemuscleblog.files.wordpress.com%2F2015%2F11%2F105850756.jpg&f=1', 'https://www.bodybuilding.com/category/women', 1,  'Body building, but for women. Ever been a woman and wanted to build your body? Well boy have I got the link for you', 'Bodybuilding.com');


INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fjsvendblad.files.wordpress.com%2F2012%2F07%2Fkidney-cooking.jpg&f=1', 'https://www.allrecipes.com/', 1, 'Allrecipes.com is a content hub for all things cooking, whether you want to learn how to make a particular dish or read up of general cooking fundementals I recomend Allrecipes.', 'Cooking Central');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fjsvendblad.files.wordpress.com%2F2012%2F07%2Fkidney-cooking.jpg&f=1', 'https://www.allrecipes.com/', 1, 'Allrecipes.com is a content hub for all things cooking, whether you want to learn how to make a particular dish or read up of general cooking fundementals I recomend Allrecipes.', 'Cooking Central');

INSERT INTO resources (thumbnail_url, external_url, created_by, description, title) VALUES ('https://i2.wp.com/www.digitalmomblog.com/wp-content/uploads/2017/08/LEARN-TO-TYPE.jpg?resize=735%2C1102&ssl=1', 'https://www.typing.com/', 1, 'Were you raised using an abacus and a quill instead of a computer? Well head on over to typing.com where learning to type is not only fun but easy as well. Learning how to adapt to the modern world is an arduous task and starting with typing is a good idea, you save man.', 'Typing.com');
