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
    console.log(originChoice.value, destChoice.value, dateChoice.value)
}

function affDelay(delay) {
    switch (delay) {
        case 0: return "no delay"
        case 1: return "0-15 min"
        case 2: return "15-30 min"
        case 3: return "30-45 min"
        case 4: return "45-60 min"
        case 5: return "60-75 min"
        case 6: return "75-90 min"
        case 7: return "90-105 min"
        case 8: return "105-120 min"
        case 9: return "120-135 min"
        case 10: return "135-150 min"
        case 11: return "150-165 min"
        case 12: return "165-180 min"
        case 13: return "+180 min"
    }
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
    p.textContent = flight.company
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
    //filtre data avec selection
    //recupére time, company, nbflight de tout les vols (delay null)
    //les ajouter dans le tableau result

    //fait notre programme magique
    //rajouter delay à chaque flight

    listResultDiv.replaceChildren()
    for (var flight of listResult) {
        listResultDiv.appendChild(createLigne(flight))
    }
}