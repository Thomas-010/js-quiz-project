const vragen = [
    "In welke stad zijn we nu?",
    "In welke provincie zijn we nu?",
    "In welk land zijn we?",
    "Hoeveel dagen zitten er in een werk week?",
    "Hoe heet deze school?",
    "Hoeveel vragen zijn er geweest tot nu toe?",
]

const antwoordopties = [
    ["Rotterdam", "Dordrecht", "Breda"],
    ["Zuid-Holland", "Utrecht", "Noord-Brabant"],
    ["Belgie", "Luxemburg", "Nederland"],
    ["7", "6", "5"],
    ["Davinci", "Dalton", "Insula"],
    ["5", "6", "4"],
]

const juisteantwoorden = [
    "Dordrecht",
    "Zuid-Holland",
    "Nederland",
    "5",
    "Davinci",
    "5",
]


let huidigevraag = 0;
let score = 0;

console.log(vragen)
console.log(antwoordopties)
console.log(juisteantwoorden)
console.log(huidigevraag)
console.log("Score:", score)