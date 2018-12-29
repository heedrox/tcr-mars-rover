const fs = require('fs');

const createTcrDirectory = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
};

const init = (options) => {
  createTcrDirectory(options.tcrDir);
};

module.exports.init = init;
