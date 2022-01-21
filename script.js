let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;

//alert("Hello world!")
console.log("Kept you waiting, huh?")

title = "Калькулятор вёрстки блоков";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 1000;
rollback = 90;
fullPrice = 5000;
adaptive = true;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);
console.log(screens.length);
console.log("Стоимость вёрстки экранов " + screenPrice + " рублей");
console.log("Стоимость разработки сайта " + fullPrice + " рублей");
console.log(screens.toLowerCase().split());
console.log("Процент отката посреднику за работу " + fullPrice * (rollback/100));