$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Login.feature");
formatter.feature({
  "name": "Verifying Adactin functionalities",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verifying Adactin Booking details with credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Adactin Page",
  "keyword": "Given "
});
formatter.step({
  "name": "user should enter \"\u003cusername\u003e\",\"\u003cpassword\u003e\",\"\u003clocation\u003e\",\"\u003chotels\u003e\",\"\u003croomtype\u003e\",\"\u003cnoofRooms\u003e\",\"\u003cchkInDt\u003e\",\"\u003cchkOutDt\u003e\",\"\u003cadltPerRm\u003e\",\"\u003cchldPerRm\u003e\",\"\u003cfstNm\u003e\",\"\u003clstNm\u003e\",\"\u003cblngadd\u003e\",\"\u003cccno\u003e\",\"\u003ccctype\u003e\",\"\u003cexpdtmon\u003e\",\"\u003cexpdtyr\u003e\"and\"\u003ccvv\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "print the booking id",
  "keyword": "And "
});
formatter.step({
  "name": "user should click the logout button",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "location",
        "hotels",
        "roomtype",
        "noofRooms",
        "chkInDt",
        "chkOutDt",
        "adltPerRm",
        "chldPerRm",
        "fstNm",
        "lstNm",
        "blngadd",
        "ccno",
        "cctype",
        "expdtmon",
        "expdtyr",
        "cvv"
      ]
    },
    {
      "cells": [
        "VigneshwarG",
        "33VA7P",
        "London",
        "Hotel Sunshine",
        "Deluxe",
        "1 - One",
        "23/08/2020",
        "24/08/2020",
        "1 - One",
        "0 - None",
        "Vigneshwara",
        "Ganesan",
        "36 chennai",
        "1234567891234567",
        "VISA",
        "August",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "VigneshwarG",
        "33VA7P",
        "London",
        "Hotel Sunshine",
        "Deluxe",
        "1 - One",
        "23/08/2020",
        "25/08/2020",
        "1 - One",
        "0 - None",
        "Vigneshwara",
        "Ganesan",
        "36 chennai",
        "1234567891234567",
        "VISA",
        "August",
        "2022",
        "123"
      ]
    },
    {
      "cells": [
        "VigneshwarG",
        "33VA7P",
        "London",
        "Hotel Sunshine",
        "Deluxe",
        "1 - One",
        "23/08/2020",
        "24/08/2020",
        "1 - One",
        "0 - None",
        "Vigneshwara",
        "Ganesan",
        "36 chennai",
        "1234567891234567",
        "VISA",
        "August",
        "2022",
        "123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verifying Adactin Booking details with credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Adactin Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Booking.user_is_on_Adactin_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"VigneshwarG\",\"33VA7P\",\"London\",\"Hotel Sunshine\",\"Deluxe\",\"1 - One\",\"23/08/2020\",\"24/08/2020\",\"1 - One\",\"0 - None\",\"Vigneshwara\",\"Ganesan\",\"36 chennai\",\"1234567891234567\",\"VISA\",\"August\",\"2022\"and\"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Booking.user_should_enter_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking id",
  "keyword": "And "
});
formatter.match({
  "location": "Booking.print_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "Booking.user_should_click_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin Booking details with credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Adactin Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Booking.user_is_on_Adactin_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"VigneshwarG\",\"33VA7P\",\"London\",\"Hotel Sunshine\",\"Deluxe\",\"1 - One\",\"23/08/2020\",\"25/08/2020\",\"1 - One\",\"0 - None\",\"Vigneshwara\",\"Ganesan\",\"36 chennai\",\"1234567891234567\",\"VISA\",\"August\",\"2022\"and\"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Booking.user_should_enter_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking id",
  "keyword": "And "
});
formatter.match({
  "location": "Booking.print_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "Booking.user_should_click_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifying Adactin Booking details with credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user is on Adactin Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Booking.user_is_on_Adactin_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should enter \"VigneshwarG\",\"33VA7P\",\"London\",\"Hotel Sunshine\",\"Deluxe\",\"1 - One\",\"23/08/2020\",\"24/08/2020\",\"1 - One\",\"0 - None\",\"Vigneshwara\",\"Ganesan\",\"36 chennai\",\"1234567891234567\",\"VISA\",\"August\",\"2022\"and\"123\"",
  "keyword": "When "
});
formatter.match({
  "location": "Booking.user_should_enter_and(String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "print the booking id",
  "keyword": "And "
});
formatter.match({
  "location": "Booking.print_the_booking_id()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should click the logout button",
  "keyword": "Then "
});
formatter.match({
  "location": "Booking.user_should_click_the_logout_button()"
});
formatter.result({
  "status": "passed"
});
});