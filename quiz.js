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



function toonProgressie() {
    const progressieElement = document.getElementById("progressie");
    progressieElement.textContent = "Vraag " + (huidigevraag + 1) + " van " + vragen.length;
}

function toonvragen() {
    const vraagElement = document.getElementById("vraag");
    const antwoordenContainer = document.getElementById("antwoorden");

    antwoordenContainer.innerHTML = "";

    toonProgressie();
    vraagElement.textContent = vragen[huidigevraag];

    const opties = antwoordopties[huidigevraag];

    for (let i = 0; i < opties.length; i++){
        const knop = document.createElement("button");
        knop.textContent = opties[i];

        knop.addEventListener("click" , function() {
            ctrlAntwoord(opties[i]);
        });
        
        antwoordenContainer.appendChild(knop);
    }
}

function ctrlAntwoord(gekozenAntwoord){
    const resultaatElemenent = document.getElementById("resultaat");

    if (gekozenAntwoord === juisteantwoorden[huidigevraag]) {
        resultaatElemenent.textContent = "Dat klopt!";
        score++;
        document.getElementById("score").textContent = "Je score is: " + score;
    } 
    else {
        resultaatElemenent.textContent = "Helaas dat is fout!";
    }
}

function volgendeVraag() {
    if (huidigevraag < vragen.length - 1) {
        huidigevraag++;
        document.getElementById("resultaat").textContent = "";
        toonvragen();
    } else {
        document.getElementById("resultaat").textContent = "Quiz afgerond!";
        document.getElementById("volgendevraag").disabled = true;
    }
}

document.getElementById("volgendevraag").addEventListener("click", volgendeVraag);
document.getElementById("herstartquiz").addEventListener("click", herstartQuiz);

toonvragen();

function herstartQuiz() {
    huidigevraag = 0;
    score = 0; 
    document.getElementById("score").textContent = "Je score is: " + score;
    document.getElementById("resultaat").textContent = "";
    document.getElementById("volgendevraag").disabled = false;
    toonvragen();
}




console.log(vragen)
console.log(antwoordopties)
console.log(juisteantwoorden)
console.log(huidigevraag)
console.log("Score:", score)