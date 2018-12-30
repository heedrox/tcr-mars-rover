const { DIRECTIONS } = require('./constants');

const moveCommands = {
  'f': {
    [DIRECTIONS.N]: (x, y, dir) => ({ x, y: y + 1, dir }),
    [DIRECTIONS.S]: (x, y, dir) => ({ x, y: y - 1, dir }),
    [DIRECTIONS.W]: (x, y, dir) => ({ x: x - 1, y, dir }),
    [DIRECTIONS.E]: (x, y, dir) => ({ x: x + 1, y, dir }),
  },
  'b': {
    [DIRECTIONS.N]: (x, y, dir) => ({ x, y: y - 1, dir }),
    [DIRECTIONS.S]: (x, y, dir) => ({ x, y: y + 1, dir }),
    [DIRECTIONS.W]: (x, y, dir) => ({ x: x + 1, y, dir }),
    [DIRECTIONS.E]: (x, y, dir) => ({ x: x - 1, y, dir }),
  },
};

const isMoveCommand = command => (Object.keys(moveCommands).indexOf(command) >= 0);

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
    if (isMoveCommand(command)) {
      const newPos = moveCommands[command][this.direction](this.x, this.y, this.direction);
      this.moveTo(newPos);
    }
  }

  execute(commands) {
    commands.forEach((command) => this.executeCommand(command));
  }
}

module.exports = MarsRover;
