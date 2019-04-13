
let money = +prompt("Ваш бюджет в месяц ?");
let time = prompt("Введите дату в формате YYYY-MM-DD");
let ascSpend = prompt("Введите обязательную статью расходов в этом месяце");
let moneySpend = +prompt("Во сколько обойдется ?");

let appData = {};

appData.money = money;
appData.timeData = time;
appData.expenses = {ascSpend: moneySpend};
appData.optionalExpenses = {};
appData.income = [];
appData.savings = false;

alert("Ваш бюджет на 1 день: " + (appData.money - appData.expenses.ascSpend) / 30);
