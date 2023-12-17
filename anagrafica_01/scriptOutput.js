let datiInInput = JSON.parse(localStorage.getItem("anagraficaStorage"));
let testParagraph = document.getElementById("testParagraph");

if (datiInInput) {
    for (let key in datiInInput) {
        if (datiInInput.hasOwnProperty(key)) {
            testParagraph.innerHTML += " " + datiInInput[key];
        }
    }
    localStorage.clear();
} else {
    console.error("NO DATA FOUND FROM THE PREVIOUS PAGE... DID YOU DO EVERYTHING CORRECTLY?");
    localStorage.clear()
}
