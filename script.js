
const d = new Date();
document.getElementById("currentDay").innerHTML = d;

let hour = new Date().getHours();
document.getElementById("demo").innerHTML = hour;

// var hour = new Date().getHours();

// this is a test to see output of .timeBlock (the first) -- .text takes in the unique content
if ($(".timeBlock").text() < hour) {
    console.log("less");
} else {
    console.log("greater");
};

// this checks the .text inside #time and compares vs. hour to produce a colour in the marked #eventBlock9 specific
// function checkTime () {
// if ($("#time").text() < hour) {
//         $("#eventBlock9").css("background-color", "gray");
//         console.log("the time is " + hour + " o'clock, the gray event has past");
//     } else {
//         $("#eventBlock9").css("background-color", "green");
//         console.log("the time is " + hour + " 0'clock, the green event to come");
//    }
// };
// $(document).ready(checkTime);

// this is another test with even/odd numbers -- .text takes in the unique content
// $(".timeBlock").each(function() {
//     console.log($(this).text());
//     if($(this).text() % 2 == 0){
//         console.log("The number is even")
//     } else {
//         console.log("The number is odd")
//     }
// });

// $(document).ready(checkTime);

//this is the 3rd test - compares timeBlock vs. hour
//this function is taking the last element in the loop and applying css.
$(".timeBlock").each(function() {
    console.log($(this).text());
    if($(this).text() < hour) {
        console.log("The event has already past");
        $(".description").css("background-color", "gray");
    } else {
        console.log("The event is to come");
        $(".description").css("background-color", "green");
    }
});

//this is a test to loop through each eventBlock; output "hey" & bgcolor 
// $(".eventBlock").each(function() {
//     console.log("hey");
//     $(this).css("background-color", "yellow");
// });

// This is a function to checkTime of timeBlocks vs. eventBlocks (not noting the unique content/text)
//     function checkTime () {
//         if ("#time10" < hour) {
//                 $("#eventBlock10").css("background-color", "gray");
//                 console.log("the current time is " + hour + " o'clock, the gray event has past");
//             } else {
//                 $("#eventBlock10").css("background-color", "green");
//                 console.log("the current time is " + hour + " 0'clock, the green event to come");
//             };
//     };
//   $(document).ready(checkTime);


//This is a function taking content of timeBlock, compare to hour, output eventBlocks in colour & console.log
// function checkTime () {
//     if ($(".timeBlock").text() < hour) {
//         $(".description").css("background-color", "gray");
//         console.log("the current time is " + hour + " o'clock, the gray event has past");
//     } else {
//         $(".description").css("background-color", "green");
//         console.log("the current time is " + hour + " 0'clock, the green event to come");
//     }
// };



// this function takes the #id of time and #id of eventBlock -- how to make it loop through with each unique text
// function checkTime () {
//     if ($("#time27").text() < hour) {
//             $("#eventBlock9").css("background-color", "gray");
//             console.log("the current time is " + hour + " o'clock, the gray event has past");
//         } else {
//             $("#eventBlock9").css("background-color", "green");
//             console.log("the current time is " + hour + " 0'clock, the green event to come");
//         }
//     };

// let text = "";

// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// for (let i = 9; i < 17; i++) {
//     // text += "The number is " + i + "<br>";
// };

// Example for moment activity 15 inst
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


var descriptionInput9 = document.querySelector("#description9");
var descriptionInput10 = document.querySelector("#description10");
var descriptionInput11 = document.querySelector("#description11");
var saveButton9 = document.querySelector("#save9");
var saveButton10 = document.querySelector("#save10");
var saveButton11 = document.querySelector("#save11");
var msgSection = document.querySelector("#msg");
var userDescription9Span = document.querySelector("#user-description9");
var userDescription10Span = document.querySelector("#user-description10");
var userDescription11Span = document.querySelector("#user-description11");

renderLastSaved();

function notifyMessage(type, message) {
    msgSection.textContent = message;
    msgSection.setAttribute("class", type);
}

function renderLastSaved() {
    var description9 = localStorage.getItem("description9");
    var description10 = localStorage.getItem("description10");  
    var description11 = localStorage.getItem("description11");  

    if (!description9 || !description10 || !description11) {
      return;
    }

    userDescription9Span.textContent = description9;
    userDescription10Span.textContent = description10;
    userDescription11Span.textContent = description11;
}

saveButton9.addEventListener("click", function(event) {
    event.preventDefault();
    
    var description9 = document.querySelector("#description9").value;

    if (description9 === "") {
        notifyMessage("error", "Please enter a description");
          } else {
            notifyMessage("success", "Appointment Added to localStorage");

    localStorage.setItem("description9", description9);
    renderLastSaved();
    }
}),


saveButton10.addEventListener("click", function(event) {
    event.preventDefault();

    var description10 = document.querySelector("#description10").value;

    if (description10 === "") {
            notifyMessage("error", "Please enter a description");
              } else {
                notifyMessage("success", "Appointment Added to localStorage");
    
    localStorage.setItem("description10", description10);
    renderLastSaved();
    }
}),
    

saveButton11.addEventListener("click", function(event) {
    event.preventDefault();

    var description11 = document.querySelector("#description11").value;

    if (description11 === "") {
        notifyMessage("error", "Please enter a description");
          } else {
            notifyMessage("success", "Appointment Added to localStorage");
    localStorage.setItem("description11", description11);
    renderLastSaved();
    }
});