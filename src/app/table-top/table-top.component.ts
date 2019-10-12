import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TableTopService } from './table-top.service'
import { GLOBALS, Command } from '../shared/globals';
import { Robot } from '../shared/robot';

@Component({
  selector: 'app-table-top',
  templateUrl: './table-top.component.html',
  styleUrls: ['./table-top.component.scss'],
  providers: [TableTopService, GLOBALS]
})
export class TableTopComponent implements OnInit {

  @Input('command') commandName: Command;
  @Output() commandExecuted = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  rows: number[] = Array.from({ length: GLOBALS.MAXROWS }).map((x, i) => ((GLOBALS.MAXROWS - 1) - i));
	cols: number[] = Array.from({ length: GLOBALS.MAXCOLS }).map((x, i) => i);
	static rx: number = -1;
	static ry: number = -1;

	ngOnChanges(changes: any) {
		if (this.commandName) {
			let r: Robot = Robot.getInstance()
			let m: string = r.mapCommand(this.commandName)
			TableTopComponent.rx = r.x
			TableTopComponent.ry = r.y
			this.commandExecuted.emit({ msg: m })
		}

	}

	classMap(r: number, c: number) {
		if (r == TableTopComponent.ry && c == TableTopComponent.rx)
			return "has-robot";
		return "no-robot";
	}
}