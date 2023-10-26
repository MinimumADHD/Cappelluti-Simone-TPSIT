// Cappelluti Simone 4Di

let submitNumButton = document.getElementById("submitNumButton");
let inputNumOne = document.getElementById("numInput_one");
let inputNumTwo = document.getElementById("numInput_two");
let resultLabel = document.getElementById("resultLabel");

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

// Calc AND
function calcAND(numParamOne, numParamTwo) {
    let returnable = [];
    let binNumOne = convertIntToSeqArray(convertNumberToBin(numParamOne));
    let binNumTwo = convertIntToSeqArray(convertNumberToBin(numParamTwo));

    for (let i = 0; i < binNumOne.length; i++) {
        returnable.push(binNumOne.at(i) && binNumTwo.at(i));
    }

    return returnable;
}

// Calc OR
function calcOR(numParamOne, numParamTwo) {
    let returnable = [];
    let binNumOne = convertIntToSeqArray(convertNumberToBin(numParamOne));
    let binNumTwo = convertIntToSeqArray(convertNumberToBin(numParamTwo));

    for (let i = 0; i < binNumOne.length; i++) {
        returnable.push(binNumOne.at(i) || binNumTwo.at(i));
    }

    return returnable;
}

// Calc XOR
function calcXOR(numParamOne, numParamTwo) {
    let returnable = [];
    let binNumOne = convertIntToSeqArray(convertNumberToBin(numParamOne));
    let binNumTwo = convertIntToSeqArray(convertNumberToBin(numParamTwo));

    for (let i = 0; i < binNumOne.length; i++) {
        returnable.push(binNumOne.at(i) ^ binNumTwo.at(i));
    }

    return returnable;
}

function onSubmit() {
    let NumOne = inputNumOne.value
    let NumTwo = inputNumTwo.value

    let andVal = calcAND(NumOne, NumTwo);
    let orVal = calcOR(NumOne, NumTwo);
    let xorVal = calcXOR(NumOne, NumTwo);

    resultLabel.innerHTML = `RISULTATI: \n AND; ${andVal}\n OR; ${orVal}\n XOR; ${xorVal}`
}

console.log(convertIntToSeqArray(convertNumberToBin(14)));

submitNumButton.onclick = () => onSubmit();
