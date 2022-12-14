const resultDiv = document.getElementById("result")
const listResultDiv = document.getElementById("listResult")

const originChoice = document.getElementById("originChoice")
const destChoice = document.getElementById("destChoice")
const dateChoice = document.getElementById("dateChoice")

const citysOrigin = document.getElementById("citysOrigin")
const citysDest = document.getElementById("citysDest")

var selectOrigin = false;
var selectDest = false;

const selection = {
    origin:"",
    dest:"",
    date:""
}

var listResult = [
    {
        dep : "09:00",
        arr : "12:00",
        company : "Osijek Airlines",
        nbFlight : "56302634",
        delay : 0
    },
    {
        dep : "14:15",
        arr : "17:30",
        company : "USA AirLines",
        nbFlight : "91236338",
        delay : 2
    }
]