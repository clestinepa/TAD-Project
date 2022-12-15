var allCities = []
var listResult = []
var dataFlights = []
var dataCompanies = []

async function getData() {
    const requestURLCities = 'https://raw.githubusercontent.com/clestinepa/TAD-Project/main/static/data/city.json'
    const requestCities = new Request(requestURLCities)
    const responseCities = await fetch(requestCities)
    const dataCities = await responseCities.json()
    allCities = dataCities.cities

    // const requestURLFlights = '../static/data/data.json'
    // const requestFlights = new Request(requestURLFlights)
    // const responseFlights = await fetch(requestFlights)
    // dataFlights = await responseFlights.json()

    const requestURLFlights = '../static/data/dataCROPEDTOWORK.json'
    const requestFlights = new Request(requestURLFlights)
    const responseFlights = await fetch(requestFlights)
    dataFlights = await responseFlights.json()

    const requestURLCompanies = 'https://raw.githubusercontent.com/clestinepa/TAD-Project/main/static/data/airport.json'
    const requestCompanies = new Request(requestURLCompanies)
    const responseCompanies = await fetch(requestCompanies)
    dataCompanies = await responseCompanies.json()

    areaUser.style.display = 'flex'

    intializeSelection()
}

const areaUser = document.getElementById("areaUser")

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