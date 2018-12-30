const execSync = require('child_process').execSync;

const push = (options) => {
  try {
    console.log('pushing...');
    execSync(options.pushCommand);
    console.log('pushed');
  } catch (err) {
    console.log('push failed', err);
  }
};

module.exports.push = push;
