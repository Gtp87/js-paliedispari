// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random(sempre da 1 a 5) per il computer
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari
// Dichiariamo chi ha vinto (corrispondenza tra scelta pari e dispari e somma pari o dispari)
// In un secondo momento creiamo delle funzioni per i numeri random e per il check pari dispari

// chiedo di scegliere e verifico che abbia scelto tra opzioni previste
// let userChoice = prompt('scrivi pari o dispari');
// while (userChoice != 'pari' && userChoice != 'dispari'){
//    userChoice = prompt('scrivi pari o dispari');
// }

// // chiedo di inserire un numero da 1 a 5 e verifico
// let numberUser = parseInt(prompt('scegli un numero da 1 a 5'));
// while (numberUser < 1 || numberUser  > 5 || isNaN(numberUser)) {
//   numberUser =  parseInt(prompt('scegli un numero da 1 a 5'));
// }

// // creiamo un numero random per il pc e lo sommiamo al numero scelto dall'utente

// let numberPC = Math.floor(Math.random() * 5) + 1;
// let sum = numberPC + numberUser;

// console.log('Pari o dispari? ' + userChoice, 'numero utente ' + numberUser, 'numero pc ' +  numberPC,  'somma ' + sum);

// // chi ha vinto?

// if (sum % 2 == 0 && userChoice == 'pari' || sum % 2 != 0 && userChoice == 'dispari') {
//     console.log('hai vinto');
//     alert('hai vinto');
    
// } else {
//     console.log(' ha vinto il pc');
//     alert('ha vinto il pc');
// }


// METODO FUNZIONE

// funzione numero random 

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// funzione num pari

function evenNum(number) {
    if (number % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

let userChoice = prompt('scrivi pari o dispari');
while (userChoice != 'pari' && userChoice != 'dispari') {
        userChoice = prompt('scrivi pari o dispari');
}

let numberUser = parseInt(prompt('scegli un numero da 1 a 5'));
while (numberUser < 1 || numberUser  > 5 || isNaN(numberUser)) {
  numberUser =  parseInt(prompt('scegli un numero da 1 a 5'));
}

// numero pc random da 1 a 5
let numberPc = randomNum (1, 5);


// somma numero utente e numero pc

let sum = numberUser + numberPc;

 console.log('Pari o dispari? ' + userChoice, 'numero utente ' + numberUser, 'numero pc ' + numberPc, 'somma ' + sum);

// controllo vincitore

if (evenNum(sum) == true && userChoice == 'pari' || evenNum(sum) == false && userChoice == 'dispari') {
    console.log('hai vinto');
    alert('hai vinto');
} else {
    console.log(' ha vinto il pc');
    alert('ha vinto il pc');
}