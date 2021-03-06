"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Because this file references protractor, you'll need to have it as a project
// dependency to use 'protractor/globals'. Here is the full list of imports:
//
// import {browser, element, by, By, $, $$, ExpectedConditions}
//   from 'protractor/globals';
//
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
const protractor_1 = require("protractor");
describe('protractor with typescript typings', () => {
    beforeEach(() => {
        protractor_1.browser.get('http://www.angularjs.org');
    });
    it('should greet the named user', () => {
        protractor_1.element(protractor_1.by.model('yourName')).sendKeys('Julie');
        let greeting = protractor_1.element(protractor_1.by.binding('yourName'));
        expect(greeting.getText()).toEqual('Hello Julie!');
    });
    it('should list todos', function () {
        let todoList = protractor_1.element.all(protractor_1.by.repeater('todo in todoList.todos'));
        expect(todoList.count()).toEqual(2);
        expect(todoList.get(1).getText()).toEqual('build an angular app');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2VqZW1wbG9zL1Byb3RyYWN0b3JUdXRvcmlhbC0yL1Byb3RyYWN0b3JUdXRvcmlhbC9wcm90cmFjdG9yL2V4YW1wbGVUeXBlc2NyaXB0L3NwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwrRUFBK0U7QUFDL0UsNEVBQTRFO0FBQzVFLEVBQUU7QUFDRiwrREFBK0Q7QUFDL0QsK0JBQStCO0FBQy9CLEVBQUU7QUFDRiwwRUFBMEU7QUFDMUUsMkNBQStFO0FBRS9FLFFBQVEsQ0FBQyxvQ0FBb0MsRUFBRSxHQUFHLEVBQUU7SUFDbEQsVUFBVSxDQUFDLEdBQUcsRUFBRTtRQUNkLG9CQUFPLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO1FBQ3JDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3JELENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLG1CQUFtQixFQUFFO1FBQ3RCLElBQUksUUFBUSxHQUFHLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE1BQU0sQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNwRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=