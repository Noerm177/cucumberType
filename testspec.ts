import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { async } from "q";
import { calculator } from './pageObjects/calculator';
import { angularHomePage } from './pageObjects/angularHomePage';

describe('Chain locat ors demo', () => {


    it('Open Angular js website', async () => {

        let calc = new calculator();

        await browser.get('http://juliemr.github.io/protractor-demo/');
        await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("2");
        await calc.go.click();

        calc.getResult.getText().then(function (text) {
            console.log(text);
        })

    });

    it('Angular hompe page', async () => 
    {
        let ah = new angularHomePage

        await browser.get('https://angularjs.org/');
        await ah.angularLink.click();
        await browser.sleep(3000);
        await ah.search.sendKeys('hello');
    });

})
