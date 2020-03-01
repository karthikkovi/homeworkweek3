let password_length, uppercase_letters, lowercase_letters, numbers_for_password, special_characters;


uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
lowercase_letters = "abcdefghijklmnopqrstuvwxyz";
numbers_for_password = "0123456789";
special_characters = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

password_length = parseInt(prompt("Please enter the length of the password"));

while (password_length <8){
    password_length = parseInt(prompt("Please enter a value above 8 to get a secure password."));
}

console.log(password_length);

// Generate Password Button

// document.getElementById("generatePassword").addEventListener("click", ()=>{
//     if (password_length != null) {
//         password_length = parseInt(document.getElementById("passwordLength").value);
//     } else {
//         alert("Please enter the number of characters required for the password.")
//     }
// })

