import { NgModule, Component } from '@angular/core';
import { TableTopComponent } from './table-top/table-top.component';
import { MoveRobotComponent } from './move-robot/move-robot.component';
import { ManualComponent } from './manual/manual.component';
import {Command,GLOBALS} from './shared/globals';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

@NgModule({
  declarations: [TableTopComponent, ManualComponent, MoveRobotComponent]
})

export class AppComponent {
  title = GLOBALS.APP_NAME
    uilog:string = '';

    command: Command;

    onCommandReceived(event: any) {
        if(event.msg){
            this.uilog = event.msg
        }
        if(event.value){
            this.command = event.value
        }
    }
}