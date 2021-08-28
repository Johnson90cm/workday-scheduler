// header
var currentDateEl = document.querySelector("#currentDay")
var createHeaderDate = document.createElement("h2")
var todaysDate = moment().format('dddd, MMMM Do');
createHeaderDate.innerHTML = todaysDate
currentDateEl.appendChild(createHeaderDate)

// body
var currentTime = moment()
var currentHour = moment().hour()
var previousTime = moment().subtract(1, "seconds")
var laterTime = moment().add(1,"seconds");

var urgencyHandler = function () {
    if (currentTime.isBefore(laterTime)) {
        $("#17").addClass("future")
    } else if (currentTime.isAfter(previousTime)) {
        $(".time-list-item").addClass("past")
    } else  {
        $(".time-list-item").addClass("present")
    }
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

urgencyHandler()

console.log(moment())








// var urgencyHandler = function () {
//     if (moment().isAfter(moment().subtract(1, 'seconds'))) {
//         $(".time-list-item").addClass("bg-secondary text-white")
//     } else {
//         $(".time-list-item").addClass("bg-success text-white")
//     }
// }

// KEEP
// var urgencyHandler = function () {
//     if (currentTime.hour() < moment().add(2, "hours")) {
//         $(".time-list-item").addClass("bg-success text-white")
//     }
// }



  // body 
// loadTasks = function () {
//     tasks = JSON.parse(localStorage.getItem("tasks"))
// }

// saveTasks = function () {
//     localStorage.setItem("tasks", JSON.stringify(tasks)) 
//     alert("you saved your data")
// }

// $("#save-button").on("click", function() {
//  saveTasks()
// })



// split these into two functions // one to save on button click, second to load on page refresh
// $(document).ready(function () {
//     $("*[data-store]").each(function () {
//         $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
//     });

    // $("*[data-store]").on("keyup", function (itm) {
    //     localStorage.setItem("item-" + $(this).attr("data-store"), $(this).val());
    // })
// })


// $("[data-store]").on("click", function (itm) {
//     localStorage.setItem("item-" + $("09").attr("data-store"), $("#09").val());
// })


// $("save-button-1").on("click", function (itm) {
//     localStorage.setItem("item-" + $(this).attr("data-store"), $("09").val());
// })

// $("save-button-2").on("click", function (itm) {
//     localStorage.setItem("item-" + $(this).attr("data-store"), $("10").val());
// })


// $(document).ready(function () {
//     $("*[data-store]").each(function () {
//         $("09").val(localStorage.getItem("09"));
//         $("10").val(localStorage.getItem("item-" + $(this).attr("data-store")));
//     });
// })

