let selectOptions = document.getElementById("locationInput");

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
    populateSelectWithJSON("https://raw.githubusercontent.com/MinimumADHD/Cappelluti-Simone-TPSIT/main/cities.json", selectOptions)
}

onHTMLLoad()