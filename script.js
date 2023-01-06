
const d = new Date();
document.getElementById("currentDay").innerHTML = d;

let hour = new Date().getHours();
document.getElementById("demo").innerHTML = hour;


// for (let i = 9; i < 17; i++) {
//     // text += "The number is " + i + "<br>";

//   }

// let time = document.getElementById("time").textContent;
//     document.getElementById("demo4").innerHTML = time;

// for (let i = time; i > 17; i++) {

function myFunction4 (){
    let time = document.getElementById("time").textContent;
    let timeBlock = ((+time) < hour) ? "Event Past":"Event to come";
    document.getElementById("demo5").innerHTML = timeBlock;
};
// };

$(document).ready(function() {
    $("#demo5").css("background-color", "yellow");
});

$(document).ready(function() {
    $("#eventBlock9").css("background-color", "green");
});

$(document).ready(function() {
    $("#eventBlock10").css("background-color", "red");
});

$(document).ready(function() {
    $("#eventBlock11").css("background-color", "gray");
});

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
//     });

