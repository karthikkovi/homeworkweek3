let passwordLength, characterArray;
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let listOfCharacters = [upperCase, lowerCase, numbers, specialCharacters];
passwordLength = 0;
characterArray = "";

// Generate Password Button

let generatedPassword = document.getElementById("generatePassword").addEventListener("click", () => {
    getPasswordLength();
    generateCharacterArray();

    if (passwordLength > 7 && passwordLength < 129) {

        let multiplier = characterArray.length;
        let generatedPassword = "";
        for (var i = 0; i < passwordLength; i++) {
            generatedPassword += characterArray.charAt(Math.floor(Math.random() * multiplier));
        }
        characterArray = "";
        passwordLength = 0;
        document.getElementById("displayGeneratedPassword").innerText = generatedPassword;
    } else {
        setTimeout(() => { 
            document.getElementById("passwordHelp").style.display = "none";
            document.getElementById("passwordLength").classList.remove("redBox");
        }, 5000);
    }
});


function getPasswordLength() {
    passwordLength = parseInt(document.getElementById("passwordLength").value);
    if (passwordLength < 8 || passwordLength > 128) {
        document.getElementById("passwordLength").classList.add("redBox");
        document.getElementById("passwordHelp").style.display = "block";
    } else {
        return passwordLength;
    }
}

function generateCharacterArray() {

    // Read user options from the dropdowns

    for (let i = 1; i < 5; i++) {
        let charactersUsed = document.getElementById("inputGroup-" + i).options[document.getElementById("inputGroup-" + i).selectedIndex].value;

        //Generate characterArray
        if (charactersUsed === "1") {
            characterArray += listOfCharacters[(i - 1)];
        }
    }

    return characterArray;
}

//changing the text of the copy button to copied

document.getElementById("copyButton").addEventListener("click", () => {
    document.getElementById("copyButton").innerText = "Copied!"
})