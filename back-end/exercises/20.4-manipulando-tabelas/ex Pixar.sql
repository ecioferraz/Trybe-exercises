SELECT * FROM Pixar.Movies;

INSERT INTO Pixar.Movies (title, director, year, length_minutes)
VALUES
	('Monstros SA', 'Pete Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Peter Docter', 2008, 104);

SELECT * FROM Pixar.BoxOffice;

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES (8, 6.8, 450000000, 370000000);

UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE title LIKE 'Procurando Nemo';

UPDATE Pixar.Movies
SET title = 'Ratatouille', year = 2007
WHERE id LIKE 3;

INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES
	(8, 8.5, 300000000, 250000000),
    (10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000);

DELETE FROM Pixar.BoxOffice
WHERE movie_id LIKE 11;
DELETE FROM Pixar.Movies
WHERE title LIKE 'WALL-E';

DELETE FROM Pixar.BoxOffice
WHERE movie_id IN(2, 9);
DELETE FROM Pixar.Movies
WHERE director LIKE 'Andrew Staton';
