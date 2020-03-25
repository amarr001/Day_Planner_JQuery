
var dayArray = [
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

// gets data for the header date
function titleDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $("#currentDay").text(currentDate);
}

// saves data to localStorage
function saveEvents() {
    localStorage.setItem("dayArray", JSON.stringify(dayArray));
}

// sets any data in localStorage to the view
function displayEvents() {
    dayArray.forEach(function (eventDisplay) {
        $(`#${eventDisplay.id}`).val(eventDisplay.textevent);
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

// loads header date
titleDate();

// creates the visuals for the scheduler body
dayArray.forEach(function(hourDiv) {
    // creates timeblocks row
    var timeRow = $("<form>").attr({
        "class": "row"
    });
    $(".container").append(timeRow);

    // creates time field
    var hourSpot = $("<div>")
        .text(`${hourDiv.hour}${hourDiv.meridiem}`)
        .attr({
            "class": "col-md-2 hour"
    });

    // creates schdeduler data
    var textDiv = $("<div>")
        .attr({
            "class": "col-md-9 description p-0"
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

    // creates save button
    var saveBtn = $("<i class='far fa-save fa-lg'></i>")
    var saveEvent = $("<button>")
        .attr({
            "class": "col-md-1 saveBtn"
    });
    saveEvent.append(saveBtn);
    timeRow.append(hourSpot, textDiv, saveEvent);
})

// loads any existing localstorage data after components created
init();


// saves data to be used in localStorage
$(".saveBtn").on("click", function(event) {
    event.preventDefault();
    var saveIndex = $(this).siblings(".description").children(".future").attr("id");
    dayArray[saveIndex].textevent = $(this).siblings(".description").children(".future").val();
    console.log(saveIndex);
    console.log(dayArray[saveIndex].textevent);
    saveEvents();
    displayEvents();
})