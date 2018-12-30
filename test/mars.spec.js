const { DIRECTIONS } = require('../src/constants');
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
      { pos: { x: 5, y: 5 }, dir: DIRECTIONS.N, command: 'f', expected: { x: 5, y: 6 } },
      { pos: { x: 5, y: 4 }, dir: DIRECTIONS.N, command: 'f', expected: { x: 5, y: 5 } },
      { pos: { x: 5, y: 4 }, dir: DIRECTIONS.S, command: 'f', expected: { x: 5, y: 3 } },
      { pos: { x: 5, y: 4 }, dir: DIRECTIONS.W, command: 'f', expected: { x: 4, y: 4 } },
      { pos: { x: 5, y: 4 }, dir: DIRECTIONS.E, command: 'f', expected: { x: 6, y: 4 } },
    ];
    cases.forEach((tcase) => {
      it(`moves forward - case ${tcase.pos.x}/${tcase.pos.y} / ${tcase.dir} / ${tcase.command}`, () => {
        const marsRover = new MarsRover({ x: tcase.pos.x, y: tcase.pos.y }, tcase.dir);

        marsRover.move(['f']);

        expect(marsRover.x).to.equal(tcase.expected.x);
        expect(marsRover.y).to.equal(tcase.expected.y);
      });
    });
  });
});