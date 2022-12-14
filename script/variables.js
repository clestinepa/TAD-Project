var allCities = []
var listResult = [{
    dep: "09:00",
    arr: "12:00",
    company: "Osijek Airlines",
    nbFlight: "56302634",
    delay: 0
},
{
    dep: "14:15",
    arr: "17:30",
    company: "USA AirLines",
    nbFlight: "91236338",
    delay: 2
}]

async function getData() {
    const requestURLCities = 'https://raw.githubusercontent.com/clestinepa/TAD-Project/main/static/data/city.json';
    const requestCities = new Request(requestURLCities);
    const responseCities = await fetch(requestCities);
    const dataCities = await responseCities.json();

    const requestURLFlights = '../static/data/data.json';
    const requestFlights = new Request(requestURLFlights);
    const responseFlights = await fetch(requestFlights);
    const dataFlights = await responseFlights.json();

    allCities = dataCities.cities
    

    intializeSelection()
}

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
    origin: "",
    dest: "",
    date: ""
}

getData()