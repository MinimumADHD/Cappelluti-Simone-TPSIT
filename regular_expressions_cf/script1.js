// Cappelluti Simone

// declaring my buttons, it's suspiciously a low amount of variables which usually doesn't happen
let InputTypeText = document.getElementById("InputTypeText");
let ValidationButton = document.getElementById("ValidationButton");
let OutputLabel = document.getElementById("OutputLabel");

// i should probably call this for a local variable to minimise the amount of work i'd have to do when doing checks
function verifyEmail(email) {
    // common pattern we usually use to check for usual emails, nothing this big but should work.
    // if the given param is considered by the regular expression a valid e-mail, then it will return true and change the text, otherwise it will say the mail is NOT validable.
    const regexEmail = /^[A-Z]{6}\d{2}[A-Z]\d{2}[A-Z]\d{3}[A-Z]$/;
    // returns the result of the test as a boolean, can either be true or false, this way we'll be able to use the boolean to print some cool things.
    return regexEmail.test(email);
}

function afterVerify() {
    console.log("Triggered Func")
    // declaring my variable to get the boolean so that i won't have to do it in the future
    let inputEmail = InputTypeText.value;
    let boolVerif = verifyEmail(inputEmail);

    // from this point on i forgot to add the comments 💀
    if (boolVerif) {
        OutputLabel.innerHTML = `${boolVerif}, ${inputEmail} contains a valid pattern.`;
    } else {
        OutputLabel.innerHTML = `${boolVerif}, ${inputEmail} does NOT contain a valid pattern.`;
    }
}

ValidationButton.addEventListener("click", function() {
    afterVerify();
});