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
      { pos: { x: 5, y: 5 }, dir: DIRECTIONS.N, command: 'b', expected: { x: 5, y: 4 } },
      { pos: { x: 5, y: 4 }, dir: DIRECTIONS.N, command: 'b', expected: { x: 5, y: 3 } },
      { pos: { x: 5, y: 4 }, dir: DIRECTIONS.S, command: 'b', expected: { x: 5, y: 5 } },
      { pos: { x: 5, y: 4 }, dir: DIRECTIONS.W, command: 'b', expected: { x: 6, y: 4 } },
      { pos: { x: 5, y: 4 }, dir: DIRECTIONS.E, command: 'b', expected: { x: 4, y: 4 } },

    ];
    cases.forEach((tcase) => {
      it(`executes commands - case ${tcase.pos.x}/${tcase.pos.y} / ${tcase.dir} / ${tcase.command}`, () => {
        const marsRover = new MarsRover({ x: tcase.pos.x, y: tcase.pos.y }, tcase.dir);

        marsRover.execute([tcase.command]);

        expect(marsRover.x).to.equal(tcase.expected.x);
        expect(marsRover.y).to.equal(tcase.expected.y);
      });
    });
  });

  it('executes several commands', () => {
    const marsRover = new MarsRover({ x: 5, y: 5 }, DIRECTIONS.N);

    marsRover.execute(['f','f']);

    expect(marsRover.y).to.equal(7);
  });

  describe('when turning', () => {
    const cases = [
      { dir: DIRECTIONS.N, command: 'l', expectedDir: DIRECTIONS.W },
    ];
    cases.forEach((tcase) => {
      it(`executes turn - case ${tcase.dir} / ${tcase.command}`, () => {
        const marsRover = new MarsRover({ x: 5, y: 5 }, tcase.dir);

        marsRover.execute([tcase.command]);

        expect(marsRover.direction).to.equal(tcase.expectedDir);
      });
    });
  });
});