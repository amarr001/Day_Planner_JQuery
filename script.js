
var dayArray = [

    {
        id: "0",
        hour: "8",
        time: "08",
        meridiem: "am",
        textevent: "" 

    },
    {
        id: "0",
        hour: "9",
        time: "09",
        meridiem: "am",
        textevent: "" 
    },
    {
        id: "1",
        hour: "10",
        time: "10",
        meridiem: "am",
        textevent: ""
    },
    {
        id: "2",
        hour: "11",
        time: "11",
        meridiem: "am",
        textevent: ""
    },
    {
        id: "3",
        hour: "12",
        time: "12",
        meridiem: "pm",
        textevent: ""
    },
    {
        id: "4",
        hour: "1",
        time: "13",
        meridiem: "pm",
        textevent: ""
    },
    {
        id: "5",
        hour: "2",
        time: "14",
        meridiem: "pm",
        textevent: ""
    },
    {
        id: "6",
        hour: "3",
        time: "15",
        meridiem: "pm",
        textevent: ""
    },
    {
        id: "7",
        hour: "4",
        time: "16",
        meridiem: "pm",
        textevent: ""
    },
    {
        id: "8",
        hour: "5",
        time: "17",
        meridiem: "pm",
        textevent: ""
    },
    
]

// Displays current date in the header 
function titleDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

// Loads current date in the header
titleDate();


// Creates and append the visual aspects of the planner
dayArray.forEach(function(hourDiv) {
    // Time block rows
    var timeRow = 
    
    $("<form>").attr({
        "class": "row"
    });
    $(".container").append(timeRow);

    // Time spots
    var hourSpot = 
    
    $("<div>")
        .text(`${hourDiv.hour}${hourDiv.meridiem}`)
        .attr({
            "class": "col-md-1 hour"
    });

    // Text area where the user is going to add data
    var textDiv = $("<div>")
        .attr({
            "class": "col-md-8 description"
        });
    var textArea = $("<textarea>");
    textDiv.append(textArea);
    textArea.attr("id", hourDiv.id);
    
    if (hourDiv.time < moment().format("HH")) {
        textArea.attr ({
            "class": "past", 
        })
    } else if (hourDiv.time === moment().format("HH")) {
        textArea.attr({
            "class": "present"
        })
    } else if (hourDiv.time > moment().format("HH")) {
        textArea.attr({
            "class": "future"
        })
    }

    // Save button
    var saveBtn = $("<i class='far fa-save fa-lg'></i>")
    var saveEvent = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    saveEvent.append(saveBtn);
    timeRow.append(hourSpot, textDiv, saveEvent);
})

// Saves the data to be stored in the local storage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children().css(".present", ".past", "future").attr("id");
    dayArray[saveIndex].textevent = $(this).siblings(".description").children().css(".present", ".past", "future").val();
    
    console.log(dayArray[saveIndex].textevent);
    saveEvents();
    displayEvents();
})

// Local storage
function saveEvents() {
    localStorage.setItem("dayArray", JSON.stringify(dayArray));
}

// Sets the data entered, links its value to its id
function displayEvents() {
    dayArray.forEach(function (eventDisplay) {
        $(`#${eventDisplay.id}`).val(eventDisplay.textevent);
    })
}

// Sets any data saved in the local storage to be displayed
function initialPage() {
    var recordedDay = JSON.parse(localStorage.getItem("dayArray"));

    if (recordedDay) {
        dayArray = recordedDay;
    }

    saveEvents();
    displayEvents();
}

// Loads existing local storage data
initialPage();