import { Component, OnInit, NgModule, EventEmitter, Input, Output } from '@angular/core';
import { MoveRobotService } from './move-robot.service'
import { AutoGrowDirective } from '../directive/auto-grow.directive'
import { GLOBALS, COMMAND_DICT,Command } from '../shared/globals';

@Component({
  selector: 'app-move-robot',
  templateUrl: './move-robot.component.html',
  styleUrls: ['./move-robot.component.scss'],
  providers: [MoveRobotService, GLOBALS],
})

@NgModule({
  declarations: [AutoGrowDirective]
})

export class MoveRobotComponent implements OnInit {

  @Output() commandReceived = new EventEmitter();

  title: string = 'Command Panel'

  constructor(public moveRobotService: MoveRobotService) {
  }

  ngOnInit() {
  }

  onCommand(cmd: string) {
    if (cmd) {
      let command: Command;
      command = this.moveRobotService.parse(cmd);
      if (command.cmd == COMMAND_DICT.NOT_VALID) {
        this.commandReceived.emit({ msg: GLOBALS.SYS_MSG[COMMAND_DICT.NOT_VALID] })
      } else {
        if (command.cmd == COMMAND_DICT.PLACE) {
          let [, ...args] = cmd.trim().split(" ");
          command.args = args;
        }
        this.commandReceived.emit({ value: command, msg: GLOBALS.SYS_MSG[command.cmd] })

      }
    }
  }
}