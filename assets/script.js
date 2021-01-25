//Showing current day and time on the 
var currentTime = moment().format('dddd, MMMM Do YYYY');
$("#currentDay").html(currentTime);

//use document ready function to prevent any jQuery -
//code from running before the document is finished loading (is ready)
$(document).ready(function(){
// Save the text to local storage
var userInput = $(".description").val();

    $(".saveBtn").click(function(){
       //saving data to local storage ("key", "value") 
        localStorage.setItem("#hour8", userInput);
        localStorage.setItem("#hour9", userInput);
        localStorage.setItem("#hour10", userInput);
        localStorage.setItem("#hour11", userInput);
        localStorage.setItem("#hour12", userInput);
        localStorage.setItem("#hour13", userInput);
        localStorage.setItem("#hour14", userInput);
        localStorage.setItem("#hour15", userInput);
        localStorage.setItem("#hour16", userInput);
        localStorage.setItem("#hour17", userInput);
    })

//set description from storage
$(".description").innerText = localStorage.getItem("#hour8");
$(".description").innerText = localStorage.getItem("#hour9");
$(".description").innerText = localStorage.getItem("#hour10");
$(".description").innerText = localStorage.getItem("#hour11");
$(".description").innerText = localStorage.getItem("#hour12");
$(".description").innerText = localStorage.getItem("#hour13");
$(".description").innerText = localStorage.getItem("#hour15");
$(".description").innerText = localStorage.getItem("#hour16");
$(".description").innerText = localStorage.getItem("#hour17");



console.log(localStorage);
console.log(userInput);






});
