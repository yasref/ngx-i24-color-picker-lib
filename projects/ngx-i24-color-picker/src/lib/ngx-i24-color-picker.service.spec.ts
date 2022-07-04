import { TestBed } from '@angular/core/testing';

import { NgxI24ColorPickerService } from './ngx-i24-color-picker.service';

describe('NgxI24ColorPickerService', () => {
  let service: NgxI24ColorPickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxI24ColorPickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
