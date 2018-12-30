const { DIRECTIONS } = require('./constants');

const moveCommands = {
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
    this.direction = newPos.direction;
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
