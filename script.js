let title;
let screens;
let screenPrice;
let rollback;
let fullPrice;
let adaptive;

alert("Приветствие")
console.log("Kept you waiting, huh?")

title = "Калькулятор вёрстки блоков";
screens = "Простые, Сложные, Интерактивные";
screenPrice = 1000;
rollback = 15;
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

title = prompt('Как называется ваш проект?');
console.log(title);
screens = prompt('Какие типы экранов нужно разработать?', "пример: Простые, Сложные, Интерактивные");
console.log(screens);
screenPrice = +prompt('Сколько будет стоить данная работа?', "пример: 12000");
console.log(screenPrice);
adaptive = confirm('Нужен ли адаптив на сайте?');
console.log(adaptive);
service1 = prompt('Какой дополнительный тип услуги нужен?');
console.log(service1);
servicePrice1 = +prompt('Сколько это будет стоить?');
console.log(servicePrice1);
service2 = prompt('Какой дополнительный тип услуги нужен?');
console.log(service2);
servicePrice2 = +prompt('Сколько это будет стоить?');
console.log(servicePrice2);
fullPrice = screenPrice + servicePrice1 + servicePrice2;
switch (true) {
    case fullPrice >= 30000:
        alert("Вам доступна скидка 10%");
        break
    case 15000 <= fullPrice < 30000:
        alert("Вам доступна скидка 5%");
        break
    case 0 <= fullPrice < 15000:
        alert("Скидка не предусмотрена");
        break
    default:
        alert("Что-то пошло не так");
        break
}
let servicePercentPrice = fullPrice - (fullPrice / 100 * 15);
console.log(servicePercentPrice);
