const { DIRECTIONS } = require('./constants');

const moveCommands = {
  [DIRECTIONS.N]: (x, y) => ({ x, y: y + 1 }),
  [DIRECTIONS.S]: (x, y) => ({ x, y: y - 1 }),
  [DIRECTIONS.W]: (x, y) => ({ x: x - 1, y }),
  [DIRECTIONS.E]: (x, y) => ({ x: x + 1, y }),
};

class MarsRover {

  constructor(position, direction) {
    this.x = position.x;
    this.y = position.y;
    this.direction = direction;
  }

  executeCommand(command) {
    if (command === 'f') {
      const result = moveCommands[this.direction](this.x, this.y);
      this.x = result.x;
      this.y = result.y;
    } else {
      if (this.direction === DIRECTIONS.N) {
        this.y = this.y - 1;
      } else if (this.direction === DIRECTIONS.S) {
        this.y = this.y + 1;
      } else if (this.direction === DIRECTIONS.W) {
        this.x = this.x + 1;
      } else if (this.direction === DIRECTIONS.E) {
        this.x = this.x - 1;
      }
    }
  }

  execute(commands) {
    commands.forEach((command) => this.executeCommand(command));
  }
}

module.exports = MarsRover;
