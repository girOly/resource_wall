DELETE FROM resources;

ALTER SEQUENCE resources_id_seq RESTART WITH 1;

INSERT INTO resources (external_url, thumbnail_url, description, title) VALUES ('https://i.pinimg.com/564x/b3/65/9d/b3659db5ab4023c16742463757934d3f.jpg', 'https://dearcrissy.com/spaghetti-salad/', 'Sphaghett Salade', 'Healthy Meals for the Family');

INSERT INTO resources (external_url, thumbnail_url, description, title) VALUES ('https://i.pinimg.com/564x/cc/77/e6/cc77e61abad1887b0127891801b61838.jpg', 'https://www.popularmechanics.com/home/interior-projects/how-to/a9483/4-steps-to-saving-a-scuffed-up-staircase-15962251/', 'Sleek Wooden Stairs', 'Wood Varnish for the Staircase');
