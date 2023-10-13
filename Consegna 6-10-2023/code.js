function onSubmit() {
    let toChange = document.getElementById("info")

    let InputName = document.getElementById("name").value;
    let InputLastName = document.getElementById("lastname").value;

    console.log(InputName + " " + InputLastName);

    let checkboxes = document.querySelectorAll('input[type="checkbox"]');

    let tosend = "";

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].type === "checkbox" && checkboxes[i].checked) {
            tosend += checkboxes[i].value + " ";
        }
    }

    toChange.innerHTML = InputName + " " + InputLastName + " " + tosend;

}

document.getElementById("submitButton").addEventListener("click", onSubmit);