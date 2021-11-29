// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma (prima senza funzione e poi con funzione)

// PRIMO METODO
// chiedo parola all'utente
// let userWord = prompt('inserisci una parola');

// con un decremento scrivo la parola a rovescio
// let reverseWord = '';
// for (let index = userWord.length - 1; index >= 0; index--) {
//     reverseWord += userWord[index];
// }

// console.log(userWord, reverseWord);

// condizioni
// if (userWord == reverseWord) {
//     alert('parola palindroma');
// } else {
//     alert('parola non palindroma');
// }

// METODO REVERSE (mi sono incuriosito dopo aver letto in 'comunicazioni')

// // chiedo parola all'utente 
// let userWord = prompt('inserisci una parola');

// // divido parola in lettere
// let splitWord = userWord.split('');

// // inverto l'ordine delle lettere
// splitWord = splitWord.reverse();

// // creo nuova parola invertita
// let invertedWord = splitWord.join('');

// console.log(userWord, splitWord, invertedWord);

// if (userWord == invertedWord) {
//     alert('la parola inserita è palindroma')
// } else {
//     alert('la parola non è palindroma')
// }




// FUNZIONE

let userWord = prompt('inserisci una parola');

function revertedWord(userWord) {
    let reverseWord = '';
    // con un decremento scrivo la parola a rovescio
    for (let index = userWord.length - 1; index >= 0; index--) {
        reverseWord += userWord[index];
    }
    return reverseWord;
}

console.log(userWord, revertedWord(userWord));

// condizioni

if (userWord == revertedWord(userWord)) {
    alert('parola palindroma');

}else {
    alert('parola non palindroma');
}