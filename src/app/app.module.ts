import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TextfieldModule } from './textfield/textfield.module';
import { FirstLookModule } from './first-look/first-look.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FirstLookModule,
    TextfieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
