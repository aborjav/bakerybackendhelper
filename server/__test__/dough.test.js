import request from 'supertest';
import app from '../app'; // import your Express app

describe('Dough routes', () => {
  it('should get all dough', async () => {
    const res = await request(app)
      .get('/dough');
    expect(res.statusCode).toEqual(200);
  });
});


