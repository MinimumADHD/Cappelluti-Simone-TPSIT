// Cappelluti Simone 4Di

// Converting any given int (for example I used 14 (01110) for testing) into its octal binary relative
function convertNumberToBin(numberToConvert) {
    let binRapresentationAsString = "";
    while (numberToConvert > 0) {
        binRapresentationAsString = (numberToConvert % 2) + binRapresentationAsString;
        numberToConvert = Math.floor(numberToConvert / 2);
    }
    while (binRapresentationAsString.length < 0) {
        binRapresentationAsString = "0" + binRapresentationAsString;
    }

    return parseInt(binRapresentationAsString);
}

// Converting any inputted int into an int array (each character of that int turns into a singular cell of the array)
function convertIntToSeqArray(intToConvert) {
    let returnable = [];
    let locBinString = intToConvert.toString();
    for (let i = 0; i < locBinString.length; i++) {
        returnable.push(parseInt(locBinString.at(i)));
    }

    return returnable;
}

console.log(convertIntToSeqArray(convertNumberToBin(14)));