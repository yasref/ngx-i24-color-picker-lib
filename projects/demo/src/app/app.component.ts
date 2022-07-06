import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  o1 = {
    boxBg: '#303030',
    showBox: true,
  };
  o2 = {
    boxBg: '#303030',
    value: '#e91e63',
    position: 'left',
    showBox: true,
  };
  o3 = {
    ds: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5'],
    boxBg: '#303030',
    value: '#4caf50',
    position: 'right',
    boxWidth: '120px',
    previewWidth: '12px',
    previewHeight: '12px',
    showBox: true,
  };
  o4 = {
    ds: ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5'],
    boxBg: '#c9c9c9',
    value: '#f44336',
    position: 'right',
    boxWidth: '120px',
    previewWidth: '12px',
    previewHeight: '12px',
    showBox: true,
  };
}
