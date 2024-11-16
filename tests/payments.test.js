const request = require('supertest');
const app = require('../app');
const pool = require('../config/db');

describe('Payment Endpoints', () => {
    afterAll(() => {
        pool.end(); // close connection after all tests
    });

    it('should fetch all payments', async () => {
        const res = await request(app).get('/api/payments');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('should create a new payment', async () => {
        const res = await request(app)
            .post('/api/payments')
            .send({
                order_id: 1,
                status: 'PAID',
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('payment_id');
    });
});
