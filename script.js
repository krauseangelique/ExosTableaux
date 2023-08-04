console.log("Ca fonctionne !");

// Exercices : Les Tableaux

// Exo1 : 


// Données
let myAlphabet = [
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
    "Z",
    "$",
    "*",
    "/",
    "-",
    "+",
  ];

// Traitement : What is the length of the array?
console.log(myAlphabet.length); // Résultat 31

// Traitement : Write a function called myAlphabetLength() which console.log the length of the array.
function forAlphabet() {
    console.log(myAlphabet.length);     
}

// Appel de fonction
forAlphabet(); // Résultat 31


// Exo2 : Create an Array

// Enoncé : Declare and initialize an array called planets with 5 string values.
const planets = ["pluton", "mercure", "jupiter", "uranus", "lune"];

// Enoncé : console.log each item in the array.
// Traitement
for (let index = 0; index < planets.length; index++) {
    // Résultat
    console.log(planets[index]); 
    /* 
        pluton
        mercure
        jupiter
        uranus
        lune
    */
        
}

// Enoncé : Also console.log the index in each iteration.
// Traitement
planets.forEach(function(element, index) {
    // Résultat
    console.log(element, index); 
    /*
        pluton 0
        mercure 1
        jupiter 2
        uranus 3
        lune 4
    */ 
});







