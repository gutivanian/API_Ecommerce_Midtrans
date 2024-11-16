const request = require('supertest');
const app = require('../app');
const pool = require('../config/db');

describe('Order Endpoints', () => {
    afterAll(() => {
        pool.end(); // close connection after all tests
    });

    it('should fetch all orders', async () => {
        const res = await request(app).get('/api/orders');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('should create a new order', async () => {
        const res = await request(app)
            .post('/api/orders')
            .send({
                total_price: 20000,
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('order_id');
    });
});
