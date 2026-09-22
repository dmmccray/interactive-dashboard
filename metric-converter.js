// Metric Converter
var inputvalue = 0;
var outputvalue = 0;
var inputunit = "";
var outputunit = "";

// Imperial to Metric
inputvalue = prompt("Enter Numerical Value");
inputunit = prompt("Select Input Unit Conversion");

if (inputunit === "Inches") {
  outputunit = "centimeters to inches";
  outputvalue = inputvalue * 2.54;
} else if (inputunit === "foot") {
  outputunit = "centimeters to feet";
  outputvalue = inputvalue * 30.48;
} else if (inputunit === "yard") {
  outputunit = "meter";
  outputvalue = inputvalue * 0.91;
} else if (inputunit === "mile") {
  outputunit = "kilometer";
  outputvalue = inputvalue * 1.61;
}
alert(inputvalue + " " + inputunit + " is equal to " + outputvalue + " " + outputunit);

// Metric to Imperial
inputvalue = prompt("Enter Numerical Value");
inputunit = prompt("Select Input Unit Conversion");

if (inputunit === "centimeters to inches") {
  outputunit = "Inches";
  outputvalue = inputvalue * 0.39;
} else if (inputunit === "centimeters to feet") {
  outputunit = "foot";
  outputvalue = inputvalue * 0.0328;
} else if (inputunit === "meter") {
  outputunit = "yard";
  outputvalue = inputvalue * 1.09;
} else if (inputunit === "kilometer") {
  outputunit = "mile";
  outputvalue = inputvalue * 0.62;
}
alert(inputvalue + " " + inputunit + " is equal to " + outputvalue + " " + outputunit);
