console.log("Ca fonctionne !");

// VARIABLES
const angi = "Angi"; // Non réassignable & Portée limitée
let ser;// réassignable & Portée limitée

// Portée des variables
const firstname = "Lucas"; // script.js:8 Uncaught ReferenceError: Cannot access 'firstname' before initialization
console.log(firstname);
let catName = "Lucky";
console.log(catName);

function hello() {
    const lastname = "Ielli";
    catName = "Luna";
    console.log(firstname);
    console.log(lastname);
    let catAge = 5; // Variable réassignable mais à portée limitée
    
}
hello();
// console.log(lastname); //N'est pas dispo

// Types de variables
const stringA = "Salut"; // String = Chaine de caractère = "", '', ``
const numberA = 0; // Nombre = Number = 0
let booleanA = true; // Boolean = booléen = true OU false
const arrayA = []; // Array = tableau = []
const objectA = {}; // Object = Objet = {}

let conditionConnection = true;

// Les tableaux plus précisément
const fruits = ['Pomme', 2, {}, undefined, null, [], true];
console.log(fruits); // Ma variable de type TABLEAUX
console.log(fruits[0]); // "Pomme" = Type STRING
console.log(fruits[1]); // 2000 = Type NUMBER
console.log(fruits[2]); //  {} = Type OBJECT
console.log(fruits[3]); // undefined = type non défini
console.log(fruits[4]); // null = nulle = Type null
console.log(fruits[5]); // [] = type TABLEAU
console.log(fruits[6]); // true = Type BOOLEEN


// Les objets plus précisement
const chats = {
    nom: "Lucky",
    age: 5,
    couleur: ["Gris", "Blanc", "Tigré"],
    sexe: "Mâle",
    sterile: true,
    puce: undefined
};

console.log(chats); // OBJETS = OBJECTS
console.log(chats.nom); // CHAINE DE CARACTERE = STRING
console.log(chats.age); // NOMBRE = NUMBER
console.log(chats.couleur); // TABLEAU = ARRAY
console.log(chats.sexe); // CHAINE DE CARACTERE = STRING
console.log(chats.sterilise); // BOOLEEN = BOOLEAN
console.log(chats.puce); // INDEFINI = UNDEFINED

