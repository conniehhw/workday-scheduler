//const d = new Date();
//document.getElementById("currentDay").innerHTML = d.getFullYear;

const months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

const d = new Date();
let month = months[d.getMonth()];
document.getElementById("currentDay").innerHTML = month;

// $(document).ready(function(){ ---> use for when time is past/present/future
//   $("button").click(function(){
//     $("h1, h2, p").addClass("blue");
//     $("div").addClass("important");
//   });
// });

// let checkTime = function () {
//     if(Date.now === Date.now)
//     $("col-9").addClass("green")};

//     if(Date.now <)
//     $("col-9").addClass("red");
//     else( $("col-9").addClass("gray")
// };



const hour = new Date().getHours();
let colour; 

if (hour < 18) {
$("h2").addClass("green");
} else {
    $("h2").addClass("green");
}

document.getElementById("demo").innerHTML = colour;