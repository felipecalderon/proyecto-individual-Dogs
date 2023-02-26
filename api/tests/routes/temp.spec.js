/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { conn } = require('../../src/db.js');
const { Temperament } = require('../../src/models/relations')

const agent = session(app);
const temperamento = {
    "name": "Chillón"
};

describe('Rutas Temperamentos', () => {
  before(async () => {
    try {
      await conn.authenticate()
    } catch (error) {
      console.log(error)
    }
  });
  beforeEach(async () => {
    await Temperament.sync({ force: true })
    await Temperament.create(temperamento)
  });
  describe('DOG Routes', () => {
    it('should get 200 when get all temperaments', () =>
      agent.get('/temperaments').expect(200)
    );
    it('should get 200 when get single temperament', () =>
      agent.get(`/temperaments/?temperamento=${temperamento.name}`).expect(200)
    );
    it('should get error when get wrong temperament', () =>
      agent.get(`/temperaments/?temperamento=pepito`).expect('"Temperamento de nombre pepito no encontrado"')
    );
  });
});
