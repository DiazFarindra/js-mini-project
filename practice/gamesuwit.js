
// let ask = true;

// while ( ask ) {
//     // player choose
//     const p = prompt('pilih : gajah, semut, orang');

//     // catch computer choose
//     // generate random number
//     let comp = Math.floor(Math.random() * 3) + 1;

//     if (comp === 1) {
//         comp = 'gajah';
//     } else if (comp === 2) {
//         comp = 'orang';
//     } else {
//         comp = 'semut';
//     }

//     let result = '';
//     // rules
//     if (p === comp) {
//         result = 'SERI!';
//     } else if (p === 'gajah') {
//         result = (comp === 'orang') ? 'MENANG!' : 'KALAH!';
//     } else if (p === 'orang') {
//         result = (comp === 'semut') ? 'MENANG!' : 'KALAH!';
//     } else if (p === 'semut') {
//         result = (comp === 'gajah') ? 'MENANG!' : 'KALAH!';
//     } else {
//         result = 'wrong input!';
//     }

//     // show the result
//     alert(`anda : ${p} \nkomputer : ${comp}\nresult : ${result}`);

//     ask = confirm('play again?');
// }

// alert('thank you!');

// // task mission, -- bikin tebak angka yang ada hintnya(tinggi / rendah) sama jumlah menebaknya terbatas