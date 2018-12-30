const { DIRECTIONS } = require('./constants');

const moveCommands = {
  [DIRECTIONS.N]: (x, y) => (x, y + 1),
};

class MarsRover {

  constructor(position, direction) {
    this.x = position.x;
    this.y = position.y;
    this.direction = direction;
  }

  executeCommand(command) {
    if (command === 'f') {
      if (this.direction === DIRECTIONS.N) {
        this.y = this.y + 1;
      } else if (this.direction === DIRECTIONS.S) {
        this.y = this.y - 1;
      } else if (this.direction === DIRECTIONS.W) {
        this.x = this.x - 1;
      } else if (this.direction === DIRECTIONS.E) {
        this.x = this.x + 1;
      }
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
