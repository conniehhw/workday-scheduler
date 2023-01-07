
const d = new Date();
document.getElementById("currentDay").innerHTML = d;

let hour = new Date().getHours();
document.getElementById("demo").innerHTML = hour;

// var setTime = document.getElementById("setTime");
// var setTime = $('#setTime'[1]);

// var thisHour = new Date().getHours();

console.log("Text: " + $(".timeBlock").text());

if ($(".timeBlock").text() < hour) {
    console.log("less");
} else {
    console.log("greater");
};

// this checks the content inside #time and compares vs. hour to produce a colour in #eventBlock
// function checkTime () {
// if ($("#time").text() < hour) {
//         $("#eventBlock9").css("background-color", "gray");
//         console.log("the time is " + hour + " o'clock, the gray event has past");
//     } else {
//         $("#eventBlock9").css("background-color", "green");
//         console.log("the time is " + hour + " 0'clock, the green event to come");
//     }
// };

// $(document).ready(checkTime);

// loop through each one and apply the function

// $( "li" ).each(function( index ) {
//     console.log( index + ": " + $( this ).text() );
//   });

// the .class routes through each one it matches
// the #id does not - these are unique & finds only the unique match
$(".timeBlock").each(function( index) {
    console.log( index + ": " + $( this ).text() );   
    $(document).ready(checkTime);
});

// $("#time1").each(function( index) {
//     console.log( index + ": " + $( this ).text() );   
// });

// function checkTime () {
//     if ($(".timeBlock").text() < hour) {
//         $(".eventBlock").css("background-color", "gray");
//         console.log("the current time is " + hour + " o'clock, the gray event has past");
//     } else {
//         $(".eventBlock").css("background-color", "green");
//         console.log("the current time is " + hour + " 0'clock, the green event to come");
//     }
// };

// this function runs the function 3x to .eventBlock
function checkTime () {
    if ($("#time27").text() < hour) {
            $("#eventBlock9").css("background-color", "gray");
            console.log("the current time is " + hour + " o'clock, the gray event has past");
        } else {
            $("#eventBlock9").css("background-color", "green");
            console.log("the current time is " + hour + " 0'clock, the green event to come");
        }
    };

    // this doesn't make sense b/c id are unique
    // function checkTime1 () {
    //     if ($("#time").text() < hour) {
    //             $(".eventBlock").css("background-color", "gray");
    //             console.log("the current time is " + hour + " o'clock, the gray event has past");
    //         } else {
    //             $(".eventBlock").css("background-color", "green");
    //             console.log("the current time is " + hour + " 0'clock, the green event to come");
    //         }
    //     };

// $(document).ready(checkTime);

// $(document).ready(function(){
//     $("#time").each(function () {
//       $("#time").css({
//         "color": "white",
//         "background-color": "#98bf21",
//         "font-family": "Arial",
//         "font-size": "20px",
//         "padding": "5px"
//       });
//     })
// });

let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}

document.getElementById("demo").innerHTML = text;

// for (let i = 9; i < 17; i++) {
//     // text += "The number is " + i + "<br>";


// for (let i = time; i > 17; i++) {
// };

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

// var eventStatus;
// if($("#setTime".text()) < hour) {
//     eventStatus = true;
//     $("#demo5").text(eventStatus + "; this event has past as the current hour is " + hour);
//     console.log(eventStatus + "this event has past as the current hour is " + hour);
// } else {
//     eventStatus = false;
//     $("#demo5").text(eventStatus + "; this event is to come as the current hour is " + hour + " o'clock");
//     console.log(eventStatus + "; this event is to come as the current hour is " + hour + " o'clock");
// };