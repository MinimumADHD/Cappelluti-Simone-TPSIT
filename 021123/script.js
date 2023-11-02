// let selectOptions = document.getElementById("locationInput");

function fetchExtData (url) {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            return data;
        })
        .catch(error => console.error(`Error searching Italian cities. Check link ${url}...`))
        return 1;
}

function onHTMLLoad () {
    
}

let json = fetchExtData("giagia");

onHTMLLoad();