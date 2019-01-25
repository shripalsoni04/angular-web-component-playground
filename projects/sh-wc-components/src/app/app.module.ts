import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { HelloWorldModule, HelloWorldComponent, TextfieldModule, TextfieldComponent } from 'sh-components';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HelloWorldModule,
    TextfieldModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const HelloComponentCustomElement = createCustomElement(HelloWorldComponent, { injector: this.injector });
    const TextfieldCustomElement = createCustomElement(TextfieldComponent, { injector: this.injector });

    customElements.define('sh-hello-world', HelloComponentCustomElement);
    customElements.define('sh-textfield', TextfieldCustomElement);
  }
}
