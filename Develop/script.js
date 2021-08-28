// header
var currentDateEl = document.querySelector("#currentDay")
var createHeaderDate = document.createElement("h2")
var todaysDate = moment().format('dddd, MMMM Do');
createHeaderDate.innerHTML = todaysDate
currentDateEl.appendChild(createHeaderDate)

// body
var currentHour = moment().hour();
var previousTime = moment().subtract(1, "seconds")
var futureTime = moment().add(1, "seconds")


var timeHandler = function () {

    $(".time-list-item").each(function () {
        var elementHour = parseInt($(this).attr("id"));

        if (elementHour < currentHour) {
            $(this).removeClass(["present"], ["future"]).addClass("past")
        } else if (elementHour === currentHour) {
            $(this).removeClass(["past", "future"]).addClass("present");
        } else {
            $(this).removeClass(["past", "present"]).addClass("future");        
        }
    })
}

// save buttons
$("#save-button-1").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#09").val());
})
$("#save-button-2").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#10").val());
})
$("#save-button-3").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#11").val());
})
$("#save-button-4").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#12").val());
})
$("#save-button-5").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#13").val());
})
$("#save-button-6").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#14").val());
})
$("#save-button-7").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#15").val());
})
$("#save-button-8").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#16").val());
})
$("#save-button-9").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#17").val());
})

// task loads
$("#09").val(localStorage.getItem("item-1"));
$("#10").val(localStorage.getItem("item-2"));
$("#11").val(localStorage.getItem("item-3"));
$("#12").val(localStorage.getItem("item-4"));
$("#13").val(localStorage.getItem("item-5"));
$("#14").val(localStorage.getItem("item-6"));
$("#15").val(localStorage.getItem("item-7"));
$("#16").val(localStorage.getItem("item-8"));
$("#17").val(localStorage.getItem("item-9"));



timeHandler()