"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const calculator_1 = require("./pageObjects/calculator");
const angularHomePage_1 = require("./pageObjects/angularHomePage");
describe('Chain locat ors demo', () => {
    it('Open Angular js website', () => __awaiter(this, void 0, void 0, function* () {
        let calc = new calculator_1.calculator();
        yield protractor_1.browser.get('http://juliemr.github.io/protractor-demo/');
        yield calc.firstEditBox.sendKeys("3");
        yield calc.secondEditBox.sendKeys("2");
        yield calc.go.click();
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
    it('Angular hompe page', () => __awaiter(this, void 0, void 0, function* () {
        let ah = new angularHomePage_1.angularHomePage;
        yield protractor_1.browser.get('https://angularjs.org/');
        yield ah.angularLink.click();
        yield protractor_1.browser.sleep(3000);
        yield ah.search.sendKeys('hello');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsMkNBQStFO0FBRS9FLHlEQUFzRDtBQUN0RCxtRUFBZ0U7QUFFaEUsUUFBUSxDQUFDLHNCQUFzQixFQUFFLEdBQUcsRUFBRTtJQUdsQyxFQUFFLENBQUMseUJBQXlCLEVBQUUsR0FBUyxFQUFFO1FBRXJDLElBQUksSUFBSSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO1FBRTVCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsMkNBQTJDLENBQUMsQ0FBQztRQUMvRCxNQUFNLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDdkMsTUFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBRXRCLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSTtZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO0lBRU4sQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxHQUFTLEVBQUU7UUFFaEMsSUFBSSxFQUFFLEdBQUcsSUFBSSxpQ0FBZSxDQUFBO1FBRTVCLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUM1QyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDN0IsTUFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMxQixNQUFNLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFUCxDQUFDLENBQUMsQ0FBQSJ9