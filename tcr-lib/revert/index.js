const execSync = require('child_process').execSync;

const revert = (options) => {
  try {
    execSync(options.revertCommand);
    console.log('reverted');
  } catch (err) {
    // console.log('revert failed', err);
  }
};

module.exports.revert = revert;
