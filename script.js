var currentDay = document.querySelector("#currentDay");
var theTime = moment().format("dddd, MMMM Do");
currentDay.textContent = theTime;
var discriptionBox = $(".description");
var saveBtn = $('.saveBtn');
var hour = $('.hour');
var currentHour = moment().hour();

// variables grabbing buttons
var btnNine = $('#btnNine');
var btnTen = $('#btnTen');
var btnEleven = $('#btnEleven');
var btnTwelve = $('#btnTwelve');
var btnThirteen = $('#btnThirteen');
var btnFourteen = $('#btnFourteen');
var btnFifteen = $('#btnFifteen');
var btnSixteen = $('#btnSixteen')
var btnSeventeen = $('#btnSeventeen');

//variables grabbing text areas
var nineText = $("#9");
var tenText = $('#10');
var elevenText = $('#11');
var twelveText = $('#12');
var thirteenText = $('#13');
var fourteenText = $('#14');
var fifteenText = $('#15');
var sixteenText = $('#16');
var seventeenText = $('#17');

// Changes the color of textarea in realtime on the hour
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

function pageLoad () {
    var savedTextAreaContentNine = JSON.parse(localStorage.getItem("textareanine"));
    nineText.text(savedTextAreaContentNine);

    var savedTextAreaContentTen = JSON.parse(localStorage.getItem("textareaten"));
    tenText.text(savedTextAreaContentTen);

    var savedTextAreaContentEleven = JSON.parse(localStorage.getItem("textareaeleven"));
    elevenText.text(savedTextAreaContentEleven);

    var savedTextAreaContentTwelve = JSON.parse(localStorage.getItem("textareatwelve"));
    twelveText.text(savedTextAreaContentTwelve);
    
    var savedTextAreaContentThirteen = JSON.parse(localStorage.getItem("textareathirteen"));
    thirteenText.text(savedTextAreaContentThirteen);

    var savedTextAreaContentFourteen = JSON.parse(localStorage.getItem("textareafourteen"));
    fourteenText.text(savedTextAreaContentFourteen);

    var savedTextAreaContentFifteen = JSON.parse(localStorage.getItem("textareafifteen"));
    fifteenText.text(savedTextAreaContentFifteen);

    var savedTextAreaContentSixteen = JSON.parse(localStorage.getItem("textareasixteen"));
    sixteenText.text(savedTextAreaContentSixteen);

    var savedTextAreaContentSeventeen = JSON.parse(localStorage.getItem("textareaseventeen"));
    seventeenText.text(savedTextAreaContentSeventeen);
   
}

pageLoad ();

btnNine.on('click', function () {
    localStorage.setItem("textareanine", JSON.stringify(nineText.val()));
});

btnTen.on('click', function () {
    localStorage.setItem("textareaten", JSON.stringify(tenText.val()));
});

btnEleven.on('click', function () {
    localStorage.setItem("textareaeleven", JSON.stringify(elevenText.val()));
});

btnTwelve.on('click', function () {
    localStorage.setItem("textareatwelve", JSON.stringify(twelveText.val()));
});

btnThirteen.on('click', function () {
    localStorage.setItem("textareathirteen", JSON.stringify(thirteenText.val()));
});

btnFourteen.on('click', function () {
    localStorage.setItem("textareafourteen", JSON.stringify(fourteenText.val()));
});

btnFifteen.on('click', function () {
    localStorage.setItem("textareafifteen", JSON.stringify(fifteenText.val()));
});

btnSixteen.on('click', function () {
    localStorage.setItem("textareasixteen", JSON.stringify(sixteenText.val()));
});

btnSeventeen.on('click', function () {
    localStorage.setItem("textareaseventeen", JSON.stringify(seventeenText.val()));
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