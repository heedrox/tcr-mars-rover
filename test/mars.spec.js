const MarsRover = require('../src/mars');

describe('Mars Rover Kata', () => {
  it('class MarsRover constructs with initial position', () => {
    const marsRover = new MarsRover({x: 0, y: 0});

    expect(marsRover.x).to.equal(0);
    expect(marsRover.y).to.equal(0);
  });
});