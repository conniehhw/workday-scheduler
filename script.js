//logic for header 
let hour = new Date().getHours();
// document.getElementById("demo").innerHTML = hour;

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


// execute reload page from localStorage
renderLastSaved();

// logic to store in localStorage
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
  localStorage.setItem("description10", description10); 
  localStorage.setItem("description11", description11); 
  localStorage.setItem("description12", description12); 
  localStorage.setItem("description13", description13); 
  localStorage.setItem("description14", description14); 
  localStorage.setItem("description15", description15); 
  localStorage.setItem("description16", description16); 
  localStorage.setItem("description17", description17); 
      });


      // setTimeout(() => {
      //   const msg = document.getElementById('status');
      //   msg.style.display = "none";
      //   }, 3000);
      
// logic to display description is saved in local Storage
$(".saveBtn").on("click", showStatus);
    function showStatus() {
    document.querySelector("#status").innerHTML = "Added to Local Storage"}

    const element = document.getElementById("saveBtn");

    

// NOTE line 66 below: this is DRY - there should be a method to loop through each textarea
// if there is text; to execute function renderLastSaved (localStorage.getItem) - something:
// $(".description").each(function(){
//   if(($(this).attr("id")) == ""){
//   console.log("this textarea is empty");
//  } else {
//     $(this).children("textarea").function(renderLastSaved());
//   }
// });

// logic to reload page from localStorage
  function renderLastSaved() {
    var describe9 = localStorage.getItem("description9");
    description9.textContent = describe9;

    var describe10 = localStorage.getItem("description10");
    description10.textContent = describe10;

    var describe11 = localStorage.getItem("description11");
    description11.textContent = describe11;

    var describe12 = localStorage.getItem("description12");
    description12.textContent = describe12;

    var describe13 = localStorage.getItem("description13");
    description13.textContent = describe13;

    var describe14 = localStorage.getItem("description14");
    description14.textContent = describe14;

    var describe15 = localStorage.getItem("description15");
    description15.textContent = describe15;

    var describe16 = localStorage.getItem("description16");
    description16.textContent = describe16;

    var describe17 = localStorage.getItem("description17");
    description17.textContent = describe17;

  }


