// console.log('lesss dice');

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

//creao i due player in console
let dicePlayers = ['player1', 'pc'];
console.log(dicePlayers);

//richiamo gli elementi del DOM necessari
let diceFacePlayer = document.querySelector('.dice__face-player');
let diceFacePc = document.querySelector('.dice__face-pc');
let winnerBanner = document.querySelector('.winner__banner');
//aggiungo btn
let rollBtn = document.querySelector('.roll__btn');

//creo una lista parallela per contenere la faccia del dado di ogni player
let diceFaceExtraction = ['', ''];


//inserisco tutto al click del btn
rollBtn.addEventListener('click', function(){
    //per ogni player, gli assegno un numero rnd e una faccia del dado
    for (let i = 0; i < dicePlayers.length; i++){
        let rndNum = Math.floor(Math.random()*6) + 1;
        dicePlayers[i] = rndNum;
    
        switch (rndNum){
            case 1:
                diceFaceExtraction[i] = '<i class="fa-solid fa-dice-one"></i>';
                break;
            case 2:
                diceFaceExtraction[i] = '<i class="fa-solid fa-dice-two"></i>';
                break;
            case 3:
                diceFaceExtraction[i] = '<i class="fa-solid fa-dice-three"></i>';
                break;
            case 4:
                diceFaceExtraction[i] = '<i class="fa-solid fa-dice-four"></i>';
                break;
            case 5:
                diceFaceExtraction[i] = '<i class="fa-solid fa-dice-five"></i>';
                break;
            case 6:
                diceFaceExtraction[i] = '<i class="fa-solid fa-dice-six"></i>';
                break;
        }
    }
    
    console.log('your num is', dicePlayers[0], 'pc num is', dicePlayers[1]);
    
    //mostro a schermo le facce del dado per ogni player
    diceFacePlayer.innerHTML = diceFaceExtraction[0];
    diceFacePc.innerHTML = diceFaceExtraction[1];
    
    //dichiaro il vincitore a seconda del caso, e lo mostro a schermo
    if (dicePlayers[0] === dicePlayers[1]){
        console.log('it\'a draw');
        winnerBanner.innerHTML = 'it\'a draw'
    } else if (dicePlayers[0] > dicePlayers[1]){
        console.log('YOU WIN');
        winnerBanner.innerHTML = 'YOU WIN'
    } else {
        console.log('PC WINS');
        winnerBanner.innerHTML = 'PC WINS'
    }
    
    
    
    // console.log(dicePlayers);


})