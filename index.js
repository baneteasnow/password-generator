const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

let passwordLength = 12
let generateEl = document.getElementById("generate")
let resetBtn = document.getElementById("resetBtn")

function getRandomCharacter() {
  let randomChar = Math.floor(Math.random() * characters.length)
  return characters[randomChar]
}

function generateRandomPassword() {
  let randomPassword = ""
  for (let i = 0; i < passwordLength; i++) {
    randomPassword += getRandomCharacter()
  }
  return randomPassword
}

function passWord() {
  generateEl.textContent = generateRandomPassword() ///////////
}

resetBtn.addEventListener("click", function() {
  generateEl.innerText = "..."
});

function copyEvent(id) {
  var str = document.getElementById(id);
  window.getSelection().selectAllChildren(str);
  document.execCommand('Copy')
}

function myFunction() {
  document.getElementById("copied").textContent = "Copied!";
}
