const { COMMANDS } = require('./commands');

class MarsRover {

  constructor(position, direction, commands) {
    this.x = position.x;
    this.y = position.y;
    this.direction = direction;
    this.commands = commands;
  }

  moveTo(newPos) {
    this.x = newPos.x > 10 ? 0 : newPos.x;
    this.y = newPos.y > 10 ? 0 : newPos.y;
    this.direction = newPos.direction;
  }

  executeCommand(command) {
    console.log(this.commands);
    const newPos = COMMANDS[command][this.direction](this.x, this.y, this.direction);
    this.moveTo(newPos);
  }

  execute(commands) {
    commands.forEach((command) => this.executeCommand(command));
  }
}

module.exports = MarsRover;
