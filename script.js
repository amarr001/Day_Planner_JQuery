// Array to store and loup 

var dayArray = [
    {
        id: "0",
        hour: "08",
        time: "08",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "1",
        hour: "09",
        time: "09",
        meridiem: "am",
        reminder: ""

    },
    {
        id: "2",
        hour: "10",
        time: "10",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "3",
        hour: "11",
        time: "11",
        meridiem: "am",
        reminder: ""
    },
    {
        id: "4",
        hour: "12",
        time: "12",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "5",
        hour: "1",
        time: "13",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "6",
        hour: "2",
        time: "14",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "7",
        hour: "3",
        time: "15",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "8",
        hour: "4",
        time: "16",
        meridiem: "pm",
        reminder: ""
    },
    {
        id: "9",
        hour: "5",
        time: "17",
        meridiem: "pm",
        reminder: ""

    },
        
]

//Function to get the date in the header using moment.js library

function titleDate(){
    var titleDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(titleDate);
}

// Saves event to localStorage
function saveEvents() {
    localStorage.setItem("dayArray", JSON.stringify(dayArray));
}
// Display data within localStorage
function displayEvents() {
    dayArray.forEach(function (eventDisplay) {
        $(`#${eventDisplay.id}`).val(eventDisplay.reminder);

    })
}

// sets any existing localStorage data to the view if it exists
function init() {
    var recordedDay = JSON.parse(localStorage.getItem("dayArray"));

    if (recordedDay) {

        dayArray = recordedDay;
    }

    saveEvents();
    displayEvents();
}

//Header date
titleDate();

//Added elements in the body, loup

dayArray.forEach(function(hourBody){

// timeblock rows

    var timeRow = $("<form>").attr({
        "class": "row"
    });

    $(".container").append(timeRow);

// Hour niches

    var hourSquare = $("<div>").text(`${hourBody.hour}${hourBody.meridiem}`).attr({
        "class": "col-md-1 hour"
    });
    


//Textarea

var textAreaDiv = $("<div>").attr({"class": "col-md-8 description p-0"});
var textArea = $("<textarea>");
textAreaDiv.append(textArea);
textArea.attr("id", hourBody.id);

if(hourBody.time < moment().format("HH")){
    textArea.attr({
        "class": "past"
    })
}else if(hourBody.time === moment().format("HH")){
    textArea.attr({
        "class": "present"
    })
}else if (hourBody.time > moment().format("HH")){
    textArea.attr({
        "class": "future"
    })
}

//Creates button

var saveBtn = $("<i class='far fa-save fa-lg'></i>")
var saveEvent = $("<button>").attr({"class": "col-md-1 saveBtn"});

saveEvent.append(saveBtn);
timeRow.append(hourSquare, textAreaDiv, saveEvent);

})

init();

// Saves events into localStorage

$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    dayArray[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
    
   console.log(saveIndex);
  console.log(dayArray[saveIndex].reminder);
   
    saveEvents();
    displayEvents();
    
})