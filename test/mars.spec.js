const MarsRover = require('../src/mars');

describe('Mars Rover Kata', () => {
  describe('when constructing', () => {
    it('sets initial position', () => {
      const marsRover = new MarsRover({x: 0, y: 0});

      expect(marsRover.x).to.equal(0);
      expect(marsRover.y).to.equal(0);
    });
    it('faces', () => {
      const marsRover = new MarsRover({x: 0, y: 0});

      expect(marsRover.x).to.equal(0);
      expect(marsRover.y).to.equal(0);
    });
  });
});