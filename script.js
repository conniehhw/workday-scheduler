
const d = new Date();
document.getElementById("currentDay").innerHTML = d;

let hour = new Date().getHours();
document.getElementById("demo").innerHTML = hour;

// var setTime = document.getElementById("setTime");
var setTime = $('#setTime'[1]);

var thisHour = new Date().getHours();

// // 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
// var weekNum = today.format("w");
// var takeOut;
// // Check odd, then assign boolean
// if(weekNum % 2) {
//   takeOut = true;
// } else {
//   takeOut = false;
// }

// $("#4a").text(takeOut + ", because it's currently week " + weekNum);

var eventStatus;
if($('#setTime') < hour) {
    eventStatus = true;
    $("#demo5").text(eventStatus + "; this event has past as the current hour is " + hour);
    console.log(eventStatus + "this event has past as the current hour is " + hour);
} else {
    eventStatus = false;
    $("#demo5").text(eventStatus + "; this event is to come as the current hour is " + hour + " o'clock");
    console.log(eventStatus + "; this event is to come as the current hour is " + hour + " o'clock");
};


// function myFunction4 (){
//     let setTime = document.getElementById("setTime").textContent;
//     let timeBlock = ((+setTime) < hour) ? "Event Past":"Event to come";
//     document.getElementById("demo5").innerHTML = timeBlock;
// };

// function checkTime () {
//     if (((+setTime) < hour)) {
//         $("#eventBlock9").css("background-color", "green");
//         console.log("green");
//     } else {
//         $("#eventBlock9").css("background-color", "red");
//         console.log("red");
//     }
// };

// $(document).ready(function(){
//     $("#btn1").click(function(){
//         alert("Text: " + $("#test").text());
//       });

console.log("Text: " + $("#time").text());

if ($("#time").text() < hour) {
    console.log("less");
} else {
    console.log("greater");
};

function checkTime () {
if ($("#time").text() < hour) {
        $("#eventBlock9").css("background-color", "gray");
        console.log("the time is " + hour + " o'clock, the gray event has past");
    } else {
        $("#eventBlock9").css("background-color", "green");
        console.log("the time is " + hour + " 0'clock, the green event to come");
    }
};

a = 22;

$(document).ready(checkTime);



// var element = document.getElementById('id');
// var element = $('#id')[0];
// for (let i = 9; i < 17; i++) {
//     // text += "The number is " + i + "<br>";

//   }

// let time = document.getElementById("time").textContent;
//     document.getElementById("demo4").innerHTML = time;

// for (let i = time; i > 17; i++) {
// };

// $(document).ready(function() {
//     $("#demo5").css("background-color", "yellow");
// });


// $(document).ready(function() {
//     $("#eventBlock9").css("background-color", "green");
// });

// $(document).ready(function() {
//     $("#eventBlock10").css("background-color", "red");
// });

// $(document).ready(function() {
//     $("#eventBlock11").css("background-color", "gray");
// });

// $(document).ready(function() {
// if ((timeBlock) === "Event to come") {
//     $("#demo5").css("background-color", "blue");
// } else {
//     $("#demo5").css("background-color", "red");
// }});



// function myFunction4 (){
//     let time = document.getElementById("time").textContent;
//     let timeBlock = ((+time) < hour) ? "Event Past":"Event to come";
//     document.getElementById("demo5").innerHTML = timeBlock;
// }


//     let timeBlock = document.getElementById("timeBlock").textContent;
//     document.getElementById("eventBlock").innerHTML = timeBlock;

// function checkTime () {
//     let timeBlock = document.getElementById("timeBlock").textContent;
//     let status = ((+time) < hour) 
//     document.getElementById("eventBlock").innerHTML = status;
// }

// / Click event causes alert light theme toggle //.on convenience



// $(document).ready(checkTime(){

// Click event causes alert light theme toggle //.on convenience
// themeButtonEl.on('click', function () {
//     if (isDark) {
//       $('body').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
//       isDark = !isDark;
//     } else {
//       $('body').css({ 'background-color': '#1a1a1a', color: '#d9e9e8' });
//       isDark = !isDark;
//     }
//   });

// $(document).ready(function(){
//     if ("col-2" !== hour) {
//         $("input").css("background-color", "#EC7063");
//     } else {
//     $("input").css("background-color", "#52BE80");
//     }
// });

//     saveBtn.on('click', function () {
//         if (timeBlock) {
//             $('eventBlock').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
//             timeBlock < hour;
//         } else {
//             $('eventBlock').css({ 'background-color': '#1a1a1a', color: '#d9e9e8'  });
//         }
//     });



//     saveBtn.on('click', function () {
//         if (timeBlock) {
//             $('eventBlock').css({ 'background-color': '#d9e9e8', color: '#1a1a1a' });
//             timeBlock < hour;
//         } else {
//             $('eventBlock').css({ 'background-color': '#1a1a1a', color: '#d9e9e8'  });
//         }
