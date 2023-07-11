// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

//1. $(".saveBtn").on('click', function=> {
     //console.log $(this); to check what current 'this' is. when using "this" in jquery, do $()
     //figure out what hour block you are in by using $(this)
     //key needs to match the same keynames for getItem localStorage(i)
     //setItem for localStorage to save the input to the corresponding hour
     //only save for the hour block we are in. that hour, and that hour only.
//})


//First
// TODO: Add code to apply the past, present, or future class to each time
// block by comparing the id to the current hour. HINTS: How can the id
// attribute of each time-block be used to conditionally add or remove the
// past, present, and future classes? How can Day.js be used to get the
// current hour in 24-hour time?

//Steps
     // 1. Also can use doc.querySelectorAll.classname 
          //Alternatives that students use jquery.children to select all "i" from html. You can also select i from the for loop. 
     // 2. use dayjs() to grab current time (current hour)
     // 3. use for loop for the time blocks
     //inside the for loop select the time block
          for (i=9; i < .length; i++)
          document.querySelector("#hour-"+i)
          //a. use if statement to compare the current hour to whatever block we are on (compare current on to 9am block)
          //b. if the current hour is less than time block, apply the class of past, present, or future to each block
          //c. if, the current hour is equal to time, block apply present class
          //d. else the current hour is greater than time block, apply past class.

     //4. remove past, present, and future class in html and append the correct class
     //5. can use setInterval to create auto refresh


//Second
// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?
      
// 1. getItem for localStorage to pull
     // a. separate key in localStorage for each hour block
     // b. keep repeating sounds like a "for loop" from hour 9-18. 
          // check localStorage within the loop
          // if there is storage display the items inside the text area
          // else we don't find something, no content, so else not necessary...
               //extra credit - auto update after x minutes pass

//Third
// TODO: Add code to display the current date in the header of the page.
     //1. create var for dayjs to get current date (and time maybe)
     //2. $("#currentDay").text(var)
});
