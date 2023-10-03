// variabel Sound

let audio1 = new Audio ('');
let audio2 = new Audio ('');
let audio3 = new Audio ('');
let audio4 = new Audio ('');

// perintah Sound


// variabel klik
const selengkapnya = document.querySelector('.selengkapnya');
let btnS = document.querySelector('#btn-selengkapnya');


document.querySelector('#btn-selengkapnya').onclick = (e) => {
    selengkapnya.style.display = 'wrap';
    e.preventDefault('');
};