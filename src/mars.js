class MarsRover {

  constructor(position, direction) {
    this.x = position.x;
    this.y = position.y;
    this.direction = direction;
  }

  move() {
    if (this.direction === 'N') {
      this.y = this.y + 1;
    } else {
      this.y = this.y - 1;
    }
  }
}

module.exports = MarsRover;
