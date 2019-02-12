import {Given, When, Then} from "cucumber";
import { async } from "q";
import { calculator } from '../pageObjects/calculator';
import { browser } from "protractor";
import { angularHomePage } from '../pageObjects/angularHomePage';

let calc = new calculator();
let ah = new angularHomePage

    Given('I will navigate to {string} site', async (string)=> {     
      await browser.get('http://juliemr.github.io/protractor-demo/');
    });  

    Given('I will navigate to {string} page', async (string)=> {
        
        if(string=="calc")
        {
          await browser.get('http://juliemr.github.io/protractor-demo/');
        }
        else if (string=="AngularJs")
        {
          await browser.get('https://angularjs.org/');
        }
      });

      When('I clicked on header link', async ()=> {       
        let ah = new angularHomePage
        await ah.angularLink.click();
      });

      When('You will navigate to angular page', async ()=> {     
        console.log("navigate to new page");
      });

      Then('You will enter {string} in search box', async (string)=> {        
        await browser.sleep(3000);
        await ah.search.sendKeys(string);
      });

      When('I add two numbers {string} and {string}', async(string, string2) => {
        await calc.firstEditBox.sendKeys(string);
        await calc.secondEditBox.sendKeys(string2);
      });

      Then('The output displayed should be {string}', async(string)=> {      
        await calc.go.click();
        await calc.getResult.getText().then(function (text) {
          console.log(text);
        })
      });

      