let passwordLength, uppercaseLetters, lowercaseLetters, numbersForPassword, specialCharacters, useUpperCaseLetters, useLowerCaseLetters, useNumbers, useSpecialCharacters, inputUpperCase, inputLowerCase, inputNumbers, inputSpecialCharacters, characterArray;


uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
numbersForPassword = "0123456789";
specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
characterArray = "";

//Get password length

passwordLength = parseInt(prompt("Please enter the length of the password"));

while (passwordLength <8){
    passwordLength = parseInt(prompt("Please enter a value above 8 to get a secure password."));
}

useUpperCaseLetters = confirm("Do you want to use Uppercase Letters in the password?");
useLowerCaseLetters = confirm("Do you want to use Lowercase letters in the password?");
useNumbers = confirm("Do you want to use Numbers in the password?");
useSpecialCharacters = confirm("Do you want to use special characters in the password?");

if (useUpperCaseLetters) {
    characterArray += uppercaseLetters;
}
if (useLowerCaseLetters) {
    characterArray += lowercaseLetters;
}
if (useNumbers) {
    characterArray += numbersForPassword;
}
if (useSpecialCharacters) {
    characterArray += specialCharacters
}
// Determine what the user wants

// inputUpperCase = document.getElementById("inputGroupUpperCase");
// useUpperCaseLetters = inputUpperCase.options[inputUpperCase.selectedIndex].value;

// inputLowerCase = document.getElementById("inputGroupLowerCase");
// useLowerCaseLetters = inputLowerCase.options[inputLowerCase.selectedIndex].value;

// inputNumbers = document.getElementById("inputGroupNumbers");
// useNumbers = inputNumbers.options[inputNumbers.selectedIndex].value;

// inputSpecialCharacters = document.getElementById("inputGroupSpecialCharacters");
// useSpecialCharacters = inputSpecialCharacters.options[inputSpecialCharacters.selectedIndex].value;


    // if (useUpperCaseLetters === "1"){
    //     characterArray += uppercaseLetters;
    // }
    // if (useLowerCaseLetters === 1){
        // characterArray += lowercaseLetters;
    // }
    // if (useNumbers === 1){
        // characterArray += numbersForPassword;
    // }
    // if (useSpecialCharacters === 1) {
        // characterArray += specialCharacters;
    // }

    console.log(characterArray);
// Generate Password Function

function generatePassword() {
    let multiplier = characterArray.length;
    let returnValue = "";
    for (var i = 0; i < passwordLength; i++) {
        returnValue += characterArray.charAt(Math.floor(Math.random() * multiplier));
    }

    return returnValue;
}

// Generate Password Button

let generatedPassword = document.getElementById("generatePassword").addEventListener("click", () => {
    let multiplier = characterArray.length;
    let generatedPassword = "";
    for (var i = 0; i < passwordLength; i++) {
        generatedPassword += characterArray.charAt(Math.floor(Math.random() * multiplier));
    }
    document.getElementById("displayGeneratedPassword").innerText = generatedPassword;
});
