
let start_calc = document.querySelector('#start');//1

let right_side = document.querySelectorAll('.result-table div');// нечетные -value 

arr_value = []; // 2
right_side.forEach(function(iter, i){
    if(i % 2 != 0){
        arr_value.push(iter);
    }
});

let input_expens_item = document.querySelectorAll('.expenses-item');//3
//<button class="expenses-item-btn">Утвердить</button>
let expenses_item_btn = document.querySelector('.expenses-item-btn');//4
//<button class="count-budget-btn">Рассчитать</button>
let count_budget_btn = document.querySelector('.count-budget-btn');//5

let optionalexpenses_item = document.querySelectorAll('.optionalexpenses-item');

let income = document.querySelector('#income');

let savings = document.querySelector('#savings');

let sum = document.querySelector('#sum');

let percent = document.querySelector('#percent');

let year = document.querySelector('.year');
let month = document.querySelector('.month');
let day = document.querySelector('.day');
console.log(income, savings, sum, percent, year, month, day);