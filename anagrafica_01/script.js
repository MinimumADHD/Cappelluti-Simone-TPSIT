// Simone Cappelluti
// Code is Open Source, as its just a school assignment. Do whatever you want not like i really care, i code games 💀;

let confirmButton = document.getElementById('confirmButton');
let selectOptions = document.getElementById('locationInput');

let nameInput = document.getElementById("nameInput");
let lastNameInput = document.getElementById("lastNameInput");
let birthdayInput = document.getElementById("birthdayInput");
let genderInput = document.getElementById("genderForm");

// Function made to memo my sjhat
function uploadDataToStorage(keyName, ...options) {
    // i declared an empty array because why not?
    let tempData = {}
    for (let i = 0; i < options.length; i++) {
        // filling the array (in the most unoptimal way possible)
        tempData.push(toString(options[i]));
    }
    // i dont even know why i would need to set the name as a string but ill let whoever made JavaScript decide (idiot)
    localStorage.setItem(keyName, JSON.stringify(tempData));
}

// JUST SOME OLD CODE I COPIED FROM MY OLD anagraphics/script.js FOLDER...
function fetchExtData(url) {
    return fetch(url)
        .then(response => response.json())
        .catch(error => console.error(`Error fetching data from ${url}:`, error));
}

function populateSelectWithJSON(url_json, select_element) {
    fetchExtData(url_json)
        .then(data => {
            for (let region in data) {
                if (data.hasOwnProperty(region)) {
                    let optgroup = document.createElement('optgroup');
                    optgroup.label = region;

                    data[region].forEach(city => {
                        let option = document.createElement("option");
                        option.value = city;
                        option.textContent = city;
                        optgroup.appendChild(option);
                    });

                    select_element.appendChild(optgroup);
                }
            }
        });
}

function onHTMLLoad() {
    populateSelectWithJSON("https://raw.githubusercontent.com/MinimumADHD/Cappelluti-Simone-TPSIT/main/cities.json", selectOptions);
}

function getGender(genderForm) {
    let selected = genderForm.querySelector('input[name="gender"]:checked');

    return selected.value;
}
// END OF OLD CODE

onHTMLLoad()

confirmButton.addEventListener('click', function () {
    let nameInputVal = nameInput.value;
    let lastNameInputVal = lastNameInput.value;

    uploadDataToStorage("anagraficaStorage", nameInputVal, lastNameInputVal, );
});
