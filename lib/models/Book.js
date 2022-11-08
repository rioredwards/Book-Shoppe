const pool = require('../utils/pool');

class Book {
  id;
  title;
  released;
  authors;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.released = row.released;
    this.authors = row.authors;
  }

  static async getById(id) {
    /* 
    const { rows } = await pool.query(
      `
    select books.*,
          coalesce(
            json_agg(to_jsonb(books_authors))
            filter (WHERE books_authors.id IS NOT NULL), '[]') as books_authors
            from books left join books_authors on books.id = books_authors.book_id
            left join authors on authors.id = books_authors_.author_id
            where authors.id = $1
            group by books.id;`,
            [id]
            ); 
            */
    const { rows } = await pool.query(
      `
        select books.*, 
        coalesce(
          json_agg(to_jsonb(authors))
          filter (WHERE authors.id IS NOT NULL), '[]') as authors
          from books left join books_authors
          on books.id = books_authors.book_id
          left join authors on authors.id = books_authors.author_id
          where authors.id = $1
          group by books.id;
          `,
      [id]
    );
    return new Book(rows[0]);
  }

  static async getAll() {
    const { rows } = await pool.query('SELECT * from books');
    return rows.map((row) => new Book(row));
  }
}

module.exports = Book;
