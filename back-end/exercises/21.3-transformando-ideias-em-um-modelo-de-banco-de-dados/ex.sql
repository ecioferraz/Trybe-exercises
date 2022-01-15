CREATE DATABASE IF NOT EXISTS zoo;
USE zoo;

CREATE TABLE animals(
	animal_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    species VARCHAR(100) NOT NULL,
    sex VARCHAR(10) NOT NULL,
    age TINYINT UNSIGNED NOT NULL,
    location VARCHAR(100) NOT NULL
) engine=InnoDB;

CREATE TABLE managers(
	manager_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL
) engine=InnoDB;

CREATE TABLE carers(
	carer_id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    manager_id INT NOT NULL,
    FOREIGN KEY (manager_id) REFERENCES managers(manager_id)
) engine=InnoDB;

CREATE TABLE carer_animal(
	carer_id INT NOT NULL,
    animal_id INT NOT NULL,
    FOREIGN KEY (carer_id) REFERENCES carers(carer_id),
    FOREIGN KEY (animal_id) REFERENCES animals(animal_id)
) engine=InnoDB;
