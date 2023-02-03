// console.log('lesss dice');

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//creao i due player in console
let dicePlayers = ['player1', 'pc'];
console.log(dicePlayers);

//per ogni player, gli assegno un numero rnd
for (let i = 0; i < dicePlayers.length; i++){
    let rndNum = Math.floor(Math.random()*6) + 1;
    dicePlayers[i] = rndNum;

}

console.log('your num is', dicePlayers[0], 'pc num is', dicePlayers[1]);

//dichiaro il vincitore a seconda del caso
if (dicePlayers[0] === dicePlayers[1]){
    console.log('it\'a draw');
} else if (dicePlayers[0] > dicePlayers[1]){
    console.log('YOU WIN');
} else {
    console.log('PC WIN');
}



// console.log(dicePlayers);