/*var dog =true;
var cat =true;

alert("Which pet should you get?");
var a= prompt("i want : ")
if(a==="dog"){
    alert("the dog is the one")
}
else if(a==="cat"){
  alert("the cat is the one")
}
else if(a==="cat,dog"){
   alert("both")
}
else{
    alert("neither of those")
}
*/
/*var score= true;
alert("which marks do you have");
var dc =prompt("i have: ");
if(dc >= 80 && dc<=100){
  alert("A")
}
else if(dc>=60 && dc<=79){
  alert("B")
}
else if(dc>=40 && dc<=59){
  alert("C");
}
else if( dc>=20 && dc<=39){
  alert("D");
}
else{
  alert("E");
}*/
/*var burger=true;
var no=true;
alert("What food would you like to be served?");
var noe=prompt("i need: ");
if(noe= burger){
  alert("Here is some burger for you. Anything else?");

  alert("Thanks you for choosing us")
*/



/*var calcDay = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7
 

alert("Enter the year: ")
var yy = parseInt(prompt("the year is"))
alert("Enter the month")
var mm = parseInt(prompt("month is"))
alert("Enter the date")
var dd =  parseInt(prompt("The date is"))
*/


/*var yy =parseInt (prompt("Enter the year: "));
 alert(yy);
 var calcCc= ((yy-1)/100)+1;
 alert(calcCc);
var cc=parseInt (prompt("Enter a number you have got before this"));
 alert(cc);
var mm = parseInt (prompt("Enter the month:"));
alert(mm);
var dd =parseInt (prompt("Enter the date:"));
 alert(dd);
var calcDay = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7
alert(calcDay);
var number=[0,1,2,3,4,5,6];
if (num == number[0] && gender==[0]) {
alert("Kofi")
}*/



var yy =parseInt (prompt("Enter the year: "));
 
 var calcCc= ((yy-1)/100)+1;
 var nad=calcCc.toFixed(0);
 alert(nad);
var cc=parseInt (prompt("Enter a number you have got before this"));

var mm = parseInt (prompt("Enter the month:"));

var dd =parseInt (prompt("Enter the date:"));
 
 var gender=prompt("Enter the gender:");
 
var calcDay = ( ( (cc/4) -2*cc-1) + ((5*yy/4) ) + ((26*(mm+1)/10)) + dd )%7
var num= calcDay.toFixed(0);


var number =[0,1,2,3,4,5,6]
if (num== number[0] && gender=="male") {
alert("kwasi")
}
else if (num ==number[1]  && gender=="male") {
alert("Kwadio")
}else if (num == number[2] && gender=="male") {
alert("Kwabena")
}else if (num == number[3] && gender=="male") {
alert("Kwaku")
}else if (num == number[4] && gender=="male") {
alert("Yaw")
}else if (num == number[5] && gender=="male") {
alert("Kofi")
}else if (num == number[6] && gender=="male") {
alert("Kwame")
}
if (num== number[0] && gender=="female") {
alert(" Akosua")
}
else if (num ==number[1]  && gender=="female") {
alert(" Adwoa")
}else if(num == number[2] && gender=="female") {
alert("Abenaa")
}else if (num == number[3] && gender=="female") {
alert("Akua")
}else if (num == number[4] && gender=="female") {
alert("Yaa")
}else if (num == number[5] && gender=="female") {
alert("Afua")
}else if (num == number[6] && gender=="female") {
alert("Ama")
}