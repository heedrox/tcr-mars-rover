const watch = require('node-watch');
const init = require('./init.js').init;
const { getTestsResults } = require('./test');
const { commit } = require('./commit');
const { revert } = require('./revert');

const doTcr = options => (evt, name) => {
  console.log('updated file: ', name);
  const testOutput = getTestsResults(options);
  if (testOutput) {
    console.log('commiting');
    commit(options);
  } else {
    console.log('reverting');
    revert(options);
  }
};

const tcr = options => {
  init(options);
  watch(['src/', 'test/'], { recursive: true, filter: options.watchFilter }, doTcr(options));
};

module.exports = tcr;
