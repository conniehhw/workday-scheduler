https://calendly.com/fsf-tutor-team/alistair-rowden
Something.on(“what I’m listening for”, function() {})

//logic for header - need to parse data still
// const d = new Date();
// document.getElementById("currentDay").innerHTML = d;
// var hour = new Date().getHours();

let hour = new Date().getHours();
// hour = 10;
document.getElementById("demo").innerHTML = hour;

var today = moment();
$("#currentDay").text(today.format("ddd MMM Do, YYYY"));

//attr = id

// $(".timeBlock").each(function(){
//   if($(this).attr("id") < hour) {
//        console.log("past"),
//        $(this).css("background-color", "gray");
       
//    } else if ($(this).text() == hour) {
//        console.log("now"),
//        $(this).css("background-color", "red");
//     } else {
//        console.log("Future"),
//        $(this).css("background-color", "green");
//     }});

// function whatTime () {
// $(".timeBlock").each(function () {
//     if($(this).text() < hour) {
//         $(this).text() == "Past"
//         console.log("Past") 
//     } else if ($(this).text() == hour) {
//         $(this).text() == "Now" 
//         console.log("Now") 
//     } else {
//         $(this).text() == "Future"
//         console.log("Future")  
//         }
// });
// }

// var hour = new Date().getHours();

//Logic for event changing color upon document load
// this is a test to see output of .timeBlock (the first) -- .text takes in the unique content
// if ($("#hour9") < hour) {
//     console.log("less");
// } else if ($(".timeBlock").text() == hour) {
//     console.log("equal");
// } else {
//     console.log("greater1");
// };

// this checks the .text inside #time and compares vs. hour to produce a colour in the marked #eventBlock9 specific
// function checkTime () {
// if ($("#hour10").text() < hour) {
//         $("#description10").css("background-color", "gray");
//         console.log("the time is " + hour + " o'clock, the gray event has past");
//     } else if ($("#hour10").text() == hour) {
//         $("#description10").css("background-color", "red");
//         console.log($("#hour10").text());
//         console.log("the time is " + hour + " o'clock, the red event is now");
//         } else  {
//         $("#description10").css("background-color", "green");
//         console.log($("#hour10").text());
//         console.log("the time is " + hour + " 0'clock, the green event to come");
//    }
// };

// $(document).ready(checkTime);

// this is the 3rd test - compares timeBlock vs. hour
// this function is taking the last element in the loop and applying css - last element only
$(".timeBlock").each(function(){
   if(($(this).attr("id")) < hour) {
        console.log("The event has already past");
        $(this).siblings("textarea").css("background-color", "gray");
    } else if ($(this).attr("id") == hour) {
        console.log("The event is now"),
        $(this).siblings("textarea").css("background-color", "red");
     } else {
        console.log("The event is to come"),
        $(this).siblings("textarea").css("background-color", "green");
    }
  });



// $(".description").each(function () {
//     if($(".timeBlock.text()") < hour) {
//         console.log("The event has already past");
//         $(".description").css("background-color", "gray");
//     } else {
//         console.log("The event is to come");
//         $(".description").css("background-color", "green");
//     }
//     });

//this is a test to loop through each eventBlock; output "hey" & bgcolor 
// $(".eventBlock").each(function() {
//     console.log("hey");
//     $(this).css("background-color", "yellow");
// });

// let text = "";
// for (let i = 0; i < 5; i++) {
//   text += "The number is " + i + "<br>";
// }
// document.getElementById("demo").innerHTML = text;

// for (let i = 9; i < 17; i++) {
//     // text += "The number is " + i + "<br>";
// };

// Logic for input & localStorage

$(".saveBtn").on("click", function() {
  console.log($(this).siblings("textarea"));
  localStorage.setItem("textarea", description11); //this. is dynamic & changes- starting point
});

localStorage.setItem("description11", description11);

https://docs.google.com/forms/d/e/1FAIpQLSdb4ejjbqoqKO-Q4k7zeO_xwykwB0dxYLWYm1mX5Ik45MzEeg/viewform


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
};

function renderLastSaved() {
    var description9 = localStorage.getItem("description9");
    var description10 = localStorage.getItem("description10");  
    var description11 = localStorage.getItem("description11");  

    if (!description9 || !description10 || !description11) {
      return;
    }

    descriptionInput9.textContent = description9;
    descriptionInput10.textContent = description10;
    descriptionInput11.textContent = description11;
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
   
    // setTimeout(function() {
    //     $('#msg').fadeOut('fast');
    // }, 1000);
    localStorage.setItem("description11", description11);
    renderLastSaved()
};
});




    
   
