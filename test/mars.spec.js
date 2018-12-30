const MarsRover = require('../src/mars');

describe('Mars Rover Kata', () => {
  it('class MarsRover exists', () => {
    const marsRover = new MarsRover();

    expect(marsRover).not.to.be.undefined;
  });
});