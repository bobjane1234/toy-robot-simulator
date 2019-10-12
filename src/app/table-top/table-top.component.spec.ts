import { async, inject, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TableTopComponent } from './table-top.component';

describe('TableTopComponent', () => {
  let component: TableTopComponent;
  let fixture: ComponentFixture<TableTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should exist', () => {
    expect(component).toBeDefined();
  });
});