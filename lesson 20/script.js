
let button = document.querySelectorAll('button');
let wrap = document.querySelector('.wrapper');
let link = document.querySelector('a');
console.log(wrap);



/*button[0].addEventListener('click', function(event){
  
    console.log(event.type + ' ' + event.target);
   
});


wrap.addEventListener('click', function(event){
    console.log(event.type + ' ' + event.target);
});

link.addEventListener('click', function(event){
    event.preventDefault();
});*/

button.forEach(function(item){
    item.addEventListener('mouseleave', function(event){
            console.log('Вышли');
    })
});
/*
button[0].addEventListener('mouseenter', function(){
    alert('Навели');
   
});*/