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
    const byPos = newPos => obstacle => ((newPos.x === obstacle.x) && (newPos.y === obstacle.y));
    const findByPos = (newPos) => this.obstacles.find(byPos(newPos));
    const findIt = newPos => ((newPos.x === this.obstacles[0].x)&&(newPos.y === this.obstacles[0].y)) ||
      ((newPos.x === this.obstacles[1].x)&&(newPos.y === this.obstacles[1].y));
    if (this.obstacles && findByPos(newPos)) {
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
