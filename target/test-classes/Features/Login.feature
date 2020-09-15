Feature: Verifying Adactin functionalities


Scenario Outline: Verifying Adactin Booking details with credentials

Given user is on Adactin Page
When user should enter "<username>","<password>","<location>","<hotels>","<roomtype>","<noofRooms>","<chkInDt>","<chkOutDt>","<adltPerRm>","<chldPerRm>","<fstNm>","<lstNm>","<blngadd>","<ccno>","<cctype>","<expdtmon>","<expdtyr>"and"<cvv>"
And print the booking id
Then user should click the logout button

Examples: 
   |username|password|location|hotels|roomtype|noofRooms|chkInDt|chkOutDt|adltPerRm|chldPerRm|fstNm|lstNm|blngadd|ccno|cctype|expdtmon|expdtyr|cvv|
   |VigneshwarG|33VA7P|London|Hotel Sunshine|Deluxe|1 - One|23/08/2020|24/08/2020|1 - One|0 - None|Vigneshwara|Ganesan|36 chennai|1234567891234567|VISA|August|2022|123|
	 |VigneshwarG|33VA7P|London|Hotel Sunshine|Deluxe|1 - One|23/08/2020|25/08/2020|1 - One|0 - None|Vigneshwara|Ganesan|36 chennai|1234567891234567|VISA|August|2022|123|
	 |VigneshwarG|33VA7P|London|Hotel Sunshine|Deluxe|1 - One|23/08/2020|24/08/2020|1 - One|0 - None|Vigneshwara|Ganesan|36 chennai|1234567891234567|VISA|August|2022|123|
