//Task 1

var arrayNames = new Array("John", "Robert", "Jimmy", "Bonzo");

var arrayInstruments = [];
arrayInstruments[0] = "bass";
arrayInstruments[1] = "vocals";
arrayInstruments[2] = "guitar";
arrayInstruments[3] = "drums";

var stringMessage="";

var intCount;

for (intCount=0; intCount<arrayNames.length; intCount++)
{
    stringMessage = stringMessage + arrayNames[intCount] + " plays " +arrayInstruments[intCount] + "\n";
}
alert(stringMessage);


//task 2
var stringTimesTable = "";

for ( var x=1; x<=12; x++)
{
    for (var y=1; y<=12; y++)
    {
        stringTimesTable = stringTimesTable + " " + x*y + " ";
    }
    stringTimesTable +="\n";
}
alert(stringTimesTable);



//task 3


var stringEvenTimes = "";
var arrayTimesTable = [];
for(var a=1; a<=12; a++)    
{
    arrayTimesTable[a]=[];
    for(var b=1; b<=12; b++)    
    {
        arrayTimesTable[a][b] = a*b; 
    }
}
for(var s=1; s<=12;s++) 
{
    if (s%2===0)
    {
        for(var t=1; t<=12; t++)
        {
            stringEvenTimes = stringEvenTimes + " " + arrayTimesTable[s][t] + " ";
        }
    stringEvenTimes +="\n";    
    }
}
alert(stringEvenTimes);








