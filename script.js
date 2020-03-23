// Array to store and loup 

var dayArray = [
    {
        index: "0",
        hour: "8",
        time: "8",
        meridiem: "am",
        event: ""
    },
    {
        index: "1",
        hour: "9",
        time: "9",
        meridiem: "am",
        event: ""

    },
    {
        index: "2",
        hour: "10",
        time: "10",
        meridiem: "am",
        event: ""
    },
    {
        index: "3",
        hour: "11",
        time: "11",
        meridiem: "am",
        event: ""
    },
    {
        index: "4",
        hour: "12",
        time: "12",
        meridiem: "pm",
        event: ""
    },
    {
        index: "5",
        hour: "1",
        time: "1",
        meridiem: "pm",
        event: ""
    },
    {
        index: "6",
        hour: "2",
        time: "2",
        meridiem: "pm",
        event: ""
    },
    {
        index: "7",
        hour: "3",
        time: "3",
        meridiem: "pm",
        event: ""
    },
    {
        index: "8",
        hour: "4",
        time: "4",
        meridiem: "pm",
        event: ""
    },
    {
        index: "9",
        hour: "5",
        time: "5",
        meridiem: "pm",
        event: ""

    },
        
]

//Function to get the date in the header using moment.js library

function titleDate(){
    var titleDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(titleDate);
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

var textArea = $("<div>").attr({"class": "col-md-8 description p-0"});
var event = $("<textarea>");
textArea.append(event);
event.attr("index", hourBody.index);

if(hourBody.time < moment().format("HH")){
    event.attr({
        "class": "past"
    });
}else if(hourBody === moment().format("HH")){
    event.attr({
        "class": "present"
    });
}else if (hourBody > moment().format("HH")){
    event.attr({
        "class": "future"
    });
}

//Creates button

var saveBtn = $("<i class='far fa-save fa-lg'></i>");
var saveEvent = $("<button>").attr({"class": "col-md-1 saveBtn"});
saveEvent.append(saveBtn);

timeRow.append(hourSquare, textArea, saveEvent);

  
});