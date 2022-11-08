const pool = require('../lib/utils/pool');
const setup = require('../data/setup');
const request = require('supertest');
const app = require('../lib/app');

describe('authors routes', () => {
  beforeEach(() => {
    return setup(pool);
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
