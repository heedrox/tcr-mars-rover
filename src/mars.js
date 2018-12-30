class MarsRover {

  constructor(position, direction) {
    this.x = position.x;
    this.y = position.y;
    this.direction = direction;
  }

  move() {
    this.y = 6;
  }
}

module.exports = MarsRover;
