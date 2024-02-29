let inputDiv = document.getElementsByClassName("inputDiv")[0];
let addDiv = document.getElementsByClassName("addZone")[0];

function genInput(divClass) {
    let inputContainer = document.createElement('div');
    let inputType = document.createElement('input');
    inputType.type = "text";
    inputType.classList.add("inputClassList");
    inputType.value = "";
    inputType.placeholder = "Inserire nome del prodotto"
    inputContainer.appendChild(inputType);

    let inputTypeNumber = document.createElement("input")
    inputTypeNumber.type = "number"
    inputTypeNumber.classList.add("inputClassNumber")
    inputTypeNumber.placeholder = "Prezzo"
    inputContainer.appendChild(inputTypeNumber)

    let inputTypeQuantity = document.createElement("input")
    inputTypeQuantity.type = "number"
    inputTypeQuantity.classList.add("inputClassQuantity")
    inputTypeQuantity.placeholder = "Quantità"
    inputContainer.appendChild(inputTypeQuantity)

    if (document.getElementsByClassName("inputClassList").length > 0) {
        let inputRemove = document.createElement('input');
        inputRemove.type = "button";
        inputRemove.value = "Rimuovi";
        inputRemove.classList = "removeButton"
        inputRemove.addEventListener("click", function () {
            divClass.removeChild(inputContainer);
        });
        inputContainer.appendChild(inputRemove);
    }

    divClass.appendChild(inputContainer);
}

function genHeader() {
    let headerDiv = document.getElementsByClassName("header")[0]

    let headerName = document.createElement("h1");
    let returnToIndex = document.createElement("a")
    let programmerName = document.createElement("h3")

    headerName.innerHTML = "Lista spesa - EXCEL"
    returnToIndex.href = "../index.html"
    returnToIndex.innerHTML = "Ritorna a Index."
    programmerName.innerHTML = "Cappelluti Simone"

    headerDiv.appendChild(headerName)
    headerDiv.appendChild(returnToIndex)
    headerDiv.appendChild(programmerName)
}

function onConfirmClicked() {
    let productsInput = document.getElementsByClassName("inputClassList");
    let priceInputs = document.getElementsByClassName("inputClassNumber");
    let quantityInputs = document.getElementsByClassName("inputClassQuantity");

    let productsArray = [];
    let pricesArray = [];
    let quantitiesArray = [];

    for (let index = 0; index < productsInput.length; index++) {
        productsArray.push(productsInput[index].value);
        pricesArray.push(priceInputs[index].value);
        quantitiesArray.push(quantityInputs[index].value);
    }

    if (productsArray.length > 0) {
        localStorage.setItem("productsArray", JSON.stringify(productsArray));
        localStorage.setItem("pricesArray", JSON.stringify(pricesArray));
        localStorage.setItem("quantitiesArray", JSON.stringify(quantitiesArray));
        window.location.href = "table_page.html";
    } else {
        alert("Please add at least one product before confirming.");
    }
}


function genAddButton() {
    let inputButton = document.createElement('input');
    inputButton.type = "button";
    inputButton.value = "Aggiungi";
    inputButton.id = "addButton"
    inputButton.addEventListener("click", function () {
        genInput(inputDiv);
    });
    addDiv.appendChild(inputButton);

    let confirmButton = document.createElement('input');
    confirmButton.type = "button";
    confirmButton.value = "Conferma";
    confirmButton.id = "confirmButton"
    confirmButton.addEventListener("click", function() {
        onConfirmClicked();
    })

    addDiv.appendChild(confirmButton);
}

function onPageLoad() {
    genInput(inputDiv)
    genAddButton()
    genHeader()
}

onPageLoad();
