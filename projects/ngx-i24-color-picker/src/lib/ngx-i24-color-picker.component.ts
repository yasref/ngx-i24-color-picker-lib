import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ngx-i24-color-picker',
  templateUrl: './ngx-i24-color-picker.component.html',
  styleUrls: ['./ngx-i24-color-picker.component.scss'],
})
export class NgxI24ColorPickerComponent implements OnInit {
  constructor() {}
  @Input() ds = [
    '#f44336',
    '#e91e63',
    '#9c27b0',
    '#673ab7',
    '#3f51b5',
    '#2196f3',
    '#03a9f4',
    '#00bcd4',
    '#009688',
    '#4caf50',
    '#8bc34a',
    '#cddc39',
    '#ffeb3b',
    '#ffc107',
    '#ff9800',
    '#ff5722',
    '#795548',
    '#9e9e9e',
    '#607d8b',
    '#ffffff',
    '#1b1b1c',
  ];
  @Input() value = '#8bc34a';
  @Input() previewWidth = '20px';
  @Input() previewHeight = '20px';
  @Input() previewBorderRadios = '3px';

  @Input() gap = '12px';
  @Input() containerWidth = '160px';
  @Input() boxBg = '#fafafa';
  @Input() boxPadding = '6px';

  @Input() itemWidth = '12px';
  @Input() itemHeight = '12px';
  @Input() itemBorderRadios = '3px';
  @Output() valueChanged = new EventEmitter<any>();

  showBox = false;
  ngOnInit(): void {}
  select(c: any) {
    this.value = c;
    this.showBox = false;
    this.valueChanged.emit(this.value);
  }
}
