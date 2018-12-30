# TCR Node Skeleton

A NodeJS skeleton to work with TDD with TCR (test commit || revert) constraint.

It uses Mocha + Chai + Sinon.

# About TCR

TCR (test, commit || revert), is a new way of developing, with similar basics to TDD. But with added constraints.

TCR forces you to make baby steps, through one constraint: every time tests fail, you must revert your code.

Learn more about this here:

https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864

# About TCR-CLI

tcr-cli is the command line interface I developed that has all the test && (commit || revert) logic.

# This repo

This repo is an attempt to make this TCR work in a real environment, using GIT.

The problem of TCR is that you are supposed to revert all the changes if your test fails.

What happens with your test, then? As you have probably noted, they will disappear :(
So you need to do some kind of tweaking to make this work in real life.

This is my proposed framework to make it a reality.

