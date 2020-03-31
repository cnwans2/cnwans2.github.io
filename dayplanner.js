$(document).ready(function() {
    // This is an onclick for my class of clickfunction
    $(".clickfunction").on("click", function() {
      // getting the values of the parent and the sliblings elements
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // saves the time and local varibles in local storage
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      // using moment to get the current hour
      var currentHour = moment().hours();
  
      // for-each loop for the class of time block
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        // this if statment is to check if we moved passed a current time 
        if (blockHour < currentHour) {
          $(this).addClass("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass("past");
          $(this).removeClass("present");
          $(this).addClass("future");
        }
      });
    }
  
    hourUpdater();
  
    // setting up an interval with our hour updater inside.
    var interval = setInterval(hourUpdater, 15000);
  
    // loading all hour data from local storage.
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
  
    // currentday is displayed on the screen in this format.
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
  