// FILEPATH: /home/minimumadhd/Documents/GitHub/Cappelluti-Simone-TPSIT/scripts/script.js

document.addEventListener('DOMContentLoaded', function() {
    var subjects = document.querySelectorAll('[id^="subject"]');
    var contentDiv = document.getElementById('content');

    for (var i = 0; i < subjects.length; i++) {
        var subjectId = subjects[i].id;
        var subjectName = subjects[i].innerText;
        var subjectContent = document.getElementsByName(subjectId)[0].value;
        contentDiv.innerHTML += '<p>' + subjectName + ': ' + subjectContent + '</p>';
    }
});
