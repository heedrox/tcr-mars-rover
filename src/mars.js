const { COMMANDS } = require('./commands');

const isMoveCommand = command => (Object.keys(COMMANDS).indexOf(command) >= 0);

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
    const newPos = COMMANDS[command][this.direction](this.x, this.y, this.direction);
    this.moveTo(newPos);
  }

  execute(commands) {
    commands.forEach((command) => this.executeCommand(command));
  }
}

module.exports = MarsRover;
