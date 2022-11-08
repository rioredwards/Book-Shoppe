const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  // eslint-disable-next-line
  it(`/books/id: should return a book and its author`, async () => {
    const resp = await request(app).get('/books/1');
    expect(resp.status).toBe(200);
    // expect(resp.body.length).toBe(4);
    expect(resp.body).toEqual({
      title: expect.any(String),
      released: expect.any(Number),
      authors: expect.any(Array),
    });
  });

  it('/books should return a list of books with id, title and release-date', async () => {
    const resp = await request(app).get('/books');
    expect(resp.body.length).toBe(4);
    const theHobbit = resp.body.find((char) => char.id === '1');
    expect(theHobbit).toHaveProperty('title', 'The Hobbit');
    expect(theHobbit).toHaveProperty('released', 1937);
  });

  afterAll(() => {
    pool.end();
  });
});
