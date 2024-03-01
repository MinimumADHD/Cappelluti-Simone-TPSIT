function genHeader() {
    let headerDiv = document.createElement("div");
    headerDiv.classList.add("header");

    let headerName = document.createElement("h1");
    headerName.textContent = "Lista spesa - EXCEL";

    let returnToIndex = document.createElement("a");
    returnToIndex.href = "../index.html";
    returnToIndex.textContent = "Ritorna a Index.";

    let programmerName = document.createElement("h3");
    programmerName.textContent = "Cappelluti Simone";

    headerDiv.appendChild(headerName);
    headerDiv.appendChild(returnToIndex);
    headerDiv.appendChild(programmerName);

    document.body.insertBefore(headerDiv, document.body.firstChild);
}

function generateExcel(table) {
    let t2ex = new Table2Excel()
    t2ex.export(table)
}

function genTableAndDownloadButton() {
    let storedProductsArr = localStorage.getItem("productsArray");
    let storedPricesArr = localStorage.getItem("pricesArray");
    let storedQuantitiesArr = localStorage.getItem("quantitiesArray");

    if (storedProductsArr !== null && storedPricesArr !== null && storedQuantitiesArr !== null) {
        storedProductsArr = JSON.parse(storedProductsArr);
        storedPricesArr = JSON.parse(storedPricesArr);
        storedQuantitiesArr = JSON.parse(storedQuantitiesArr);

        let containerDiv = document.createElement("div");
        containerDiv.classList.add("container");

        let table = document.createElement("table");
        table.classList.add("product-table");

        let headerRow = table.insertRow();
        let headers = ["Product", "Price", "Quantity"];
        headers.forEach(headerText => {
            let header = document.createElement("th");
            header.textContent = headerText;
            headerRow.appendChild(header);
        });

        for (let index = 0; index < storedProductsArr.length; index++) {
            let row = table.insertRow();
            let productCell = row.insertCell(0);
            let priceCell = row.insertCell(1);
            let quantityCell = row.insertCell(2);
            
            productCell.textContent = storedProductsArr[index];
            priceCell.textContent = storedPricesArr[index]+"€";
            quantityCell.textContent = storedQuantitiesArr[index];
        }

        // Append table to the container div
        containerDiv.appendChild(table);

        // Create a button to download the table as Excel
        let downloadButton = document.createElement("button");
        downloadButton.textContent = "Download as Excel";
        downloadButton.classList.add("download-button");
        downloadButton.onclick = function() {
            generateExcel(table);
        };

        containerDiv.appendChild(downloadButton);

        // Append container div to the document body
        document.body.appendChild(containerDiv);

    } else {
        console.log("No stored products found.");
    }

    localStorage.clear();
}

function onPageLoad() {
    genHeader();
    genTableAndDownloadButton();
}

window.onload = onPageLoad;
