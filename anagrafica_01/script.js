// Simone Cappelluti
// Code is Open Source, as its just a school assignment. Do whatever you want not like i really care, i code games 💀;

let confirmButton = document.getElementById('confirmButton');
let nameInput = document.getElementById('nameInput');
let poo = document.getElementById('poo');

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

function printOnLoad() {
    console.log("JS WORKING...");
}

confirmButton.addEventListener('click', function () {
    uploadDataToStorage(nameInput.value, poo.value);
});
