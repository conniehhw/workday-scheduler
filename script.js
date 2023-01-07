
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

//this is the 3rd test - compares timeBlock vs. hour
$(".timeBlock").each(function() {
    console.log($(this).text());
    if($(this).text() < hour) {
        console.log("The event has already past");
        $(".eventBlock").css("background-color", "gray");
    } else {
        console.log("The event is to come");
        $(".eventBlock").css("background-color", "green");
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
function checkTime () {
    if ($(".timeBlock").text() < hour) {
        $(".eventBlock").css("background-color", "gray");
        console.log("the current time is " + hour + " o'clock, the gray event has past");
    } else {
        $(".eventBlock").css("background-color", "green");
        console.log("the current time is " + hour + " 0'clock, the green event to come");
    }
};



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

let text = "";

for (let i = 0; i < 5; i++) {
  text += "The number is " + i + "<br>";
}
document.getElementById("demo").innerHTML = text;

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


var eventInput = document.querySelector("#eventBlock");
var saveButton = document.querySelector("#save");
var msgDiv = document.querySelector("#msg");
var userEventSpan = document.querySelector("#user-event");

renderLastSaved();

function displayMessage(type, message) {
    msgDiv.textContent = message;
    msgDiv.setAttribute("class", type);
}

function renderLastSaved() {
    var event = localStorage.getItem("event");  
    if (!event) {
      return;
    }
    userEventSpan.textContent = event;
}

saveButton.addEventListener("click", function(event) {
    event.preventDefault();

    var event = document.querySelector("#event").value;

    if (event === "") {
        displayMessage("error", "Event Block cannot be blank");
      } else {
        displayMessage("success", "Saved successfully");

    localStorage.setItem("event", event);
    renderLastSaved();
}
});

function deleteItems() {
    localStorage.clear();
}





// $('#saveEvent').submit();
// alert("Successfully sumbitted:- " + message);

// localStorage.setItem(key, value);
// let lastname = localStorage.getItem(key);

// localStorage.removeItem(key);
// localStorage.clear();