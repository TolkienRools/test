
let button = document.querySelectorAll('button');

let wrapper = document.querySelector('.wrapper');
let div = document.createElement('div');


div.classList.add('black');

div.textContent = '<h1></h1>';

wrapper.replaceChild(div,button[3]);





