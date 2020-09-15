package com.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Booking extends Base{
	
	@Given("user is on Adactin Page")
	public void user_is_on_Adactin_Page() {
	    launchApp("http://adactinhotelapp.com/"); 
	}

	@When("user should enter {string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string},{string}and{string}")
	public void user_should_enter_and(String unm, String psw,String lctn, String htl, String rmtype, String rmnos,
	String ckin, String ckout, String apr,String cpr,String fn, String ln, String add, String ccno , String cctyp, String exmn, String exyr, String cvv) throws InterruptedException {
		  Pom1 p1=new Pom1();
		  Thread.sleep(3000);
		  fill(p1.getUsrname(),unm);
		  Thread.sleep(3000);
		  fill(p1.getPsw(),psw);
		  Thread.sleep(3000);
		  klick(p1.getLgnbtn());
		 
           Pom2 p2=new Pom2();
		   drdn(p2.getLoc(),lctn );
		   drdn(p2.getHtl(), htl);
		   drdn(p2.getRmtp(),rmtype);
		   drdn(p2.getRmnos(),rmnos);
		   fill(p2.getChckin(),ckin);
		   fill(p2.getChckout(),ckout);
		   drdn(p2.getAdprrm(), apr);
		   drdn(p2.getChldrm(),cpr);
		   klick(p2.getSrch());
		   
		   Pom3 p3=new Pom3();
		   klick(p3.getRdbtn());
		   klick(p3.getCntbtn());
			
			Pom4 p4=new Pom4();
		    fill(p4.getFstnm(),fn);
			fill(p4.getLstnm(),ln);
		    fill(p4.getAdd(),add);
			fill(p4.getCcdno(),ccno);
			drdn(p4.getCcdtyp(),cctyp);
		    drdn(p4.getCcdexmon(), exmn);
			drdn(p4.getCcdexyr(), exyr);
			fill(p4.getCvvno(), cvv);
			klick(p4.getBknwbtn());
			 
	
	}

	@When("print the booking id")
	public void print_the_booking_id() throws InterruptedException {
		Pom5 p5=new Pom5();
		Thread.sleep(8000);
		
		attri(p5.getOnu());

	}

	
	
	
	
	
	
	@Then("user should click the logout button")
	public void user_should_click_the_logout_button() throws InterruptedException {
		
		Pom5 p5=new Pom5();
		Thread.sleep(3000);
		klick(p5.getLgout());
	}
}
