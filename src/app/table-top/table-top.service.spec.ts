import { TestBed, async, inject } from '@angular/core/testing';
import { TableTopService } from './table-top.service';

describe('Service: Board', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TableTopService]
    });
  });

  it('should ...', inject([TableTopService], (service: TableTopService) => {
    expect(service).toBeTruthy();
  }));
});