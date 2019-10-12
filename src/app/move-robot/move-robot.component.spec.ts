import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MoveRobotComponent } from './move-robot.component';

describe('MoveRobotComponent', () => {
  let component: MoveRobotComponent;
  let fixture: ComponentFixture<MoveRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoveRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoveRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
