-- Exercise 1 (done for you):
SELECT * FROM users;



-- Exercise 2 (done for you):
SELECT id, first_name, last_name 
FROM users;



-- Exercise 3
SELECT id, first_name, last_name 
FROM users
ORDER BY last_name;



-- Exercise 4
SELECT id, user_id, image_url
FROM posts
WHERE user_id=26;



-- Exercise 5
SELECT id, user_id, image_url
FROM posts
WHERE user_id=26 OR user_id=12;


-- Exercise 6
SELECT COUNT(*) FROM Posts;



-- Exercise 7
SELECT user_id, COUNT(user_id)
FROM comments
GROUP BY user_id
ORDER BY COUNT desc;


-- Exercise 8
SELECT posts.id, posts.image_url, posts.user_id, 
users.username, users.first_name, users.last_name
FROM posts
INNER JOIN users ON posts.user_id = users.id
WHERE posts.user_id=12 OR posts.user_id=26;



-- Exercise 9
SELECT posts.id, posts.pub_date, posts.user_id
FROM posts
INNER JOIN following ON posts.user_id = following.following_id
WHERE following.user_id=26;



-- Exercise 10




-- Exercise 11
INSERT INTO bookmarks (user_id, post_id)
VALUES (26, 219);

INSERT INTO bookmarks (user_id, post_id)
VALUES (26, 220);

INSERT INTO bookmarks (user_id, post_id)
VALUES (26, 221);



-- Exercise 12
DELETE FROM bookmarks WHERE post_id=219 and user_id=26;
DELETE FROM bookmarks WHERE post_id=220 and user_id=26;
DELETE FROM bookmarks WHERE post_id=221 and user_id=26;


-- Exercise 13

UPDATE users
SET email = 'knick2022@gmail.com'
WHERE first_name = 'Nicholas';


-- Exercise 14
