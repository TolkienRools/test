
let start_calc = document.querySelector('#start');//1

let right_side = document.querySelectorAll('.result-table div');// нечетные -value 


let optionalExpensesBtn = document.querySelector('.optionalexpenses-btn');
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

let year = document.querySelector('.year-value');
let month = document.querySelector('.month-value');
let day = document.querySelector('.day-value');


function start(){
    money = +prompt("Ваш бюджет в месяц ?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет в месяц ?");
    }
}

expenses_item_btn.disabled = 'disabled';
optionalExpensesBtn.disabled = 'disabled';
count_budget_btn.disabled = 'disabled';

start_calc.addEventListener('click', function(){
    money = +prompt("Ваш бюджет в месяц ?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет в месяц ?");
    }
    appData.budget = money;
    appData.timeData = time;
    arr_value[0].textContent = money.toFixed(2);
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDate();
    expenses_item_btn.disabled = '';
optionalExpensesBtn.disabled = '';
count_budget_btn.disabled = '';
});


expenses_item_btn.addEventListener('click', function(){
    let sum = 0;
    
    for(let i = 0; i < input_expens_item.length; i++){
        
        let a = input_expens_item[i].value;
        let b = input_expens_item[++i].value;
        if(typeof a === 'string' && typeof a != null && typeof b != null &&
        a != '' && b != '' && a.length < 50){
        appData.expenses[a] = b;
        sum += +b;
        arr_value[3].textContent = sum;
        }
        else{
            i -= 1;
        }
        
    }
});

optionalExpensesBtn.addEventListener('click', function(){
    let sum = 0;
    for(let i = 0; i < optionalexpenses_item.length; i++){
        opt = +optionalexpenses_item[i].value;
        sum += opt;
        appData.optionalExpenses[i] = opt;
    }
    arr_value[4].textContent = sum.toFixed(2);
});

count_budget_btn.addEventListener('click', function(){
    if(appData.budget != undefined){
        let total_expenses = 0;
    Object.values(appData.expenses).forEach(function(item){
            total_expenses += +item;
    });
    appData.moneyPerDay = ((appData.budget - total_expenses)/ 30).toFixed();
    arr_value[1].textContent = appData.moneyPerDay;
    }else{

    }
});


income.addEventListener('input', function(){

    appData.income = income.value.split(', ');
    arr_value[5].textContent = appData.income;
});

savings.addEventListener('click', function(){
      if(appData.savings == false){
          appData.savings = true;
      }else{
        appData.savings = false;
      }
});

sum.addEventListener('input', function(){
     if(appData.savings == true && percent.value != ''){
        appData.monthIncome = (+sum.value/100/12 * +percent.value).toFixed(2);
        arr_value[6].textContent = appData.monthIncome;
        arr_value[7].textContent = appData.monthIncome * 12;
     }
});

percent.addEventListener('input', function(){
    if(appData.savings == true && sum.value != ''){
        appData.monthIncome = (+sum.value/100/12 * +percent.value).toFixed(2);
        arr_value[6].textContent = appData.monthIncome;
        arr_value[7].textContent = (appData.monthIncome * 12).toFixed(2);
     }
});


let appData = {
    budget: undefined,
    timeData: undefined,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
};