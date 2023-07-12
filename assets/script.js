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
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


//First
// Connect current date to dayjs to display in header
//var currentDate = $('currentDay');
//$('#currentDay').text(today.format('MMM D, YYYY'));

var today = dayjs().format('ddd, MMM D, YYYY');
$('#currentDay').text(today);

//Second
// Add additional time blocks to HTML

//Third
// Color code time blocks to indicate Past / Present / Future
   // Detect past / present / future

var now = dayjs().format('H'); // = 18 
   console.log(now);

// var past;
// var present;
// var future;
// var timeBlock = $('.row time-block')
//assign each time block a value to compare to now

// I selected all the time blocks using a class. I then used this.
function blockColor() {
   $('.time-block').each(function(){
      var hour = parseInt(this.id);
      $(this).toggleClass('past', hour < now);
      $(this).toggleClass('present', hour === now);
      $(this).toggleClass('future', hour > now);
   })
}
blockColor()

// Fourth
// Click the time-block, be able to input information
// When I click the save button - text is saved in local storage 
// Event Listener on Save Button to save the info to Local Storage


function saveOnClick() {
   $(".saveBtn").on("click", function() {
      var key = $(this).parent().attr('id');
      var inputValue = $(this).siblings('.description').val();
      localStorage.setItem(key, inputValue);
      $('.description').innerHTML=localStorage.getItem(key);
   })
}
saveOnClick();

// This.Parent - we grab the id # just like we did for the previous function blockColor. 

//Fifth 
// When we refresh the page, then the saved events persist.
// function persist() {
//    var item = localStorage.getItem(key);
//    var storedItem = $('.description')
//    storedItem.textContent = item;
//    storedItem.innerHTML = item;
// 

var textarea = $('.time-block').children[2]
console.log(textarea);

function persist(){
   textarea.innerHTML = localStorage.getItem(key);
}
persist;