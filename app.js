let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "0123456789";
let specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
let listOfCharacters = [upperCase, lowerCase, numbers, specialCharacters];
let passwordLength = 0;
let characterArray = "";

document.getElementById("generatePassword").addEventListener("click", () => {
    // Read password length from the form
    passwordLength = parseInt(document.getElementById("passwordLength").value);

    // Generate the character array based on the user preferences
    generateCharacterArray();

    //if statement to validate if the characterArray is empty
    if (characterArray === "") {
        document.getElementById("input-validate").style.display = "block";
    } else if (passwordLength > 7 && passwordLength < 129) {

        resetCSS(); // To remove the CSS styles if the user input is valid

        let multiplier = characterArray.length; // for randomizing the array based on the length the array is generated
        let generatedPassword = "";
        for (var i = 0; i < passwordLength; i++) { //Loop to generate the password 
            generatedPassword += characterArray.charAt(Math.floor(Math.random() * multiplier));
        }
        // Resetting the characterArray and password Length to initial values
        characterArray = "";
        passwordLength = 0;

        // Displaying the generated password
        document.getElementById("displayGeneratedPassword").innerText = generatedPassword;
    } else {
        // Making the password length box red and to display error message
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

// Randomize the array

for(let i = characterArray.length - 1; i > 0; i--){
  const j = Math.floor(Math.random() * i)
  const temp = characterArray[i]
  characterArray[i] = characterArray[j]
  characterArray[j] = temp
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

document.getElementById("copyButton").addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("copyButton").innerText = "Copied!"
})