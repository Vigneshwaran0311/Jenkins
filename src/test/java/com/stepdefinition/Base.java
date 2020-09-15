package com.stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

public class Base {
	
static WebDriver driver;
	
	public static void launchApp(String s) {
		System.setProperty("webdriver.chrome.driver",System.getProperty("user.dir")+"//div//chromedriver85.exe");
	    driver=new ChromeDriver();
		driver.get(s);
		}

	public static void fill(WebElement w,String s) {
		w.sendKeys(s);
	}
	
	public static void klick(WebElement w) {
		 w.click();  
	}
	
	public static void drdn(WebElement w,String str) {
		Select s=new Select(w);
		s.selectByVisibleText(str);

	}
	
	public static void attri(WebElement w) { 
		String text = w.getAttribute("value");
		System.out.println("THE ORDER ID IS :"+text);
		 
			
		}

			
}



