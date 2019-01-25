Dev workflow
================
- Run `ng serve sh-usage-app`. This will start a simple app which uses angular library components.
- Do any changes in `sh-components` project
- Execute `ng build sh-components` to build component library
- As `sh-components` is already installed and linked in `sh-usage-app`, it will auto reload the changes once build is completed.

How to generate and test Web Components of `sh-components`
===============================
- Execute `npm run prepare-standalone-wc-package`. and a complete bundle for all web components will be generated at `.dist/sh-wc-components/angular-element-playground.js`
- Copy this `angular-element-playground.js` file to `usage/` folder
- Run `http-server usage/` and open `localhost:8080/index.html`. 
- Web components should work in the html page as expected.



# AngularElementPlayground

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.2.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


