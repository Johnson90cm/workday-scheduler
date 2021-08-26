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

var urgencyHandler = function () {
    if (currentTime.hour() < moment().add(2, "hours")) {
        $(".time-list-item").addClass("bg-secondary text-white")
    }
}

var currentDue = function () { }

var upcoming = function () { }


$("#save-button-1").on("click", function (itm) {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-1").val());
})

$("#save-button-2").on("click", function (itm) {
    localStorage.setItem("item-" + $(this).attr("data-store"), $("#task-item-2").val());
})

$("#task-item-1").val(localStorage.getItem("item-1"));
$("#task-item-2").val(localStorage.getItem("item-2"));


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

