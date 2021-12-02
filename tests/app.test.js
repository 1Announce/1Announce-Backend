const request = require ('supertest');
const app =  require ('../src/app');

describe('Backend Home API', () => {
    test('GET /', async () => {
        const res = await request(app).get('/');
        expect(res.status).toEqual(200);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body).toHaveProperty('message');
        expect(res.body.message).toEqual('Hello, World! 👋');
    });

//     test('Invalid GET endpoint should throw error', async () => {
//         const res = await request(app).get('/invaild');

//         expect(res.status).toEqual(500);
//         expect(res.body).toBeInstanceOf(Object);
//         expect(res.body).toHaveProperty('message');
//         expect(res.body.message).toEqual(
//             'Invaild Request - Endpoint: /invaild'
//         );
//     });

//     test('Invalid POST endpoint should throw error', async () => {
//         const res = await request(app).post('/invaild').send({
//             test: 'test',
//         });

//         expect(res.status).toEqual(500);
//         expect(res.body).toBeInstanceOf(Object);
//         expect(res.body).toHaveProperty('message');
//         expect(res.body.message).toEqual(
//             'Invaild Request - Endpoint: /invaild'
//         );
//     });
});