const Spiderman = require('../app/spiderman.js');

describe("Unit test for Spiderman Class", () => {
    test('1)Create an object to Spiderman Class', () => {
      const spiderman = new Spiderman('Spiderman', 30, 'Tom Holland', 5, 'Marvel');
      expect(spiderman.name).toBe('Spiderman');
      expect(spiderman.age).toBe(30);
      expect(spiderman.actor).toBe('Tom Holland');
      expect(spiderman.numberOfMovies).toBe(5);
      expect(spiderman.filmStudio).toBe('Marvel');
    });

    test('2)Method to getInfo', () => {
      const spiderman = new Spiderman('Spiderman', 30, 'Tom Holland', 5, 'Marvel');

      expect(spiderman.getInfo()).toBe('Hi, I\'am Tom Holland from Marvel Studio.');
    });
  })