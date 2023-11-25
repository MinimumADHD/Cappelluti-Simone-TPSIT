let DecInput = document.getElementById("numberDecInpt");
let ConvertButton = document.getElementById("convertButton");
let TextToChange = document.getElementById("labToChange");

function validateInputAsInt(inpt) {
    inpt.value = parseInt(inpt.value) || '';
}

function onConvertPress() {
    let DecimalValue = parseInt(DecInput.value);
    let BinVal = DecimalValue.toString(2);
    console.log(BinVal);

    TextToChange.innerHTML = "Binario: "+BinVal;
}

ConvertButton.onclick = () => onConvertPress();

DecInput.oninput = () => validateInputAsInt(DecInput);

