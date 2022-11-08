const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
  });
  // eslint-disable-next-line
  it(`/authors/id: should return a book and its author`, async () => {
    const resp = await request(app).get('/authors/1');
    expect(resp.status).toBe(200);
    // expect(resp.body.length).toBe(4);
    expect(resp.body).toEqual({
      name: expect.any(String),
      dob: expect.any(String),
      pob: expect.any(String),
      books: expect.any(Array),
    });
  });

  it('/authors should return a list of authors with id, title and release-date', async () => {
    const res = await request(app).get('/authors');
    expect(res.body.length).toEqual(4);
    const tolkein = res.body.find((char) => char.id === '1');
    expect(tolkein).toHaveProperty('name', 'J. R. R. Tolkein');
    expect(tolkein).toHaveProperty('dob', '1892-01-03');
    expect(tolkein).toHaveProperty('pob', 'Bloemfontein, Orange Free State');
  });
  afterAll(() => {
    pool.end();
  });
});
