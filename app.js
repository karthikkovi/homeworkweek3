let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let listOfCharacters = [upperCase, lowerCase, numbers, specialCharacters];
let passwordLength = 0;
let characterArray = "";

// Generate Password Button

document.getElementById("generatePassword").addEventListener("click", () => {
    // Read password length
    passwordLength = parseInt(document.getElementById("passwordLength").value);

    generateCharacterArray();

    if (characterArray === "") {
        // alert("Please select yes to anyone of the drop downs.");
        document.getElementById("input-validate").style.display = "block";
    } else if (passwordLength > 7 && passwordLength < 129) {

        resetCSS();

        let multiplier = characterArray.length;
        let generatedPassword = "";
        for (var i = 0; i < passwordLength; i++) {
            generatedPassword += characterArray.charAt(Math.floor(Math.random() * multiplier));
        }
        characterArray = "";
        passwordLength = 0;
        document.getElementById("displayGeneratedPassword").innerText = generatedPassword;
    } else {
        document.getElementById("passwordLength").classList.add("redBox");
        document.getElementById("passwordHelp").style.display = "block";
    }
});

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

//Reset CSS

function resetCSS() {
    document.getElementById("passwordHelp").style.display = "none";
    document.getElementById("passwordLength").classList.remove("redBox");
    document.getElementById("input-validate").style.display = "none";
}

//changing the text of the copy button to copied

document.getElementById("copyButton").addEventListener("click", () => {
    document.getElementById("copyButton").innerText = "Copied!"
})

