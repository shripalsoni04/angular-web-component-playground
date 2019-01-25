import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MyComponent } from './my-component/my-component.component';
import { TextfieldComponent } from './textfield/textfield.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    MyComponent,
    TextfieldComponent
  ],
  providers: [],
  entryComponents: [
    MyComponent,
    TextfieldComponent
  ]
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const MyComponentCustomElement = createCustomElement(MyComponent, { injector: this.injector });
    const TextfieldCustomElement = createCustomElement(TextfieldComponent, { injector: this.injector });

    customElements.define('my-component', MyComponentCustomElement);
    customElements.define('sh-textfield', TextfieldCustomElement);
  }
}
