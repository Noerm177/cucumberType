import {Given, When, Then} from "cucumber";
import { async } from "q";
import { calculator } from '../pageObjects/calculator';
import { browser } from "protractor";
let calc = new calculator();

    Given('I will navigate to calc site', async ()=> {
        // Write code here that turns the phrase above into concrete actions

        await browser.get('http://juliemr.github.io/protractor-demo/');
        
      });


      When('I add two numbers {string} and {string}', async(string, string2) => {
        // Write code here that turns the phrase above into concrete actions

        
        await calc.firstEditBox.sendKeys(string);
        await calc.secondEditBox.sendKeys(string2);
      });


      Then('The output displayed should be {string}', async(string)=> {
        // Write code here that turns the phrase above into concrete actions
        await calc.go.click();

        await calc.getResult.getText().then(function (text) {
            console.log(text);
        })
      });