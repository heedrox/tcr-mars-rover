const watch = require('node-watch');
const readline = require('readline');
const init = require('./init.js').init;
const { getTestsResults } = require('./test');
const { commit } = require('./commit');
const { revert } = require('./revert');

const options = {
  tcrDir : '.tcr',
  testCommand: 'npm run test',
  commitCommand: 'COMMIT_MSG="{COMMIT_MSG}" npm run commit',
  revertCommand: 'npm run revert',
  watchFilter: /.js$/,
  excludeMessageCommit: [/^$/, /^> /, /.* passing \(.*\)$/]
};

init(options);
watch(['src/', 'test/'], { recursive: true, filter: options.watchFilter }, function (evt, name) {
  // console.log(evt);
  console.log('updated file: ', name);
  const testOutput = getTestsResults(options);
  if (testOutput) {
    console.log('commiting');
    commit(options);
  } else {
    console.log('reverting');
    revert(options);
  }
});

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
process.stdin.on('keypress', (str, key) => {
  if (str === 'p') {
    console.log('push');
  }
  if (key.ctrl && key.name === 'c') {
    process.exit(); // eslint-disable-line no-process-exit
  }
  if (key.name === 'q') {
    process.exit(); // eslint-disable-line no-process-exit
  }
});
