import { Injectable } from '@angular/core';
import {COMMAND_DICT, Command}  from '../shared/globals'; 
import {IParser}  from '../shared/interface/iparser'; 


@Injectable()
export class MoveRobotService implements IParser {

	constructor() {
    }
	
	public parse(inputCommand: string): Command {
		let command: Command = new Command();
		let cmd:string = inputCommand.trim().split(' ')[0] 
		command.cmd = COMMAND_DICT[cmd] || COMMAND_DICT.NOT_VALID
		return command;
	}

}