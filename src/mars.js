const byPos = newPos => obstacle => ((newPos.x === obstacle.x) && (newPos.y === obstacle.y));
class MarsRover {

  constructor(position, direction, commands, obstacles) {
    this.x = position.x;
    this.y = position.y;
    this.direction = direction;
    this.commands = commands;
    this.obstacles = obstacles;
  }

  moveTo(newPos) {
    this.x = newPos.x > 10 ? 0 : newPos.x;
    this.y = newPos.y > 10 ? 0 : newPos.y;
    this.direction = newPos.direction;
  }

  stopAndThrowErrorIfObstacle(newPos) {
    if (this.obstacles && this.obstacles.find(byPos(newPos))) {
      throw new Error();
    }
  }

  executeCommand(command) {
    const newPos = this.commands[command][this.direction](this.x, this.y, this.direction);
    this.stopAndThrowErrorIfObstacle(newPos);
    this.moveTo(newPos);
  }

  execute(commands) {
    commands.forEach((command) => this.executeCommand(command));
  }
}

module.exports = MarsRover;
