import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextfieldComponent } from './textfield/textfield.component';

@NgModule({
  declarations: [TextfieldComponent],
  imports: [
    CommonModule
  ],
  exports: [
    TextfieldComponent
  ]
})
export class TextfieldModule { }
