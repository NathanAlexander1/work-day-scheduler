var currentDay = document.querySelector("#currentDay");
var theTime = moment().format("dddd, MMMM Do");
currentDay.textContent = theTime;
var discriptionBox = $(".description");
var saveBtn = $('.saveBtn');
var hour = $('.hour');
var currentHour = moment().hour();

// variables grabbing buttons
var btnNine = $('#btnNine');

// variables grabbing text areas




var timesArrofObj = [{nine: $("#9")}, {ten: $("#10")}, {eleven: $("#11")}, {twelve: $("#12")}, {thirteen: $("#13")}, {fourteen: $("#14")}, {fifteen: $("#15")}, {sixteen: $("#16")}, {seventeen: $("#17")}];

console.log(timesArrofObj[4]);
//on click: fucntion{}
//iterate over array of objects
//test:console log each object
//if array at i is not an empty string
//save to local storage
//retrieve from local storage and give text content of arr[i].key to description

function changeColor() {
    for (var i = 9; i < 18; i++) {
        if (i < currentHour) {
            $("#" + i).addClass("past");
        } else if (i === currentHour) {
            $("#" + i).addClass("present");
        } else {
            $("#" + i).addClass("future");
        }
    }
}

changeColor();

btnNine.on('click', function () {
    var nineText = $("#9").val();
    localStorage.setItem("textareanine", JSON.stringify(nineText));

    var savedTextAreaContent = JSON.parse(localStorage.getItem("textareanine"));

    nineText = savedTextAreaContent;

  });
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