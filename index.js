const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("password-one")
let passwordTwo = document.getElementById("password-two")

let passwordLength = 15

function getRandomChar() {
    let randomChar = Math.floor(Math.random() * characters.length)
    return characters[randomChar]
} 

function generatePassword() {
    let randomPassword = ""
    for (let i = 0; i < passwordLength; i++) {
        randomPassword += getRandomChar()
    }
    return randomPassword
}

function printPassword() {
    let genRandomPasswordOne = generatePassword()
    let genRandomPasswordTwo = generatePassword()
    passwordOne.textContent = genRandomPasswordOne
    passwordTwo.textContent = genRandomPasswordTwo
}









// let passwordLength = 15

// function randomCharGen() {
//     let randomChar = Math.floor(Math.random() * characters.length)
//     return characters[randomChar]
// }

// function generatePassword() {
//     let randomPassword = ""
//     for (let i = 0; i < passwordLength; i++) {
//         randomPassword += randomCharGen()
//     } 
//     return randomPassword
// }

// function printPassword() {
//     let genPasswordOne = generatePassword()
//     passwordOne.textContent = genPasswordOne
// } 

