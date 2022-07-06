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
  // left | right
  @Input() position = 'right';
  @Input() value = '#2196f3';
  @Input() previewWidth = '20px';
  @Input() previewHeight = '20px';
  @Input() previewBorderRadius = '3px';

  @Input() boxGap = '10px';
  @Input() boxWidth = '164px';
  @Input() boxBg = '#fafafa';
  @Input() boxPadding = '10px';
  @Input() boxBorderRadius = '4px';
  @Input() arrowWidth = '6px';

  @Input() itemWidth = '12px';
  @Input() itemHeight = '12px';
  @Input() itemBorderRadius = '3px';
  @Input() showBox = false;
  @Output() selectedChanged = new EventEmitter<any>();

  ngOnInit(): void {}
  select(c: any) {
    this.value = c;
    this.showBox = false;
    this.selectedChanged.emit(this.value);
  }
}
