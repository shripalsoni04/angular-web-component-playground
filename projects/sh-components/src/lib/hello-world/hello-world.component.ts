import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'sh-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class HelloWorldComponent implements OnInit {

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
