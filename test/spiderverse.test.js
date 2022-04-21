const Spiderman = require('../app/spiderman.js');

describe("Unit test for Spiderman Class", () => {
    test('Create an object to Spiderman Class', () => {
      const spiderman = new Spiderman('Spiderman', 30, 'Peter Parker', 5, 'Marvel');
      expect(spiderman.name).toBe('Spiderman');
      expect(spiderman.age).toBe(30);
      expect(spiderman.actor).toBe('Peter Parker');
      expect(spiderman.numberOfMovies).toBe(5);
      expect(spiderman.filmStudio).toBe('Marvel');
    });
  })