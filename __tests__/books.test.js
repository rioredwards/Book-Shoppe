const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('books routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('/books should return a list of books with id, title and release-date', async () => {
    const res = await request(app).get('/books');
    expect(res.body.length).toEqual(4);
    const theHobbit = res.body.find((char) => char.id === '1');
    expect(theHobbit).toHaveProperty('title', 'The Hobbit');
    expect(theHobbit).toHaveProperty('released', 1937);
  });

  afterAll(() => {
    pool.end();
  });
});
