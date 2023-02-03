// Mail
// Creaun array con una lista di email (stringhe)
// Chiedi all’utente la sua email (con il prompt), controlla che sia nella lista di email,
// stampa un messaggio appropriato sull’esito del controllo.

//richiamo elementi da DOM
let mailInputElement = document.querySelector('.mail__form');
let sendBtnElement = document.querySelector('.send__btn');
let mailFeedback = document.querySelector('.mail__check');
// console.log(mailInputElement, sendBtnElement);

//creo lista vuota per controllo mail
let mailList = [];
console.log(mailList);

sendBtnElement.addEventListener('click', function(){
    //prendo mail utente
    let mailUser = mailInputElement.value;
    console.log(mailUser);

    //aggiunto check input non vuoto
    if (mailUser === '') {
        alert('email not insert')
    } else {
        //se lista vuota, inserisco
        if (mailList.length === 0){
            mailList.push(mailUser);
            mailFeedback.innerHTML = mailUser + ' was correctly saved in our system';
        } else {
            //controllo che la mail sia uguale o no per ogni elemento della lista
            let control = 0;
    
            for (let i = 0; i < mailList.length; i++){
    
                if (mailUser === mailList[i]){
                    control++;
                } 
    
            }
    
            if (control === 0){
                mailList.push(mailUser);
                mailFeedback.innerHTML = mailUser + ' was correctly saved in our system';
            } else {
                alert('your mail is already saved in our system');
                mailFeedback.innerHTML = '';
            }
    
        }
    
        console.log(mailList);


    }

})

