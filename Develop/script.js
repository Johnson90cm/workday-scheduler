// header vars
var currentDateEl = document.querySelector("#currentDay")
var createHeaderDate = document.createElement("h2")
var todaysDate = moment().format('dddd, MMMM Do');

// header date
createHeaderDate.innerHTML = todaysDate
currentDateEl.appendChild(createHeaderDate)

// body vars


// body 