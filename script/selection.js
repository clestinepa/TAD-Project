async function intializeSelection() {
    initializeAllCities()
    affList()
    addSelectList()
    filterOnText()
    closeList()
}

function initializeAllCities() {
    for (let city of allCities) {
        var option = document.createElement('option')
        option.value = city
        option.textContent = city
        citysOrigin.appendChild(option)
        citysDest.appendChild(option.cloneNode(true))
    }
}

function affList() {
    originChoice.onfocus = function (e) {
        citysOrigin.style.display = 'block';
        for (let option of citysOrigin.options) {
            if (option.value == destChoice.value) {
                option.style.display = "none";
            } else {
                option.style.display = "block";
            }
        };
        originChoice.style.borderRadius = "0.5vw 0.5vw 0 0";
    };
    destChoice.onfocus = function () {
        citysDest.style.display = 'block';
        for (let option of citysDest.options) {
            if (option.value == originChoice.value) {
                option.style.display = "none";
            } else {
                option.style.display = "block";
            }
        };
        destChoice.style.borderRadius = "0.5vw 0.5vw 0 0";
    };
}

function addSelectList() {
    for (let option of citysOrigin.options) {
        option.onclick = function () {
            originChoice.value = option.value;
            citysOrigin.style.display = 'none';
            originChoice.style.borderRadius = "0.5vw";
            selectOrigin = true;
        }
    };
    for (let option of citysDest.options) {
        option.onclick = function () {
            destChoice.value = option.value;
            citysDest.style.display = 'none';
            destChoice.style.borderRadius = "0.5vw";
            selectDest = true;
        }
    };
}


function filterOnText() {
    originChoice.oninput = function () {
        selectOrigin = false;
        var text = originChoice.value.toUpperCase();
        for (let option of citysOrigin.options) {
            if (option.value.toUpperCase().indexOf(text) > -1) {
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        };
    }
    destChoice.oninput = function () {
        selectDest = false;
        var text = destChoice.value.toUpperCase();
        for (let option of citysDest.options) {
            if (option.value.toUpperCase().indexOf(text) > -1) {
                option.style.display = "block";
            } else {
                option.style.display = "none";
            }
        };
    }  
}

function closeList() {
    document.addEventListener('click', (e) => {
        if ( e.target.nodeName == "INPUT" || e.target.nodeName == "OPTION") {
            if (e.target.parentNode.id == "citysDest" || e.target.id == "destChoice") {
                citysOrigin.style.display = 'none';
                originChoice.style.borderRadius = "0.5vw";
                if (!selectOrigin) originChoice.value = ""
            }
            if (e.target.parentNode.id == "citysOrigin" || e.target.id == "originChoice") {
                citysDest.style.display = 'none';
                destChoice.style.borderRadius = "0.5vw";
                if (!selectDest) destChoice.value = ""
            }
        } else {
            citysOrigin.style.display = 'none';
            originChoice.style.borderRadius = "0.5vw";
            if (!selectOrigin) originChoice.value = ""
            citysDest.style.display = 'none';
            destChoice.style.borderRadius = "0.5vw";
            if (!selectDest) destChoice.value = ""
        }
    })
}