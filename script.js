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
    /* Expected output:
        pluton 0
        mercure 1
        jupiter 2
        uranus 3
        lune 4
    */ 
});

//Exo3 : 3. Manipulate data types
/* Declare and initialize an array called someDataTypes.
This array must have 4 differents data types(NOT Objects).
Write and display in your console the typeof for each iteration.
Display in your console the index of each data in your array. 
*/

const someDataTypes = [true,"this is my string", 4, undefined];

// treatment
someDataTypes.forEach(function(element, index){

    // Result
    console.log(element, typeof element, index);
    /* Epected output:
    true 'boolean' 0
    this is my string string 1
    4 'number' 2
    undefined 'undefined' 3
    */

});

// Exo4 :  Empty Array
/* Create an empty Array.
console.log this empty Array and keep it during all this exercise.
Add some data in it, the type you want, the theme you want.
Copy your Array
console.log this new Array
=> methode SLICE()
*/
// Variables
let emptyTab = [];
emptyTab = [null, false, 1, 'hello'];

// Treatment
// Copy your Array
const copyEmptyTab = emptyTab.slice();

// Result
console.log(copyEmptyTab);
/* Epected output:
    (4) [null, false, 1, 'hello']
*/

// Exo5 : How many letters?
/*
let furnitures = ['Table', 'Chairs','Couch'];
For each item in this array console.log the letters in each item.
*/








