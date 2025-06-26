import { app } from './app';
import request from 'supertest';

describe('E2E: app server test', () => {
  beforeAll(async () => {
    await app.ready();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should verify if server is running', async () => {
    const response = await request(app.server).get('/').expect(200);

    expect(response.body).toBeDefined();
    expect(response.status).toBe(200);
  });
});
