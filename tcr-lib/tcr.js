const watch = require('node-watch');
const execSync = require('child_process').execSync;

const WATCH_FILTER = /.js$/;

const TEST_COMMAND = 'npm run test';
const COMMIT_COMMAND = 'npm run commit';
const REVERT_COMMAND = 'npm run revert';

function testsFail() {
  try {
    return parseInt(execSync(TEST_COMMAND));
  } catch (err) {
    return 1;
  }
}

function commit() {
  return execSync(COMMIT_COMMAND);
}

function revert() {
  return execSync(REVERT_COMMAND);
}

watch(['src/', 'test/'], { recursive: true, filter: WATCH_FILTER }, function (evt, name) {
  console.log(evt);
  console.log(name);
  if (testsFail()) {
    console.log('reverting');
    revert();
  } else {
    console.log('commiting');
    commit();
  }
});
