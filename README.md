Projects
===========
1. sh-components
  - A library project which contains common UI library components

2. sh-usage-app
  - A simple angular app which uses sh-components to see how they work

3. sh-wc-components
  - Project used to generated web components from angular components
  - It contains just one module file  `app.module.ts` in which it imports all the common UI component modules and defined customElement foreach UI common component

4. sh-wc-usage-app
  - A simple angular app which uses web components generated from `sh-wc-components` project (indirectly web components of angular UI common components created in `sh-components`)


Dev workflow to create/modify UI components
==========================================
- Run `ng serve sh-usage-app`. This will start a simple app which uses angular library components.
- Do any changes in `sh-components` project
- Execute `ng build sh-components` to build component library
- As `sh-components` is already installed and linked in `sh-usage-app`, it will auto reload the changes once build is completed.

(Ref: https://medium.com/@SirMaxxx/angular-6-creating-a-shareable-control-library-6a27f0ebe5c2)


How to generate Web Components of `sh-components`
===================================
- Execute `npm run prepare-standalone-wc-package`. and a complete bundle for all web components will be generated at `.dist/sh-wc-components/sh-web-components.js`


How to use generated web components in pure html page (w/o any framework)
================================================
- Copy this `.dist/sh-wc-components/sh-web-components.js` file to `no-framework-wc-usage/` folder
- Run `http-server no-framework-wc-usage/` and open `localhost:8080/index.html`. 
- Web components should work in the html page as expected.


How to use generated web components in angular application
================================================
- Copy this `.dist/sh-wc-components/sh-web-components.js` file to `projects/sh-wc-usage-app/src/assets` folder
- Run `ng serve sh-wc-usage-app` and open `localhost:4200`. 
- Web components should work in the angular app as expected.

