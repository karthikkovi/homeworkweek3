let passwordLength, uppercaseLetters, lowercaseLetters, numbersForPassword, specialCharacters, useUpperCaseLetters, useLowerCaseLetters, useNumbers, useSpecialCharacters, inputUpperCase, inputLowerCase, inputNumbers, inputSpecialCharacters, characterArray;


uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
numbersForPassword = "0123456789";
specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
passwordLength = 0;
characterArray = "";

// Generate Password Button

let generatedPassword = document.getElementById("generatePassword").addEventListener("click", () => {
    getPasswordLength();
    generateCharacterArray();

    if (passwordLength > 7 && passwordLength < 129) { // To implement  the logic for generating password between 8 and 128 characters.
        let multiplier = characterArray.length; //Determining the amount of characters available to generate the password.
        let generatedPassword = ""; // Declaring empty string to store the generated password.
        for (var i = 0; i < passwordLength; i++) { // Loop through the length of the password requested by the user.
            generatedPassword += characterArray.charAt(Math.floor(Math.random() * multiplier)); // Storing the generated from the loop.
        }
        characterArray = ""; // reverting the character array to empty string for future use.
        passwordLength = 0; // reverting the password length to get new password length if the user wants to.
        document.getElementById("displayGeneratedPassword").innerText = generatedPassword; // displaying the generated password.
    } else { // To show a message in the generate password screen.
        document.getElementById("displayGeneratedPassword").innerText = "Passwords can only be generated between 8 and 128 characters in length."
    }
    setTimeout(function() { // To remove the warning messages.
    document.getElementById("passwordHelp").style.display = "none";
    document.getElementById("passwordHelp128").style.display = "none";
    }, 5000);
});

function getPasswordLength() {
    passwordLength = parseInt(document.getElementById("passwordLength").value); // Reading the password length from the HTML field and parsing it to int.
    if (passwordLength < 8) { //To display warning messages
        document.getElementById("passwordLength").classList.add("redBox");
        document.getElementById("passwordHelp").style.display = "block";
    } else if (passwordLength > 128) {
        document.getElementById("passwordHelp128").style.display = "block";
    } else {
        return passwordLength;
    }
}

//Generate character array 

function generateCharacterArray() {

    // Read user options from the dropdowns

    inputUpperCase = document.getElementById("inputGroupUpperCase");
    useUpperCaseLetters = inputUpperCase.options[inputUpperCase.selectedIndex].value;

    inputLowerCase = document.getElementById("inputGroupLowerCase");
    useLowerCaseLetters = inputLowerCase.options[inputLowerCase.selectedIndex].value;

    inputNumbers = document.getElementById("inputGroupNumbers");
    useNumbers = inputNumbers.options[inputNumbers.selectedIndex].value;

    inputSpecialCharacters = document.getElementById("inputGroupSpecialCharacters");
    useSpecialCharacters = inputSpecialCharacters.options[inputSpecialCharacters.selectedIndex].value;

    //Generating a character array based on prefrences.
    if (useUpperCaseLetters === "1") {
        characterArray += uppercaseLetters;
    }
    if (useLowerCaseLetters === "1") {
        characterArray += lowercaseLetters;
    }
    if (useNumbers === "1") {
        characterArray += numbersForPassword;
    }
    if (useSpecialCharacters === "1") {
        characterArray += specialCharacters;
    }
    return characterArray;
}

//changing the text of the copy button to copied

document.getElementById("copyButton").addEventListener("click", () => {
    document.getElementById("copyButton").innerText = "Copied!"
})