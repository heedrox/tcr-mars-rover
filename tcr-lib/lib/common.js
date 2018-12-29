const getCurrentTestFile = (options) => `${options.tcrDir}/test-current.tmp`;
const getPreviousTestFile = (options) => `${options.tcrDir}/test-prev.tmp`;
const getLastCommitMessageFile = (options) => `${options.tcrDir}/last-commit-msg.tmp`;

module.exports.getCurrentTestFile = getCurrentTestFile;
module.exports.getPreviousTestFile = getPreviousTestFile;
module.exports.getLastCommitMessageFile = getLastCommitMessageFile;
