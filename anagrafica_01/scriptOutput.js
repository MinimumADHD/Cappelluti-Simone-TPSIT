let datiInInput = JSON.parse(localStorage.getItem("anagraficaStorage"));
let nameParagraph = document.getElementById("nameParagraph")
let lastNameParagraph = document.getElementById("lastNameParagraph")

if (datiInInput) {
    for (let [key, value] of Object.entries(datiInInput)) {
        console.log(key + "" + value)
        // Use 'key' and 'value' as needed
        if (key === "0") {
            nameParagraph.innerHTML = "NOME RICEVUTO: " + value
        } else if (key == "1") {
            lastNameParagraph.innerHTML = "COGNOME RICEVUTO: " + value
        }
    }
    localStorage.clear();
} else {
    console.error("NO DATA FOUND FROM THE PREVIOUS PAGE... DID YOU DO EVERYTHING CORRECTLY?");
}
