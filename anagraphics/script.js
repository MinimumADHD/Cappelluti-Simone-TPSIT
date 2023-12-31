let selectOptions = document.getElementById("locationInput");
let confirmButton = document.getElementById("confirmButton");
let headerToChange = document.getElementById("headerToChange");

let nameInput = document.getElementById("nameInput");
let lastNameInput = document.getElementById("lastNameInput");
let birthdayInput = document.getElementById("birthdayInput");
let genderInput = document.getElementById("genderForm");

function calcAge(birthday) {
    let tDay = new Date();
    let birthDate = new Date(birthday);

    let age = tDay.getFullYear() - birthDate.getFullYear();

    if (tDay.getMonth() < birthDate.getMonth() || (tDay.getMonth() === birthDate.getMonth() && tDay.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

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

function onHTMLLoad (guh) {
    populateSelectWithJSON("https://raw.githubusercontent.com/MinimumADHD/Cappelluti-Simone-TPSIT/main/cities.json", selectOptions);
}

function getGender(genderForm) {
    let selected = genderForm.querySelector('input[name="gender"]:checked');

    return selected.value;
}

function onConfirmClick() {
    headerToChange.innerHTML = `RISULTATO: ${lastNameInput.value} ${nameInput.value}, ${calcAge(birthdayInput.value)} anni, nato il ${birthdayInput.value}, residente a ${selectOptions.value}, Sesso: ${getGender(genderInput)}`;
}

onHTMLLoad()

confirmButton.onclick = () => onConfirmClick();
