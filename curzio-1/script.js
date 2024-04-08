function changeColor() {
    var selectElement = document.getElementById('colorSelect');
    var selectedColor = selectElement.options[selectElement.selectedIndex].value;
    var paragraph = document.getElementById('textParagraph');
    paragraph.style.color = selectedColor;
}

function changeFontSize() {
    var radios = document.getElementsByName('fontSize');
    var selectedSize;
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            selectedSize = radios[i].value;
            break;
        }
    }
    var paragraph = document.getElementById('textParagraph');
    paragraph.style.fontSize = selectedSize;
}