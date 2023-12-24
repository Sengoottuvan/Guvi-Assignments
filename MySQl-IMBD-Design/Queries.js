//My Sql Queries


//Movie List


// Insert in movie List
INSERT INTO task.movies values(16,"Tenet",2020,"Christopher Nolan","John David");
INSERT INTO task.movies values(17,"300:The Rise of an Empire",2014,"Noam Murro","Sullivan Stapleton");

//Delete in movie list
DELETE FROM task.movies WHERE Movie_id=17;

// Update in movie list
update task.movies set Movie_name="Bahubali-2 The Conclusion" where Movie_id=15;

//Select from movie list
SELECT * FROM task.movies ORDER BY movie_name;

//Altering Movie Column
ALTER TABLE task.movies ADD Trailer varchar(255);

//Movie Review List


//Data Insertion

INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('1', 'The Dark Knight ', '9.5');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('2', '300 Spartans', '9');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('3', 'Vikram ', '8.2');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('4', 'The Five', '8');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('5', 'Kantara', '7.5');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('6', 'Deadpool2', '7.8');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('7', 'Avatar', '9.5');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('8', 'KGF Chapter-2', '9.2');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('9', 'Padmavati', '9');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('10', 'The Gangster,the Cop,the Devil', '8');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('11', 'Train to Busan', '8.7');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('12', 'John Wick', '8.5');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('13', 'Pirates of the Caribbean:Dead Man\'s Chest', '8');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('14', 'The judge', '7.8');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('15', 'Bahubali-2 The Conclusion', '8.5');
INSERT INTO `task`.`movie_review` (`Movie_id`, `Movie_name`, `Rating`) VALUES ('16', 'Tenet', '9');

//Data Select from movie List to Movie rerview list
SELECT  task.movie_review.movie_name,task.movies.director,task.movie_review.Rating FROM task.movie_review INNER JOIN task.movies ON task.movie_review.movie_id = task.movies.movie_id;

//Artist List

//Data insert in Artist list

INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('1', 'The Dark Knight', 'Christian Bale', 'Protogonist,The  Batman ', 'Stunt, Fight, Dance');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('2', '300 Spartans', 'Gerard butler', 'Protogonist, Warrier, Leader, Gladiator, King', 'Stunt, Fight, Act');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('3', 'Vikram', 'Kamal Hassan', 'Ghost, Retired Military Agent, Father, Protector, Unknown Man', 'Dance, Sing, Stunt, Fight, ');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('4', 'The Five', 'Ma Dong-Soek', 'Husband, Team Leader', 'Stunt, Fight');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('5', 'Kantara', 'Rishab Shetty', 'Lord Shiva, Animal hunter, Protogonist', 'Dance, Fight, Stunt');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('6', 'Deadpool2', 'Ryan Reynolds', 'Superhero, Deadpool', 'Fight, Stunt, Dance, Comedy');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('7', 'avatar', 'Sam Worthington', 'Avatar lead, Scientist, Brother', 'Stunt, Fight, Navi Language');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('8', 'KGF Chapter2 ', 'Yash', 'Rocky, Rocky bhai, Antogonist, Gangster', 'Stunt, Fight, Gun Handling');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('9', 'Padmavati', 'Ranveer Singh', 'King, slayer', 'Fight, Dance');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('10', 'The Gangster,the Cop, the Devil', 'Ma Dong-Seok', 'Gangster, Antogonist', 'Fight,Stunt, Gun Handling');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('11', 'Train to Busan', 'Gong Yoo', 'Father, Protogonist, Leader', 'Stunt,Fight, Gun Handling');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('12', 'John Wick', 'Keanu Reaves', 'Assassin, Gangster, Husband', 'Stunt,Fight,Gun Handling');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('13', 'Pirates of the Caribbean:Dead Man\'s Chest', 'Johnny Depp', 'Ship Captain, Antogonist, Protector, Pirate', 'Stunt,Fight,Gun Handling');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('14', 'The judge', 'Robert Downy Jr.', 'Son, Advacote, Saviour', 'Iron man, stunt, Fight');
INSERT INTO `task`.`movie_artist` (`Movie_id`, `Movie_name`, `Artist_name`, `Artist_roles`, `Artist_Skills`) VALUES ('15', 'Bahubali-2 The Conclusion', 'Prabhas', 'bahubali, Shiva, Protogonist, Leader, King', 'Stunt,Fight,');


// Update in Movie list

UPDATE `task`.`movies` SET `director` = 'Zach Snyder', `Actor` = 'Gerard Butler' WHERE (`Movie_id` = '2');

//Data Select and compare in artist list and ratings

SELECT task.movie_artist.Movie_name, task.movie_artist.Artist_name, Ratings  FROM task.movie_review INNER JOIN task.movie_artist ON task.movie_review.Movie_id = task.movie_artist.Movie_id;
