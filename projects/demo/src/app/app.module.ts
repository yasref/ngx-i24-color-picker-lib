import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxI24ColorPickerModule } from 'projects/ngx-i24-color-picker/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxI24ColorPickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
