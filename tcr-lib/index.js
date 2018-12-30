const watch = require('node-watch');
const readkey = require('readkey');
const init = require('./init.js').init;
const { getTestsResults } = require('./test');
const { commit } = require('./commit');
const { revert } = require('./revert');
const { push } = require('./push');

const options = {
  tcrDir : '.tcr',
  testCommand: 'npm run test',
  commitCommand: 'COMMIT_MSG="{COMMIT_MSG}" npm run commit',
  revertCommand: 'npm run revert',
  pushCommand: 'npm run push',
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

const keyCommands = [
  { fn: (str,key) => str==='p', command: () => push(options) },
  { fn: (str,key) => key.ctrl && key.name === 'c', command: () => process.exit() },
  { fn: (str,key) => key.name === 'q', command: () => process.exit() },
];
readkey(keyCommands);
