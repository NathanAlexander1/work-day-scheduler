var currentDay = document.querySelector("#currentDay");

var theTime = moment().format("dddd, MMMM Do");
currentDay.textContent = theTime;


var discriptionBox = $(".description");
var saveBtn = $('.saveBtn');


// var blockOn

//create fillable forms
//if a task takes place in the past, turn itpink
//if a task takes place in the present, turn it red
//if a task takes place in the future, turn it green

//when i click the save button, the text from the fillable form is saved to local storage




//for loop
//if current hour is less than current time
    //turn pink
//if current hour is equal to time
    //turn green
//if current hour greater than current time
    //turn orange