//Showing current day and time on the 
var currentTime = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentTime);

//use document ready function to prevent any jQuery -
//code from running before the document is finished loading (is ready)
$(document).ready(function(){
   
    // Save the text to local storage on click
    $(".saveBtn").on("click", function(){
    //set key and value variables
    //using save-btn only selects hour 8 - no matter which btn is clicked
    //$(this) selects current element that receives action
    var userInput = $(this).siblings(".description").val();
    var hour = $(this).parent().attr("id"); 
      //saving data to local storage ("key", "value")
        localStorage.setItem(hour, userInput);
        
        console.log(localStorage);
        console.log(userInput);
    })
//set descriptions from storage per hour
$("#hour8 .description").val(localStorage.getItem('hour8'));
$("#hour9 .description").val(localStorage.getItem('hour9'));
$("#hour10 .description").val(localStorage.getItem('hour10'));
$("#hour11 .description").val(localStorage.getItem('hour11'));
$("#hour12 .description").val(localStorage.getItem('hour12'));
$("#hour13 .description").val(localStorage.getItem('hour13'));
$("#hour14 .description").val(localStorage.getItem('hour14'));
$("#hour15 .description").val(localStorage.getItem('hour15'));
$("#hour16 .description").val(localStorage.getItem('hour16'));
$("#hour17 .description").val(localStorage.getItem('hour17'));
console.log(localStorage);

//color code for past, present, and future.
function tenses (){
    //variable for current time
    var currentHour = moment().hour();
    console.log(currentHour);
//.each function cannot be used selects all blocks
//if statement to add css colors to times
if (currentHour > 8) {
            $("#hour8").addClass("past");
    } else if (currentHour >= 8 && currentHour < 9) {
        $("#hour8").addClass("present");
    } else if (currentHour < 8) {
        $("#hour8").addClass("future");
    }

if (currentHour > 9) {
        $("#hour9").addClass("past");
    } else if (currentHour >= 9 && currentHour < 10) {
        $("#hour9").addClass("present");
    } else if (currentHour < 9) {
        $("#hour9").addClass("future");
    }   

if (currentHour > 10) {
        $("#hour10").addClass("past");
    } else if (currentHour >= 10 && currentHour < 11) {
        $("#hour10").addClass("present");
    } else if (currentHour < 10) {
        $("#hour10").addClass("future");
    } 

if (currentHour > 11) {
        $("#hour11").addClass("past");
    } else if (currentHour >= 11 && currentHour < 12) {
        $("#hour11").addClass("present");
    } else if (currentHour < 11) {
        $("#hour11").addClass("future");
    } 
    
if (currentHour > 12) {
        $("#hour12").addClass("past");
    } else if (currentHour >= 12 && currentHour < 13) {
        $("#hour12").addClass("present");
    } else if (currentHour < 12) {
        $("#hour12").addClass("future");
    }
    
if (currentHour > 13) {
        $("#hour13").addClass("past");
    } else if (currentHour >= 13 && currentHour < 14) {
        $("#hour13").addClass("present");
    } else if (currentHour < 13) {
        $("#hour13").addClass("future");
    }
    
if (currentHour > 14) {
        $("#hour14").addClass("past");
    } else if (currentHour >= 14 && currentHour < 15) {
        $("#hour14").addClass("present");
    } else if (currentHour < 14) {
        $("#hour14").addClass("future");
    } 

if (currentHour > 15) {
        $("#hour15").addClass("past");
    } else if (currentHour >= 15 && currentHour < 16) {
        $("#hour15").addClass("present");
    } else if (currentHour < 15) {
        $("#hour15").addClass("future");
    } 

if (currentHour > 16) {
        $("#hour16").addClass("past");
    } else if (currentHour >= 16 && currentHour < 17) {
        $("#hour16").addClass("present");
    } else if (currentHour < 16) {
        $("#hour16").addClass("future");
    }

if (currentHour > 17) {
        $("#hour17").addClass("past");
    } else if (currentHour >= 17 && currentHour < 18) {
        $("#hour17").addClass("present");
    } else if (currentHour < 17) {
        $("#hour17").addClass("future");
    }

}

    tenses();

})
