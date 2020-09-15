package com.stepdefinition;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Pom5 extends Base {
		public Pom5(){
			PageFactory.initElements(driver, this);
		}
		

	    @FindBy(id="order_no") 
	    private WebElement onu;
		
	     public WebElement getOnu() {
			return onu;
		}


		@FindBy(id="logout") 
		 private WebElement lgout;

         public WebElement getLgout() {
		 return lgout;
	
    }
}
