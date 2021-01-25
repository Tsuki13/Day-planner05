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
    console.log(currentHour)
//function to add css colors to times
    $(".row").each(function(){
         if (currentHour == currentHour) {
             $(".row").addClass("present");
         } 
        
    })
    
}
tenses();











});
