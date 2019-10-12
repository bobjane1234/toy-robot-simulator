import { Directive, ElementRef, Input } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';
import { AutoGrowDirective } from './auto-grow.directive';

describe('Directive: AutoGrow', () => {
  it('should create an instance', () => {
    let el: ElementRef;
    let directive = new AutoGrowDirective(el,null);
    expect(directive).toBeTruthy();
  });
});