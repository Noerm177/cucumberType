"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
const protractor_1 = require("protractor");
class AngularHomepage {
    constructor() {
        this.nameInput = protractor_1.element(protractor_1.by.model('yourName'));
        this.greeting = protractor_1.element(protractor_1.by.binding('yourName'));
    }
    get() {
        protractor_1.browser.get('http://www.angularjs.org');
    }
    setName(name) {
        this.nameInput.sendKeys(name);
    }
    // getGreeting returns a webdriver.promise.Promise.<string>. For simplicity
    // setting the return value to any
    getGreeting() {
        return this.greeting.getText();
    }
}
exports.AngularHomepage = AngularHomepage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhclBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9lamVtcGxvcy9Qcm90cmFjdG9yVHV0b3JpYWwtMi9Qcm90cmFjdG9yVHV0b3JpYWwvcHJvdHJhY3Rvci9leGFtcGxlVHlwZXNjcmlwdC9hbmd1bGFyUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtFQUErRTtBQUMvRSw0RUFBNEU7QUFDNUUsRUFBRTtBQUNGLCtEQUErRDtBQUMvRCwrQkFBK0I7QUFDL0IsRUFBRTtBQUNGLDJDQUFnRDtBQUVoRCxNQUFhLGVBQWU7SUFBNUI7UUFDRSxjQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsYUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBZTdDLENBQUM7SUFiQyxHQUFHO1FBQ0Qsb0JBQU8sQ0FBQyxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsT0FBTyxDQUFDLElBQVk7UUFDbEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVELDJFQUEyRTtJQUMzRSxrQ0FBa0M7SUFDbEMsV0FBVztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0NBQ0Y7QUFqQkQsMENBaUJDIn0=