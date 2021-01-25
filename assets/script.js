//Showing current day and time on the 
var currentTime = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentTime);

//use document ready function to prevent any jQuery -
//code from running before the document is finished loading (is ready)
$(document).ready(function(){
// Save the text to local storage

    $(".saveBtn").on("click", function(){
       
    var userInput = $(".saveBtn").siblings(".description").val();
    var hour = $(".saveBtn").parent().attr("id"); 
      //saving data to local storage ("key", "value")
        localStorage.setItem(hour, userInput);
        // localStorage.setItem("#hour9", userInput);
        // localStorage.setItem("#hour10", userInput);
        // localStorage.setItem("#hour11", userInput);
        // localStorage.setItem("#hour12", userInput);
        // localStorage.setItem("#hour13", userInput);
        // localStorage.setItem("#hour14", userInput);
        // localStorage.setItem("#hour15", userInput);
        // localStorage.setItem("#hour16", userInput);
        // localStorage.setItem("#hour17", userInput);
        console.log(localStorage);
    })

// //set description from storage
// $(".description").innerText.val(localStorage.getItem("#hour8"));
// $(".description").innerText.val(localStorage.getItem("#hour9"));
// $(".description").innerText.val(localStorage.getItem("#hour10"));
// $(".description").innerText.val(localStorage.getItem("#hour11"));
// $(".description").innerText.val(localStorage.getItem("#hour12"));
// $(".description").innerText.val(localStorage.getItem("#hour13"));
// $(".description").innerText.val(localStorage.getItem("#hour15"));
// $(".description").innerText.val(localStorage.getItem("#hour16"));
// $(".description").innerText.val(localStorage.getItem("#hour17"));




// console.log(userInput);






});
