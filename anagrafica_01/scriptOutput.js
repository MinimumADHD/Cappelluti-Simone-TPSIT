let datiInInput = JSON.parse(localStorage.getItem("anagraficaStorage"));
let nameParagraph = document.getElementById("nameParagraph")
let lastNameParagraph = document.getElementById("lastNameParagraph")
let genderParagraph = document.getElementById("genderParagraph")
let ageParagraph = document.getElementById("ageParagraph")
let birthDay = document.getElementById("birthDay")
let placeOfBirth = document.getElementById("placeOfBirth")

if (datiInInput) {
    for (let [key, value] of Object.entries(datiInInput)) {
        // console.log(key + "" + value)
        // Use 'key' and 'value' as needed
        if (key === "0") {
            nameParagraph.innerHTML = value
        } else if (key === "1") {
            lastNameParagraph.innerHTML = value
        } else if (key === "2") {
            genderParagraph.innerHTML = value
        } else if (key === "3") {
            ageParagraph.innerHTML = value
        } else if (key === "4") {
            birthDay.innerHTML = value
        } else {
            placeOfBirth.innerHTML = value
        }
    }
    localStorage.clear();
} else {
    console.error("NO DATA FOUND FROM THE PREVIOUS PAGE... DID YOU DO EVERYTHING CORRECTLY?");
}
