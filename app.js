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
    console.log(passwordLength);
    console.log(characterArray);

    let multiplier = characterArray.length;
    let generatedPassword = "";
    for (var i = 0; i < passwordLength; i++) {
        generatedPassword += characterArray.charAt(Math.floor(Math.random() * multiplier));
    }
    characterArray = "";
    passwordLength = 0;
    document.getElementById("displayGeneratedPassword").innerText = generatedPassword;
});

function getPasswordLength() {
    passwordLength = parseInt(document.getElementById("passwordLength").value);
    return passwordLength;
}

//Generate character array 

function generateCharacterArray() {

    // Determine what the user wants

    inputUpperCase = document.getElementById("inputGroupUpperCase");
    useUpperCaseLetters = inputUpperCase.options[inputUpperCase.selectedIndex].value;

    inputLowerCase = document.getElementById("inputGroupLowerCase");
    useLowerCaseLetters = inputLowerCase.options[inputLowerCase.selectedIndex].value;

    inputNumbers = document.getElementById("inputGroupNumbers");
    useNumbers = inputNumbers.options[inputNumbers.selectedIndex].value;

    inputSpecialCharacters = document.getElementById("inputGroupSpecialCharacters");
    useSpecialCharacters = inputSpecialCharacters.options[inputSpecialCharacters.selectedIndex].value;


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