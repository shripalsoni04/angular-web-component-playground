import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponent } from './my-component/my-component.component';

@NgModule({
  declarations: [MyComponent],
  imports: [
    CommonModule
  ],
  exports: [
    MyComponent
  ]
})
export class FirstLookModule { }
