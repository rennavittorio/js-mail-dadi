let mailList = ['vitto@mail.com', 'renna@mail.com', 'toro@mail.com'];
console.log(mailList);

let mailUser = 'vecna@mail.com';

let control = 0;
for (let i = 0; i < mailList.length; i++){

    if (mailUser === mailList[i]){
        control++;
    } 

}

// console.log(control);
if (control === 0){
    console.log('new mail');
} else {
    console.log('existing mail');
}


// if (mailUser === mailList[1]) {
//     console.log('uguali');
// } else {
//     console.log('diverse');
// }