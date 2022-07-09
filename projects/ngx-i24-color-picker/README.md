# NgxI24ColorPickerLib

A lightweight plugin to pick a color.

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

| Name                      | Link                                                            | Description                                                                   |
| ------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| ngx-i24-circular-progress | [Link](https://www.npmjs.com/package/ngx-i24-circular-progress) | Lightweight plugin to render simple, animated and retina optimized pie charts |
| ngx-weekday-picker        | [Link](https://www.npmjs.com/package/ngx-weekday-picker)        | Lightweight plugin to a pick weekday.                                         |

## Donation

- [![](https://raw.githubusercontent.com/yasref/ngx-i24-color-picker-lib/master/projects/demo/images/coffee.png)](https://www.buymeacoffee.com/yaseenref)

## Copyright

Copyright (c) 2022 Yaseen Alrefaee, contributors. Released under the MIT
<!-- 
This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.0.

## Code scaffolding

Run `ng generate component component-name --project ngx-i24-color-picker` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngx-i24-color-picker`.
> Note: Don't forget to add `--project ngx-i24-color-picker` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngx-i24-color-picker` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngx-i24-color-picker`, go to the dist folder `cd dist/ngx-i24-color-picker` and run `npm publish`.

## Running unit tests

Run `ng test ngx-i24-color-picker` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
