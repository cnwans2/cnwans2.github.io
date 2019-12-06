$(document).ready(function () {
    $(".saveButton").on("click", function () {
        var value = $(this).siblings(".description").val()
        var time = $(this).parent().attr("id")

        localStorage.setItem(value, time)

    })
    function hours() {
        var currentHours = moment().hours
        $(".timeBlock").each(function () {
            var blockHour = parseInt($(this).attr("id").split("-")[1]);

            if (blockHour < currentHours) {
                $(this).addClass("past")
            }

            else if (blockHour === currentHours) {
                $(this).removeClass("past")
                $(this).addClass("present")

            }

            else {
                $(this).removeClass("past")
                $(this).removeClass("present")
                $(this).addClass("future")
            }
        })
    }

    hours();

    var interval = setInterval(hours, 15000) 
    $("#hour-9 .description").val(localStorage.getItem("hour-9"))
    var interval = setInternal(hours, 15000)
    $("hour-10. description"). val(localStorage.getItem("hour-10"))

    //repeat until hour 17 

//moment js
    $("#currentDay").text(moment().format("dddd, MMMM Do"))



})