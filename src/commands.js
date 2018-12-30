const { DIRECTIONS } = require('./constants');

const COMMANDS = {
  'f': {
    [DIRECTIONS.N]: (x, y, direction) => ({ x, y: y + 1, direction }),
    [DIRECTIONS.S]: (x, y, direction) => ({ x, y: y - 1, direction }),
    [DIRECTIONS.W]: (x, y, direction) => ({ x: x - 1, y, direction }),
    [DIRECTIONS.E]: (x, y, direction) => ({ x: x + 1, y, direction }),
  },
  'b': {
    [DIRECTIONS.N]: (x, y, direction) => ({ x, y: y - 1, direction }),
    [DIRECTIONS.S]: (x, y, direction) => ({ x, y: y + 1, direction }),
    [DIRECTIONS.W]: (x, y, direction) => ({ x: x + 1, y, direction }),
    [DIRECTIONS.E]: (x, y, direction) => ({ x: x - 1, y, direction }),
  },
  'l': {
    [DIRECTIONS.N]: (x, y, direction) => ({ x, y, direction: DIRECTIONS.W }),
    [DIRECTIONS.W]: (x, y, direction) => ({ x, y, direction: DIRECTIONS.S }),
    [DIRECTIONS.S]: (x, y, direction) => ({ x, y, direction: DIRECTIONS.E }),
    [DIRECTIONS.E]: (x, y, direction) => ({ x, y, direction: DIRECTIONS.N }),
  },
  'r': {
    [DIRECTIONS.N]: (x, y, direction) => ({ x, y, direction: DIRECTIONS.E }),
    [DIRECTIONS.W]: (x, y, direction) => ({ x, y, direction: DIRECTIONS.N }),
    [DIRECTIONS.S]: (x, y, direction) => ({ x, y, direction: DIRECTIONS.W }),
    [DIRECTIONS.E]: (x, y, direction) => ({ x, y, direction: DIRECTIONS.S }),
  },
};

module.exports.COMMANDS = COMMANDS;
