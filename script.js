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

//Loading title date

titleDate();

//Gets localStorage data

function showStorage(){
    var recordedDay = JSON.parse(localStorage.getItem("dayArray"));

    if(recordedDay){
        dayArray = recordedDay;
    }

    saveEvents();
    displayEvents();

}

//Added elements in the body, loup

dayArray.forEach(function(hourBody)

{// timeblock rows

    var timeRow = $("<form>").attr({
        "class": "row"
    });

    $(".container").append(timeRow);

// Hour niches

    var hourSquare = $("<div>").text(`${hourBody.hour}${hourBody.meridiem}`).attr({
        "class": "col-md-1 hour"
    });
    timeRow.append(hourSquare);
});

    
