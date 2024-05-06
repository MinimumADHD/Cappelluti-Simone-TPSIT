var import_button = document.getElementById("button")

function _on_import_clicked() {
    console.log("Import clicked");
    var fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.addEventListener("change", handleFileSelect);
    fileInput.click();
}

function handleFileSelect(event) {
    var file = event.target.files[0];
    var reader = new FileReader();
    reader.onload = function (event) {
        var contents = event.target.result;
        var rows = contents.split("\n");
        var table = document.getElementById("thy_table");
        var thead = document.createElement("thead");
        var tbody = document.createElement("tbody");

        for (var i = 0; i < rows.length; i++) {
            var row = document.createElement("tr");
            row.className = "border-1 border-[#aeecf4] shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#aeecf4,0_0_15px_#aeecf4,0_0_30px_#aeecf4]";
            
            var cells = rows[i].split(",");
            slate
            for (var j = 0; j < cells.length; j++) {
                var cell = document.createElement(i === 0 ? "th" : "td");
                cell.textContent = cells[j];
                cell.className = "p-4 m-4";
                row.appendChild(cell);
            }

            if (i === 0) {
                thead.appendChild(row);
                row.className = row.className+" bg-blue-900/80"
            } else {
                tbody.appendChild(row);
            }
        }

        table.appendChild(thead);
        table.appendChild(tbody);
    };
    reader.readAsText(file);
}

import_button.addEventListener("click", _on_import_clicked);
