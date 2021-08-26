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
var pastTime = moment().subtract(1, "seconds")

var pastDue = function () {
    if (pastTime) {
        $("#task-item-1").addClass("bg-secondary text-white")
    }
}

var soonDue = moment().format('dddd, MMMM Do');
var upcoming = moment().format('dddd, MMMM Do');

$(document).ready(function () {
    $("*[data-store]").each(function () {
        $(this).val(localStorage.getItem("item-" + $(this).attr("data-store")));
    });

    $("*[data-store]").on("keyup", function (itm) {
        localStorage.setItem("item-" + $(this).attr("data-store"), $(this).val());
    })
})

pastDue()

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

