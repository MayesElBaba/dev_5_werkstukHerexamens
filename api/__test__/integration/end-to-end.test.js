const request = require('supertest');
const app = require('../../app');

/* end to end test : 
Test de volledige applicatie op bijvoorbeeld sporen die overblijven en maakt en volledige run  inclusief database
*/
describe('Manage category', () => {
    
/* categories toevoegen met alle eigenschappen*/ 
    it('Add a category with POST request', (done) => {
        request(app)
            .post('/categories')
            .send({ name: 'Cat 1' })
            .set('Accept', 'application/json')
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty("message")
                expect(res.body).toHaveProperty("status")
                expect(res.body.status).toBe(201);
                expect(res.body).toHaveProperty("category_uuid")
                return done();
            });
    });

     /* categories tonen met alle eigenschappen*/ 

    it('Get categories with GET request', (done) => {
        request(app)
            .get('/categories')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                if (err) return done(err);
                expect(res.body).toHaveProperty("categories")
                expect(res.body.categories[0]).toHaveProperty("uuid_category")
                expect(res.body.categories[0]).toHaveProperty("name")
                return done();
            });
    })

})