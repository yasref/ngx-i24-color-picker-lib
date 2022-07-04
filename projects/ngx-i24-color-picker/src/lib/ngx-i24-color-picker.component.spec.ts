import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxI24ColorPickerComponent } from './ngx-i24-color-picker.component';

describe('NgxI24ColorPickerComponent', () => {
  let component: NgxI24ColorPickerComponent;
  let fixture: ComponentFixture<NgxI24ColorPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxI24ColorPickerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxI24ColorPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
