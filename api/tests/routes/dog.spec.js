/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { conn } = require('../../src/db.js');
const { Dog } = require('../../src/models/relations')

const agent = session(app);
const dog = {
  "nombre": "Perro Dobby",
  "imagen": "https://bestmoviesrightnow.com/wp-content/uploads/2021/08/Funny-dog-movies_.png",
  "alturamin": 20,
  "alturamax": 25,
  "pesomin": 8,
  "pesomax": 20,
  "vidamin": 6,
  "vidamax": 13,
  "origen": 'database',
  "arrTemperamentosId": ["8433d35d-dbfa-4d75-a4c9-715b72d99b80", "8137d182-91ac-4839-b89c-98fb6e2a45ee"]
};

describe('Rutas DOGS', () => {
  before(async () => {
    try {
      await conn.authenticate()
    } catch (error) {
      console.log(error)
    }
  });
  beforeEach(async () => {
    await Dog.sync({ force: true })
    await Dog.create(dog)
  });
  describe('DOG Routes', () => {
    it('should get 200', () =>
      agent.get('/dogs').expect(200)
    );
    it('should get 200 when find the dog', () =>
      agent.get(`/dogs/?name=${dog.nombre}`).expect(200)
    );
    it('should get 200 when find the ID', () =>
      agent.get(`/dogs/45`).expect(200)
    );
    it('should get 404 when not find the ID', () =>
      agent.get(`/dogs/455`).expect(404)
    );
  });
});
