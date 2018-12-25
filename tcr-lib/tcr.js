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
  try {
    //TODO silently fail
    execSync(COMMIT_COMMAND, { stdio: 'pipe' });
    console.log('commited');
  } catch (err) {
    // console.log('commit failed, probably nothing to commit');
  }
}

function revert() {
  try {
    execSync(REVERT_COMMAND);
    console.log('reverted');
  } catch (err) {
    // console.log('revert failed', err);
  }
}

watch(['src/', 'test/'], { recursive: true, filter: WATCH_FILTER }, function (evt, name) {
  // console.log(evt);
  // console.log(name);
  if (testsFail()) {
    console.log('reverting');
    revert();
  } else {
    console.log('commiting');
    commit();
  }
});
