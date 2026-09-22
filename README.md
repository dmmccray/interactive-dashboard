# Interactive Productivity Dashboard
"This project is a web-based dashboard built for WEB-115 to demonstrate interactive javaScript features."
## TO DO: Future Enhancements
- [ ] Add a metric conversion tool.
- [ ] Integrate a task list with array storage.
- [ ] Add JavaScript logic for a live clock.

## Imperial/Imperial/Metric Converter
"application's purpose is to convert the units of measures (inch, foot, yard, mile, centimeter, meter, and kilometer).

### Logic and Pseudocode
BEGIN

 //variables to use are to be set as follows
SET  inputvalue  = 0
SET outputvalue = 0
SET inputunit = ""
SET outputvalue = ""

DISPLAY
//Converting from imperial to metric
	INPUT "Enter Numerical Value" To inputvalue
	INPUT "Select Input Unit Conversion" To inputunit
	
	
	
	IF inputunit ==  "Inches" THEN 
		outputunit = "centimeters to inches"
		outputvalue = inputvalue * 2.54
	
	ELSE IF inputunit == "foot" THEN 
		outputunit="centimeters to feet"
		outputvalue = inputvalue *30.48
	
	ELSE IF inputunit == "yard" THEN 
		outputunit="meter"
		outputvalue= inputvalue *0.91
		
	ELSE IF inputunit == "mile" THEN
		outputunit="kilometer"
		outputvalue= inputvalue * 1.61
		
		
	//Display final output
	END IF
	DISPLAY inputvalue + " "+  inputunit  + "  is equal to " + outputvalue  + " " + outputunit 
	
DISPLAY
//Converting from metric to imperial 
		INPUT "Enter Numerical Value" To inputvalue
		INPUT "Select Input Unit Conversion" To inputunit
		
		IF inputunit=="centimeters to inches" THEN 
		outputunit = "Inches" 
		outputvalue = inputvalue * 0.39
		
		ELSE IF inputunit == "centimeters to feet" THEN 
		Outputunit = "foot"
		outputvalue = inputvalue * 0.0328
		
		ELSE IF inputunit == "meter" THEN
		outputunit="yard"
		outputvalue= inputvalue * 1.09
	
	ELSE IF inputunit == "kilometer" THEN
	outputunit="mile"
	outputvalue= inputvalue * 0.62
	
	//Display final output
	END IF
	DISPLAY inputvalue + " "+  inputunit  + "  is equal to " + outputvalue  + " " + outputunit 
	
END
