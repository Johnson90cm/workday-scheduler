// tasks
var tasks = {}

// header vars
var currentDateEl = document.querySelector("#currentDay")
var createHeaderDate = document.createElement("h2")
var todaysDate = moment().format('dddd, MMMM Do');

// header date
createHeaderDate.innerHTML = todaysDate
currentDateEl.appendChild(createHeaderDate)

// body vars
var currentTime = moment()
var previousTime = moment().subtract(1, "seconds")
var currentHour = moment().hour('07:00', 'HH:mm')
var laterTime = moment("17:00", 'HH:mm');

var urgencyHandler = function () {
    if (currentTime.isBefore(laterTime)) {
        $(".time-list-item").addClass("bg-success text-white")
    } else if (currentTime.isAfter(previousTime)) {
        $(".time-list-item").addClass("bg-secondary text-white")
    } else if (currentHour) {
        $(".time-list-item").addClass("bg-danger text-white")
    }
}

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

var currentDue = function () { }

var upcoming = function () { }

// save buttons
$("#save-button-1").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-1").val());
})
$("#save-button-2").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-2").val());
})
$("#save-button-3").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-3").val());
})
$("#save-button-4").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-4").val());
})
$("#save-button-5").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-5").val());
})
$("#save-button-6").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-6").val());
})
$("#save-button-7").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-7").val());
})
$("#save-button-8").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-8").val());
})
$("#save-button-9").on("click", function () {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-9").val());
})

// task loads
$("#task-item-1").val(localStorage.getItem("item-1"));
$("#task-item-2").val(localStorage.getItem("item-2"));
$("#task-item-3").val(localStorage.getItem("item-3"));
$("#task-item-4").val(localStorage.getItem("item-4"));
$("#task-item-5").val(localStorage.getItem("item-5"));
$("#task-item-6").val(localStorage.getItem("item-6"));
$("#task-item-7").val(localStorage.getItem("item-7"));
$("#task-item-8").val(localStorage.getItem("item-8"));
$("#task-item-9").val(localStorage.getItem("item-9"));

urgencyHandler()

console.log(moment().add(2, "hours"))












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
//     localStorage.setItem("item-" + $("task-item-1").attr("data-store"), $("#task-item-1").val());
// })


// $("save-button-1").on("click", function (itm) {
//     localStorage.setItem("item-" + $(this).attr("data-store"), $("task-item-1").val());
// })

// $("save-button-2").on("click", function (itm) {
//     localStorage.setItem("item-" + $(this).attr("data-store"), $("task-item-2").val());
// })


// $(document).ready(function () {
//     $("*[data-store]").each(function () {
//         $("task-item-1").val(localStorage.getItem("task-item-1"));
//         $("task-item-2").val(localStorage.getItem("item-" + $(this).attr("data-store")));
//     });
// })

