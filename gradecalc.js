//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW pts (0-30) :")) ;

floatMidPts = parseFloat (prompt("Please enter midterm pts (0-35) :")) ;

floatFinPts = parseFloat (prompt("Please enter final pts (0-35) :")) ;

floatTotalPts = parseFloat (floatHwPts + floatFinPts + floatMidPts) ;

intGradeOption = parseFloat (prompt ("Is course pass/ fail? Enter 1 for pass/fail or 2 for letter grade; "));

if (intGradeOption===1)
{
    if(floatTotalPts >= 80) {
        alert ("You Passed");
    }
   alert ("You Failed");
}
if (floatTotalPts>=90) {
    stringFinalGrade = "A";
}
else if (floatTotalPts<90 && floatTotalPts>=80) {
    stringFinalGrade = "B";
}
else if (floatTotalPts<80 && floatTotalPts>=70) {
    stringFinalGrade = "C";
}
else if (floatTotalPts<70 && floatTotalPts>60) {
    stringFinalGrade = "D";
}
else{
    stringFinalGrade = "F";
}








alert("Your final grade is: " +stringFinalGrade);