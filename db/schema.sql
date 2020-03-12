CREATE DATABASE burger;
USE burger;

CREATE TABLE burgers(
id INT NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(225) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY (id)
);



   