# TCR Mars Rover

My first implementation of a kata through TCR.

Based on skeleton: https://github.com/jmarti-theinit/test-commit-revert-node

It uses Mocha + Chai + Sinon.

# About the Mars Rover Kata

http://kata-log.rocks/mars-rover-kata

Requirements
- You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
- The rover receives a character array of commands.
- Implement commands that move the rover forward/backward (f,b).
- Implement commands that turn the rover left/right (l,r).
- Implement wrapping from one edge of the grid to another. (planets are spheres after all)
- Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

# About TCR

TCR (test, commit || revert), is a new way of developing, with similar basics to TDD. But with added constraints.

TCR forces you to make baby steps, through one constraint: every time tests fail, you must revert your code.

Learn more about this here:

https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864

# About TCR-CLI

tcr-cli is the command line interface I developed that has all the test && (commit || revert) logic.

# This repo

This repo is an attempt to test if TCR can work in a real environment (at least in a Kata).

And to test also tcr-cli.

# Learnings and Reflections

- Generally forces you to create two tests (the dummy and the one that really validates)



