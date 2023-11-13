let current_font_info = document.getElementById("current_font_info");
let header1 = document.getElementById("header_to_capture");

function onPageLoad() {
    current_font_info.innerHTML = `Current Font: ${window.getComputedStyle(header1).fontFamily}`
}

onPageLoad();