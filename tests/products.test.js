const request = require('supertest');
const app = require('../app'); // pastikan app.js diexport sebagai module
const pool = require('../config/db');

describe('Product Endpoints', () => {
    afterAll(() => {
        pool.end(); // close connection after all tests
    });

    it('should fetch all products', async () => {
        const res = await request(app).get('/api/products');
        expect(res.statusCode).toEqual(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });

    it('should create a new product', async () => {
        const res = await request(app)
            .post('/api/products')
            .send({
                name: 'Test Product',
                description: 'Description for test product',
                price: 5000,
                stock: 10,
            });
        expect(res.statusCode).toEqual(200);
        expect(res.body).toHaveProperty('product_id');
        expect(res.body.name).toBe('Test Product');
    });
});
