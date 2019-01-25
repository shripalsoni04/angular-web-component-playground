import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextfieldComponent } from './textfield.component';

@NgModule({
  declarations: [ TextfieldComponent ],
  imports: [ CommonModule ],
  exports: [ TextfieldComponent ],
  entryComponents: [ TextfieldComponent ],
  providers: []
})
export class TextfieldModule {}
