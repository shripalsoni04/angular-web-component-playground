import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HelloWorldModule, TextfieldModule } from 'sh-components';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloWorldModule,
    TextfieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
