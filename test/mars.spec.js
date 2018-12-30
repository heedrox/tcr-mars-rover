const MarsRover = require('../src/mars');

describe('Mars Rover Kata', () => {
  describe('when constructing', () => {
    it('sets initial position', () => {
      const marsRover = new MarsRover({ x: 0, y: 0 });

      expect(marsRover.x).to.equal(0);
      expect(marsRover.y).to.equal(0);
    });
    it('sets facing direction', () => {
      const marsRover = new MarsRover({ x: 0, y: 0 }, 'N');

      expect(marsRover.direction).to.equal('N');
    });
  });
  describe('when moving', () => {
    const cases = [
      { pos: { x: 5, y: 5 }, command: 'f', expected: { x: 5, y: 6 } }, ];
    cases.forEach((tcase) => {
      it(`moves forward - case ${tcase.pos.x}/${tcase.pos.y} / ${tcase.command}`, () => {
        const marsRover = new MarsRover({ x: 5, y: 5 }, 'N');

        marsRover.move(['f']);

        expect(marsRover.x).to.equal(5);
        expect(marsRover.y).to.equal(6);
      });
    });
  });
});