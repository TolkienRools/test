document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';


let menu = document.querySelector('.menu');




li = document.createElement('li');
li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
menu.appendChild(li);



// 4
let column = document.querySelectorAll('.column');
let adv = document.querySelector('.adv');
column[1].removeChild(adv);
//

/* 5
let pr = document.querySelector('#prompt');
let text = document.createTextNode(prompt('Как вы относитесь к технике Apple'));
pr.appendChild(text);
*/



title.textContent = 'Мы продаем только подлинную технику Apple';

let lst = querySelectorAll('menu-item');

menu.insertBefore(lst[2], lst[1]);
