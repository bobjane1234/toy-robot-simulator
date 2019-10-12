import { Injectable } from '@angular/core';

export enum COMMAND_DICT {
	NOT_VALID,
	LEFT,
	RIGHT,
	PLACE,
	MOVE,
	REPORT
}

export enum DIRECTION {
	NORTH = 0,
	EAST = 1,
	SOUTH = 2,
	WEST = 3,
	COUNT = 4,
	NONE = -1
}

export class Command {
	cmd: COMMAND_DICT;
	args: string[];
}


@Injectable()
export class GLOBALS {
	public static APP_NAME = 'Toy Robot Simulator'
	public static SYS_MSG = {};
	public static COMMAND_TIPS = {}
	public static PLACEMENT_CONSTRAINT = -100;
	public static VALIDATION_CONSTRAINT = -101;
	public static UNKNOWN_COMMAND = -102
	public static SUCCESS = 100;
	public static RIGHT = 1;
	public static LEFT = -1;

	public static get MAXROWS(): number { return 5; }
	public static get MAXCOLS(): number { return 5; }

	constructor() {
	}

}
GLOBALS.COMMAND_TIPS[COMMAND_DICT.PLACE] = "ex: 'PLACE 0 0 N' or 'PLACE 1 2 EAST'";
GLOBALS.COMMAND_TIPS[COMMAND_DICT.LEFT] = "Rotates the direction of the Robot to LEFT";
GLOBALS.COMMAND_TIPS[COMMAND_DICT.RIGHT] = "Rotates the direction of the Robot to RIGHT";
GLOBALS.COMMAND_TIPS[COMMAND_DICT.MOVE] = "Moves the Robot to one position forward";
GLOBALS.COMMAND_TIPS[COMMAND_DICT.REPORT] = "Reports the current coordinates of the Robot";


GLOBALS.SYS_MSG[COMMAND_DICT.LEFT] = "TURNING LEFT";
GLOBALS.SYS_MSG[COMMAND_DICT.RIGHT] = "TURNING RIGHT";
GLOBALS.SYS_MSG[COMMAND_DICT.PLACE] = "PLACING ";
GLOBALS.SYS_MSG[COMMAND_DICT.MOVE] = "MOVING";
GLOBALS.SYS_MSG[COMMAND_DICT.NOT_VALID] = "Incorrect command! use the commands available";
GLOBALS.SYS_MSG[GLOBALS.PLACEMENT_CONSTRAINT] = "Place the ROBOT first";
GLOBALS.SYS_MSG[GLOBALS.VALIDATION_CONSTRAINT] = "Look at Right For Commands. Try 'PLACE 0 0 S'";
GLOBALS.SYS_MSG[GLOBALS.UNKNOWN_COMMAND] = "Coordinates out of range. Try moving in other direction.";
