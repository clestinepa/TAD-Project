document.getElementById("OK").onclick = function() {
    if (originChoice.value == "" || destChoice.value == "" || dateChoice.value == ""){
        document.getElementById("errorMsg").style.display = "block"
    } else {
        if (selection.origin == "") { //première recherche
            document.getElementById("waitResearch").style.display = "none"
            resultDiv.style.display = "flex"
        }
        document.getElementById("errorMsg").style.display = "none"
        selection.origin = originChoice.value
        selection.dest = destChoice.value
        selection.date = dateChoice.value

        affResult()
    }
}

function affDelay(delay) {
    switch (delay) {
        case 0: return "no delay"
        case 1: return "15-30 min"
        case 2: return "30-45 min"
        case 3: return "45-60 min"
        case 4: return "60-75 min"
        case 5: return "75-90 min"
        case 6: return "90-105 min"
        case 9: return "105-120 min"
        case 10: return "120-135 min"
        case 11: return "135-150 min"
        case 12: return "150-165 min"
        case 13: return "165-180 min"
        default: return "+180 min"
    }
}

function affCompany(code) {
    const company = dataCompanies.filter(company => company.Code == code)
    return company[0].Description
}

function createLigne(flight) {
    var li = document.createElement("li")
    if (flight.delay == 0) {
        li.classList.add("notlate")
    } else {
        li.classList.add("late")
    }

    var p = document.createElement("p")
    p.textContent = flight.dep + " - " + flight.arr
    p.classList.add("time")
    li.appendChild(p)

    p = document.createElement("p")
    p.textContent = affCompany(flight.company)
    p.classList.add("company")
    li.appendChild(p)

    p = document.createElement("p")
    p.textContent = flight.nbFlight
    p.classList.add("flight")
    li.appendChild(p)

    p = document.createElement("p")
    var span = document.createElement("span")
    span.classList.add("iconDelay")
    p.appendChild(span)
    span = document.createElement("span")
    span.classList.add("valueDelay")
    span.textContent = affDelay(flight.delay)
    p.appendChild(span)
    p.classList.add("delay")
    li.appendChild(p)

    return li
}

function affResult() {
    var flights = filterFlights()

    for (let flight of flights) {
        var result = {
            dep: flight.scheduled_departure_dt.substring(11,16),
            arr: flight.scheduled_arrival_dt.substring(11,16),
            company: flight.carrier_code,
            nbFlight: flight.flight_number,
            delay: flight.delay_class
        }
        listResult.push(result)
    }

    listResultDiv.replaceChildren()
    for (var flight of listResult) {
        listResultDiv.appendChild(createLigne(flight))
    }
}

function filterFlights() {
    var dateSelected = selection.date.split("-").map(x=>+x)    
    var originCodes = getAirportCodeFromCity(selection.origin)
    var destCodes = getAirportCodeFromCity(selection.dest)


    var flights = dataFlights.filter(flight => (flight.year == dateSelected[0]
                                                && flight.month == dateSelected[1]
                                                && flight.day == dateSelected[2])
                                                && originCodes.includes(flight.origin_airport)
                                                && destCodes.includes(flight.destination_airport))

    return flights
}

function getAirportCodeFromCity(city) {
    var codes = []

    var airports = dataAirports.filter(airport => airport.Description.includes(city) )
    for (let airport of airports) {
        codes.push(airport.Code)
    }

    return codes
}