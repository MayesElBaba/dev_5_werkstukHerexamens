const request = require('supertest');
const app = require('../../app');


let catUUID;
describe('Manage category', () => {
    it('Add a category with POST request', (done) => {
        request(app)
            .post('/categories')
            .send({ name: 'Cat 1' })
            .set('Accept', 'application/json')
            .end(function(err, res) {
                if (err) return done(err);
                let { message, status, category_uuid } = res.body;
                expect(message).toEqual('Category saved !');
                expect(status).toBe(201);
                catUUID = category_uuid;
                return done();
            });
    });

    it('Add 4 logs to link at the same category', (done) => {
        for (let i = 0; i < 4; i++) {
            request(app)
                .post('/logs')
                .send({ text: `log ${i+1}`, uuid_category_fk: catUUID })
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if (err) return done(err);
                    let { message, status } = res.body;
                    expect(message).toEqual('Log saved !');
                    expect(status).toBe(201);
                    return done();
                });
        }
    })

    it('Check if all logs linked is equals to 4', (done) => {
        request(app)
            .get('/logs')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                let { logs } = res.body;
                const logsFiltred = logs.filter(log => log.uuid_category_fk == catUUID);
                expect(logsFiltred.length).toBe(4);
                return done();
            });
    });

    it('Get categories with GET request', (done) => {
        request(app)
            .get('/categories')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                let { categories } = res.body;
                expect(categories.length).toBeGreaterThanOrEqual(1);
                return done();
            });
    });

    it('Delete a category with DELETE request', (done) => {
        request(app)
            .delete(`/categories/${catUUID}`)
            .end(function(err, res) {
                if (err) return done(err);
                let { message, status, uuid } = res.body;
                expect(message).toEqual('Category deleted !');
                expect(status).toBe(200);
                expect(uuid).toEqual(catUUID);
                return done();
            });
    });

    it('Check if all logs linked have been deleted', (done) => {
        request(app)
            .get('/logs')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .end(function(err, res) {
                if (err) return done(err);
                let { logs } = res.body;
                const logsFiltred = logs.filter(log => log.uuid_category_fk == catUUID);
                expect(logsFiltred.length).toBe(0);
                return done();
            });
    });



});