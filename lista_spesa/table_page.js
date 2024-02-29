let storedProductsArr = localStorage.getItem("productsArray");
let storedPricesArr = localStorage.getItem("pricesArray");
let storedQuantitiesArr = localStorage.getItem("quantitiesArray");

if (storedProductsArr !== null && storedPricesArr !== null && storedQuantitiesArr !== null) {
    storedProductsArr = JSON.parse(storedProductsArr);
    storedPricesArr = JSON.parse(storedPricesArr);
    storedQuantitiesArr = JSON.parse(storedQuantitiesArr);

    for (let index = 0; index < storedProductsArr.length; index++) {
        console.log(
            "Product: " + storedProductsArr[index] + 
            "; Price: " + storedPricesArr[index] + 
            "; Quantity: " + storedQuantitiesArr[index]
        );
    }
} else {
    console.log("No stored products found.");
}

// Delay or remove the following line if you want to work with the retrieved data first
localStorage.clear();

function genHeader() {
    let headerDiv = document.createElement("div")
    headerDiv.classList = "header"
    document.body.appendChild(headerDiv)

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

function onPageLoad() {
    genHeader()
}

onPageLoad()