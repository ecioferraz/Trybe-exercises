SELECT * FROM Pixar.BoxOffice;
SELECT * FROM Pixar.Movies;
SELECT * FROM Pixar.Theater;

SELECT film.title, box.domestic_sales, box.international_sales
FROM Pixar.Movies AS film
INNER JOIN Pixar.BoxOffice AS box
ON film.id = box.movie_id;

SELECT
	film.title,
	(box.domestic_sales + box.international_sales) AS 'Total sales'
FROM Pixar.Movies AS film
INNER JOIN Pixar.BoxOffice AS box
ON film.id = box.movie_id
WHERE box.international_sales > box.domestic_sales;

SELECT film.title, box.rating
FROM Pixar.Movies AS film
INNER JOIN Pixar.BoxOffice AS box
ON film.id = box.movie_id
ORDER BY box.rating DESC;

SELECT
	t.name,
    t.location,
    m.title,
    m.director,
    m.year,
    m.length_minutes
FROM Pixar.Theater AS t
LEFT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;

SELECT
	t.name,
    t.location,
	m.title,
    m.director,
    m.year,
    m.length_minutes
FROM Pixar.Theater AS t
RIGHT JOIN Pixar.Movies AS m
ON t.id = m.theater_id
ORDER BY t.name;
