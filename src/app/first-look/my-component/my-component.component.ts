import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class MyComponent implements OnInit {

  /**
   * The first name
   */
  @Input() first: string;

  /**
   * The middle name
   */
  @Input() middle: string;

  /**
   * The last name
   */
  @Input() last: string;

  constructor() { }

  ngOnInit() { }

  getText() {
    return this.format(this.first, this.middle, this.last);
  }

  private format(first: string, middle: string, last: string): string {
    return (
      (first || '') +
      (middle ? ` ${middle}` : '') +
      (last ? ` ${last}` : '')
    );
  }
}
