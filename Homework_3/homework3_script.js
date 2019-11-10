// Array of special characters to be included in password
var specialCharacters = [
    "@",
    "%",
    "+",
    "\\",
    "/",
    "'",
    "!",
    "#",
    "$",
    "^",
    "?",
    ":",
    ",",
    ")",
    "(",
    "}",
    "{",
    "]",
    "[",
    "~",
    "-",
    "_",
    "."
  ];
  
  // Array of numeric characters to be included in password
  var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // Array of lowercase characters to be included in password
  var lowerCasedCharacters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];
  
  // Array of uppercase characters to be included in password
  var upperCasedCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z"
  ];
  

function getPasswordOptions () {
    var length = parseInt (prompt(
        "How many charcters would you like your password to be?"
    ))
    if (isNaN(length)===true) {
        alert ("password length must be a number")
        return
    }
    if (length<8) {
        alert ("password must be at least 8 characters")
        return
    }

    if (length>128) {
        alert ("password must be less than 129 characters")
        return
    } 

    var hasspecialcharacters = comfirm ("click ok for special characters")
    var hasnumbericcharacters = comfirm ("click ok for numberic characters")
    var haslowercasecharacters = comfirm ("click ok for lowercase characters")
    var hasuppercasecharacters = comfirm ("click ok for uppercase characters")

    if (hasspecialcharacters===false && hasuppercasecharacters===false && haslowercasecharacters===false && hasnumbericcharacters===false) {
        alert ("must select at least on character type")
        return
    }

    var passwordoptions = { 
        length: length,
        hasnumbericcharacters: hasnumbericcharacters,
        hasspecialcharacters: hasspecialcharacters,
        hasuppercasecharacters: hasuppercasecharacters,
        haslowercasecharacters: haslowercasecharacters,

    }

    return passwordoptions

}


function getRandom (arr) {
    var randomindex = Math.floor (Math.random() * arr.length)
    var randomelement = arr[randomindex]
    return randomelement
}













function generate () {
  var options = getPasswordOptions ()
  var results =[]
  var possiblecharacters= []
  var guaranteed = []

 if (options.hasspecialcharacters) {
     possiblecharacters= possiblecharacters.concat (specialCharacters)
     guaranteed.push (getRandom(specialCharacters))
 }

 if (options.hasnumbericcharacters) {
     possiblecharacters=possiblecharacters.concat (numbericcharacters)
     guaranteed.push (getRandom(numbericcharacters))
     
 }

 if (options.haslowercasecharacters) {
     possiblecharacters= possiblecharacters.concat (lowerCasedCharacters)
     guaranteed.push (getRandom(lowerCasedCharacters))
 }

 if (options.hasuppercasecharacters) {
     possiblecharacters= possiblecharacters.concat (upperCasedCharacters)
     guaranteed.push (getRandom(upperCasedCharacters))
 }


    //forloop

    //for loop for guarenteed characters

    // function to write password 

    
    }


function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("copy");

    alert("copied to clipboard");
}