var myDate = new Date();
var day = myDate.getDay();
var month = myDate.getMonth();
var date = myDate.getDate();

var days = ["রবিবার", "সোমবার", "মঙ্গলবার", "বুধবার", "বৃহস্পতিবার", "শুক্রবার", "শনিবার"];
var months = ["জানুয়ারি", "ফেব্রুয়ারি", "মার্চ", "এপ্রিল", "মে", "জুন", "জুলাই", "অগাস্ট", "সেপ্টেম্বর", "অক্টোবর", "নভেম্বর", "ডিসেম্বর"];
var dates = ["১","২","৩","৪","৫","৬","৭","৮","৯","১০","১১","১২","১৩","১৪","১৫","১৬","১৭","১৮","১৯","২০","২১","২২","২৩","২৪","২৫","২৬","২৭","২৮","২৯","৩০","৩১"];
var a = days[day] + ", " + months[month] + " " + dates[date];
//console.log(a);

document.getElementById("date").innerHTML = a;

/*console.log(days[day]);
console.log(months[month]);
console.log(date);*/
