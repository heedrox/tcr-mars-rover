const { DIRECTIONS } = require('./constants');

const moveCommands = {
  'f': {
    [DIRECTIONS.N]: (x, y) => ({ x, y: y + 1 }),
    [DIRECTIONS.S]: (x, y) => ({ x, y: y - 1 }),
    [DIRECTIONS.W]: (x, y) => ({ x: x - 1, y }),
    [DIRECTIONS.E]: (x, y) => ({ x: x + 1, y }),
  },
  'b': {
    [DIRECTIONS.N]: (x, y) => ({ x, y: y - 1 }),
    [DIRECTIONS.S]: (x, y) => ({ x, y: y + 1 }),
    [DIRECTIONS.W]: (x, y) => ({ x: x + 1, y }),
    [DIRECTIONS.E]: (x, y) => ({ x: x - 1, y }),
  },
};

class MarsRover {

  constructor(position, direction) {
    this.x = position.x;
    this.y = position.y;
    this.direction = direction;
  }

  moveTo(newPos) {
    this.x = newPos.x;
    this.y = newPos.y;
  }

  executeCommand(command) {
    if ((command === 'f')||(command === 'b')) {
      const newPos = moveCommands[command][this.direction](this.x, this.y);
      this.moveTo(newPos);
    }
  }

  execute(commands) {
    commands.forEach((command) => this.executeCommand(command));
  }
}

module.exports = MarsRover;
