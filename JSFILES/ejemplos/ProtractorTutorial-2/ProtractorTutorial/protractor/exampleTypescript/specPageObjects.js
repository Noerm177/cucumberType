"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// local import of the exported AngularPage class
const angularPage_1 = require("./angularPage");
// The jasmine typings are brought in via DefinitelyTyped ambient typings.
describe('angularjs homepage', () => {
    it('should greet the named user', () => {
        let angularHomepage = new angularPage_1.AngularHomepage();
        angularHomepage.get();
        angularHomepage.setName('Julie');
        expect(angularHomepage.getGreeting()).toEqual('Hello Julie!');
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlY1BhZ2VPYmplY3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vZWplbXBsb3MvUHJvdHJhY3RvclR1dG9yaWFsLTIvUHJvdHJhY3RvclR1dG9yaWFsL3Byb3RyYWN0b3IvZXhhbXBsZVR5cGVzY3JpcHQvc3BlY1BhZ2VPYmplY3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQWlEO0FBQ2pELCtDQUE4QztBQUU5QywwRUFBMEU7QUFDMUUsUUFBUSxDQUFDLG9CQUFvQixFQUFFLEdBQUcsRUFBRTtJQUNsQyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBRyxFQUFFO1FBQ3JDLElBQUksZUFBZSxHQUFHLElBQUksNkJBQWUsRUFBRSxDQUFDO1FBQzVDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUN0QixlQUFlLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2pDLE1BQU0sQ0FBQyxlQUFlLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDaEUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9