const readkey = require('readkey');
const { push } = require('./push');
const tcr = require('./tcr');

const options = {
  tcrDir : '.tcr',
  testCommand: 'npm run test',
  commitCommand: 'COMMIT_MSG="{COMMIT_MSG}" npm run commit',
  revertCommand: 'npm run revert',
  pushCommand: 'npm run push',
  watchFilter: /.js$/,
  excludeMessageCommit: [/^$/, /^> /, /.* passing \(.*\)$/]
};

const keyCommands = [
  { fn: (str,key) => str==='p', command: () => push(options) },
  { fn: (str,key) => key.ctrl && key.name === 'c', command: () => process.exit() },
  { fn: (str,key) => key.name === 'q', command: () => process.exit() },
];

tcr(options);
readkey(keyCommands);
