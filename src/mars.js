const { DIRECTIONS } = require('./constants');
class MarsRover {

  constructor(position, direction) {
    this.x = position.x;
    this.y = position.y;
    this.direction = direction;
  }

  move() {
    if (this.direction === DIRECTIONS.N) {
      this.y = this.y + 1;
    } else if (this.direction === DIRECTIONS.S) {
      this.y = this.y - 1;
    } else if (this.direction === DIRECTIONS.W) {
      this.x = this.x - 1;
    }
  }
}

module.exports = MarsRover;
