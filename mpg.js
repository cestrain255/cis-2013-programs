var floatMiles, floatGallons, floatMpg;

floatMiles = parseFloat(prompt("Enter miles driven"));
floatGallons = parseFloat(prompt("Enter gallons of gas used"));

floatMpg = parseFloat(floatMiles/floatGallons).toFixed(2); // calculates mpg by dividing miles by gallons

alert("Miles per gallon = " + floatMpg);