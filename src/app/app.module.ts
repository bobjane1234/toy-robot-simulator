import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableTopComponent } from './table-top/table-top.component';
import { MoveRobotComponent } from './move-robot/move-robot.component';
import { ManualComponent } from './manual/manual.component';
import { AutoGrowDirective } from './directive/auto-grow.directive';

@NgModule({
  declarations: [
    AppComponent,
    TableTopComponent,
    MoveRobotComponent,
    ManualComponent,
    AutoGrowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }