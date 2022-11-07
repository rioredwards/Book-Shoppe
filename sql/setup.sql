-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS authors;
DROP TABLE IF EXISTS books;

CREATE TABLE authors (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  name VARCHAR NOT NULL,
  dob DATE,
  pob VARCHAR
);

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY,
  title VARCHAR NOT NULL,
  released INT NOT NULL
);

INSERT INTO authors (name, dob, pob)
VALUES 
('cool author-name!', '1998-10-13', 'cool pob!');

INSERT INTO books (title, released)
VALUES
('cool book-title!', 1994);
