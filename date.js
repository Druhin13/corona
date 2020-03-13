var myDate = new Date();
var day = myDate.getDay();
var month = myDate.getMonth();
var date = myDate.getDate();

var days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
var months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"];

var a = days[day] + ", " + months[month] + " " + date;
//console.log(a);

document.getElementById("date").innerHTML = a;

/*console.log(days[day]);
console.log(months[month]);
console.log(date);*/
