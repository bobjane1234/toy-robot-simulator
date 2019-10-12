## Install and Run the app
- git clone https://github.com/bharatramesh2601/toy-robot-simulator.git
- npm install
- ng serve (http://localhost:4200/)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Commands to use
- LEFT => Rotates the direction of the Robot to LEFT
- RIGHT => Rotates the direction of the Robot to RIGHT
- PLACE => ex: 'PLACE 0 0 N' or 'PLACE 1 2 EAST'
- MOVE => Moves the Robot to one position forward
- REPORT => Reports the current coordinates of the Robot

## Output for the above simulator

a)
- PLACE 0,0,NORTH (https://github.com/bharatramesh2601/toy-robot-simulator/blob/master/North.png)
- MOVE
- REPORT
- Output: 0,1,NORTH (https://github.com/bharatramesh2601/toy-robot-simulator/blob/master/North-output.png)


b)
- PLACE 1,2,EAST (https://github.com/bharatramesh2601/toy-robot-simulator/blob/master/EAST.png)
- MOVE
- MOVE
- LEFT
- MOVE
- REPORT
- Output: 3,3,NORTH (https://github.com/bharatramesh2601/toy-robot-simulator/blob/master/EAST-output.png)
