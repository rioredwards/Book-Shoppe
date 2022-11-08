-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run npm run setup-db
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  dob VARCHAR,
  pob VARCHAR
);

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR NOT NULL,
  released INT NOT NULL
);

INSERT INTO authors (name, dob, pob)
VALUES 
('J. R. R. Tolkein', '1892-01-03', 'Bloemfontein, Orange Free State'),
('J. D. Salinger', '1919-01-01', 'Cornish, New Hampshire, U.S'),
('C. S. Lewis', '1898-11-29', 'Belfast, Ireland'),
('Paulo Coelho', '1947-08-24 ', 'Rio de Janeiro, Brazil');

INSERT INTO books (title, released)
VALUES
('The Hobbit', 1937),
('The Alchemist', 1988),
('The Catcher in the Rye', 1951),
('The Lion, the Witch and the Wardrobe', 1950);
