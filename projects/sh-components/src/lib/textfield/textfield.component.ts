import { Component, OnChanges, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { InputConfig } from './interfdaces';

@Component({
  selector: 'sh-textfield',
  templateUrl: './textfield.component.html',
  styleUrls: ['./textfield.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class TextfieldComponent implements OnChanges {

  @Input()
  type = 'text';

  @Input()
  label: string;

  @Input()
  placeholder: string;

  @Input()
  config: InputConfig;

  @Input()
  testArray: any[];

  @Input()
  isRequired = false;

  @Input()
  maxlength: number;

  @Input()
  value = '';

  // tslint:disable-next-line:no-output-on-prefix
  @Output()
  onChange: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnChanges() {
    console.log('type', this.type);
    console.log('label', this.label);
    console.log('placeholder', this.placeholder);
    console.log('config', this.config);
    console.log('testArray', this.testArray);
    console.log('isRequired', this.isRequired);
    console.log('maxlength', this.maxlength);
    console.log('value', this.value);
  }

  handleInputChange(value) {
    this.onChange.emit(value);
  }

}
