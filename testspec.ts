import {browser, element, by, By, $, $$, ExpectedConditions} from 'protractor';
import { async } from "q";

describe('Chain locat ors demo', () => {


   /* it('Open Angular js website', async () => {



        await browser.get('http://juliemr.github.io/protractor-demo/');
        //repeater ,  chain locators, And css for identical tags
        //await calc.firstEditBox.sendKeys("3");
        await calc.secondEditBox.sendKeys("5");
        await calc.go.click();
        calc.getResult.getText().then(function (text) {
             console.log(text);
        })


        //	element(by.model("operator")).element(by.css("option:nth-child(4)")).click();


    })*/

    it('Angular hompe page', async () => 
    {

     await   browser.get('https://angularjs.org/');
     await   element(by.linkText("angular.io")).click();
     await   element(by.css("input[type='search']")).sendKeys('hello');
    });

})