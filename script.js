//logic for header - need to parse data still
// const d = new Date();
// document.getElementById("currentDay").innerHTML = d;
// var hour = new Date().getHours();

let hour = new Date().getHours();
document.getElementById("demo").innerHTML = hour;

var today = moment();
$("#currentDay").text(today.format("ddd MMM Do, YYYY"));

//attr = id

// Logic to verify if the event has past, is current or to come.
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

  renderLastRegistered();

$(".saveBtn").on("click", function() {
  // console.log($(this).siblings("textarea"));
var description9 = $("#description9").val();
var description10 = $("#description10").val();
var description11 = $("#description11").val();
var description12 = $("#description12").val();
var description13 = $("#description13").val();
var description14 = $("#description14").val();
var description15 = $("#description15").val();
var description16 = $("#description16").val();
var description17 = $("#description17").val();
  localStorage.setItem("description9", description9); // id, value [input]
  localStorage.setItem("description10", description10); // id, value[input]
  localStorage.setItem("description11", description11); // id, value[input]
  localStorage.setItem("description12", description12); // id, value [input]
  localStorage.setItem("description13", description13); // id, value [input]
  localStorage.setItem("description14", description14); // id, value [input]
  localStorage.setItem("description15", description15); // id, value [input]
  localStorage.setItem("description16", description16); // id, value [input]
  localStorage.setItem("description17", description17); // id, value [input]
      });


    $(".saveBtn").on("click", showStatus);

    function showStatus() {
    document.querySelector("#status").innerHTML = "Added to Local Storage"}

    const element = document.getElementById("saveBtn");

  function renderLastRegistered() {
    var poop = localStorage.getItem("description9");
    description9.textContent = poop;
  }

    function renderLastRegistered() {
      var test = localStorage.getItem("description9");
      description9.textContent = test;

  }

// function renderLastSaved(){
//   localStorage.getItem("textarea");
// }//////////////////////////////////////////////////////////////////////

// var userEmailSpan = document.querySelector("#user-email");
// var userPasswordSpan = document.querySelector("#user-password");

// renderLastRegistered();

// function renderLastRegistered() {
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");

//   if (!email || !password) {
//     return;
//   }

//   userEmailSpan.textContent = email;
// }













// function renderLastSaved() {
//   localStorage.getItem("textarea", description9);
//   localStorage.getItem("textarea", description10);
//   localStorage.getItem("textarea", description11);
// };

// renderLastSaved();

// // var descriptionInput9 = document.querySelector("#description9");
// var descriptionInput10 = document.querySelector("#description10");
// var descriptionInput11 = document.querySelector("#description11");
// // var saveButton9 = document.querySelector("#save9");
// var saveButton10 = document.querySelector("#save10");
// var saveButton11 = document.querySelector("#save11");
// var msgSection = document.querySelector("#msg");
// var userDescription9Span = document.querySelector("#user-description9");
// var userDescription10Span = document.querySelector("#user-description10");
// var userDescription11Span = document.querySelector("#user-description11");

// renderLastSaved();

// function notifyMessage(type, message) {
//     msgSection.textContent = message;
//     msgSection.setAttribute("class", type);
// };

// function renderLastSaved() {
//     var description9 = localStorage.getItem("description9");
//     var description10 = localStorage.getItem("description10");  
//     var description11 = localStorage.getItem("description11");  

//     if (!description9 || !description10 || !description11) {
//       return;
//     }

//     descriptionInput9.textContent = description9;
//     descriptionInput10.textContent = description10;
//     descriptionInput11.textContent = description11;
//     descriptionInput12.textContent = description12;
// }

// saveButton9.addEventListener("click", function(event) {
//     event.preventDefault();
    
//     var description9 = document.querySelector("#description9").value;

//     if (description9 === "") {
//         notifyMessage("error", "Please enter a description");
//           } else {
//             notifyMessage("success", "Appointment Added to localStorage");

//     localStorage.setItem("description9", description9);
//     renderLastSaved();
//     }
// }),


// saveButton10.addEventListener("click", function(event) {
//     event.preventDefault();

//     var description10 = document.querySelector("#description10").value;

//     if (description10 === "") {
//             notifyMessage("error", "Please enter a description");
//               } else {
//                 notifyMessage("success", "Appointment Added to localStorage");
    
//     localStorage.setItem("description10", description10);
//     renderLastSaved();
//     }
// }),
    
// saveButton11.addEventListener("click", function(event) {
//     event.preventDefault();

//     var description11 = document.querySelector("#description11").value;

//     if (description11 === "") {
//         notifyMessage("error", "Please enter a description");
//           } else {
//             notifyMessage("success", "Appointment Added to localStorage");
   
//     // setTimeout(function() {
//     //     $('#msg').fadeOut('fast');
//     // }, 1000);
//     localStorage.setItem("description11", description11);
//     renderLastSaved()
// // };
// });




    
   
