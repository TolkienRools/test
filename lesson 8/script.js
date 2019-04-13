let money, time;

function start(){
    money = +prompt("Ваш бюджет в месяц ?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет в месяц ?");
    }
}
start();

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    chooseExtenses: function(){
        for(let i = 0; i < 2; i++){
            let a = prompt("Введите обязательную статью расходов в этом месяце");
            let b = +prompt("Во сколько обойдется ?");
    
            if(typeof a === 'string' && typeof a != null && typeof b != null &&
            a != '' && b != '' && a.length < 50){
            appData.expenses[a] = b;
            }
            else{
                i -= 1;
            }
        }
    },
    checkSavings: function(){
        if(appData.savings == true){
            let save = +prompt("Какова сумма накоплений");
            let p = +prompt("Под какой процент");
    
            appData.monthIncome = (save/100/12 * p).toFixed(2);
            alert("Доход в месяц с вашего дипозита:" + appData.monthIncome);
        }
    },
    directDayBudget: function(){
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
    },
    chooseIncome: function(){
        let items = prompt('Что принесет дополнительный доход ?(перечислите через запятую)');
        appData.income = items.split(', ');

    }
};






