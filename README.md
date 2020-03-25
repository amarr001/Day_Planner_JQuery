# Day_Planner_JQuery

An Array was created containing information to be shown and stored in the timeblocks. The array was inside a variable called dayArray. Using the moment.js library a function was created to get the current date and display in the header, so everytime the user opens the page the date will be updated to the current date. 

Using the forEach method and louping through the array, the timeblock rows and other scheduler visuals (textarea, save button) were created and appended to the main div. 

Local Storage: functions were created in order to save, display and load existing data. 
saveEvents(); - Saves any data, entered by the user in the form of a string, to the local storage.
displayEvents(); - Sets the data entered and links it to its id.
init(); - Sets any data saved in the local storage to be displayed if it exists

Save Buttons: a click method was applied to the save button in order to save data entered in the local storage. 




