var floatAge, floatDays, intWeeks, floatMonths, intFortnights;

floatAge = parseFloat(prompt("Enter age in years"));

floatDays = parseFloat(floatAge * 365.25).toFixed(2); // calculates age in days
intWeeks = parseFloat(floatDays / 7).toFixed(2); // calculates age in weeks
floatMonths = parseFloat(floatAge * 12).toFixed(2); // calculates age in months
intFortnights = parseFloat(floatDays / 14).toFixed(2); // calculates age in fortnights
alert("you are currently = " + floatAge + " years old and you are " + floatDays + " days old " + intWeeks + " weeks old " + floatMonths + " months old " + intFortnights + " fortnights old ");