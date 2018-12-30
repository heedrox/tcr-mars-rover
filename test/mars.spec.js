const MarsRover = require('../src/mars');

describe('Mars Rover Kata', () => {
  it('class MarsRover constructs with initial position', () => {
    const marsRover = new MarsRover({});

    expect(marsRover).not.to.be.undefined;
  });
});