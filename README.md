# NgxI24ColorPickerLib

[![](https://img.shields.io/npm/v/ngx-i24-color-picker)](https://www.npmjs.com/package/ngx-i24-color-picker)
[![](https://img.shields.io/npm/l/ngx-i24-color-picker)](https://www.npmjs.com/package/ngx-i24-color-picker)
> A lightweight plugin to pick a color.

## Features

- highly customizable
- very easy to implement

## Demo

[![](https://raw.githubusercontent.com/yasref/ngx-i24-color-picker-lib/master/projects/demo/images/ngx-i24-color-picker.PNG)](https://stackblitz.com/edit/ngx-i24-color-picker-demo)

- [Link](https://stackblitz.com/edit/ngx-i24-color-picker-demo)

## Get started

#### Installation

```
$ npm i ngx-i24-color-picker
```

#### Example

##### TS

###### Module

```typescript
import { NgxI24ColorPickerModule } from "ngx-i24-color-picker";
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxI24ColorPickerModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

###### Component

```typescript
import { Component } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  o1 = {
    boxBg: "#303030",
    showBox: true,
  };
}
```

##### HTML

```html
<ngx-i24-color-picker
  [boxBg]="o1.boxBg"
  [showBox]="o1.showBox"
></ngx-i24-color-picker>
```

## Options

| Property            | Default                                 | Description                                     |
| ------------------- | --------------------------------------- | ----------------------------------------------- |
| ds                  | [ '#f44336', '#e91e63', '#9c27b0', ...] | The list of colors                              |
| position            | 'right'                                 | The position of selection box ('right', 'left') |
| value               | '#2196f3'                               | The initial value of the preview box            |
| previewWidth        | '20px'                                  | The width of the preview box                    |
| previewHeight       | '20px'                                  | The height of the preview box                   |
| previewBorderRadius | '3px'                                   | The border radios of the preview box            |
| boxGap              | '10px'                                  | The distance between the colors items           |
| boxWidth            | '164'                                   | The width of the colors box                     |
| boxBg               | '#fafafa'                               | The background color of the colors box          |
| boxPadding          | '10px'                                  | The padding of the colors box                   |
| boxBorderRadius     | '4px'                                   | The border radios of the colors box             |
| arrowWidth          | '6px'                                   | The width of the arrow                          |
| itemWidth           | '12px'                                  | The width of the color item                     |
| itemHeight          | '12px'                                  | The height of the color item                    |
| itemBorderRadius    | '3px'                                   | The border radios of the color item             |
| showBox             | false                                   | The initial value of the colors box             |

## Events

- `selectedChanged` - triggered on change the selection

## Other Projects
| Name | Link | Description|
| - | - | - |
| ngx-i24-circular-progress | [Link](https://www.npmjs.com/package/ngx-i24-circular-progress) | A lightweight plugin to render a simple, animated circular progress bar.      |
| ngx-i24-progress-bar      | [Link](https://www.npmjs.com/package/ngx-i24-progress-bar)      | A lightweight plugin to render a simple, animated progress bar.               |
| ngx-weekday-picker        | [Link](https://www.npmjs.com/package/ngx-weekday-picker)        | Lightweight plugin to a pick weekday.                                         |
| ngx-i24-color-picker      | [Link](https://www.npmjs.com/package/ngx-i24-color-picker)      | A lightweight plugin to pick a color.                                         |
| ngx-i24-checkbox          | [Link](https://www.npmjs.com/package/ngx-i24-checkbox)      | A lightweight plugin to display a modern checkbox.                                |

## Support

[![](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/yaseenref)

## Copyright
Copyright (c) 2022 Yaseen Alrefaee, contributors. Released under the MIT
 

<!--
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
