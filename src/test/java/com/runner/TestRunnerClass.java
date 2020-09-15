package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features="src\\test\\resources\\",glue= {"com.stepdefinition"},monochrome=true,
plugin= {"pretty","json:\\src\\test\\resources\\Reporting\\cucumbernew.json","junit:src\\test\\resources\\Reporting\\cucumbernew.xml",
 "html:src\\test\\resources\\Reporting"})
public class TestRunnerClass {
	
}
