'use strict';


let title
let adaptive
let screens
let screenPrice
const rollback = 65;
let service1
let servicePrice1
let service2
let servicePrice2
let fullPrice
let servicePrcentPrice
let allServicePrices


const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
}

const asking = function() {
    title = prompt(' “Как называется ваш проект?” ', 'Halograme');
    screens = prompt(' “Какие типы экранов нужно разработать?” ', 'Простые, Сложные, Интерактивные');

    do {
        screenPrice  = prompt(' “Сколько будет стоить данная работа?” ');
    } while (!isNumber(screenPrice))

    adaptive = confirm(' “Нужен ли адаптив на сайте? ” ');
}

const getAllServicePrices = function() {
    let sum = 0

    for (let i = 0; i < 2; i++) {
    let price = 0

        if( i === 0 ){
            service1 = prompt(' “Какой дополнительный тип услуги нужен?” ');
        } else if ( i === 1 ){
            service2 = prompt(' “Какой дополнительный тип услуги нужен?” ');
        }

        do {
            price = prompt('Сколько это будет стоить?');
          } while (!isNumber(price))
      
          sum += +price
      
    }
    return sum
}

const showTypeOf = function(variable) {
    console.log(variable, typeof variable);
}

const getRollbackMessage = function(price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
  } else if (price >= 15000 && price < 30000) {
    return 'Даем скидку в 5%'
  } else if (price >= 0 && price < 15000) {
    return 'Скидка не предусмотрена'
  } else {
    return 'Что-то пошло не так'
  }
}

function getFullPrice(a,b) {
    return Number(a)+Number(b)
} 

const getServicePercentPrices = function(a,b) {
    return Math.ceil(a-a*(b/100))
}

const getTitle = function() {
    return title.trim()[0].toUpperCase() + title.trim().substring(1).toLowerCase()
}


asking();
title = getTitle();
allServicePrices = getAllServicePrices();
fullPrice = getFullPrice(screenPrice,allServicePrices);
servicePrcentPrice = getServicePercentPrices(fullPrice,rollback);


showTypeOf(title);
showTypeOf(fullPrice);
showTypeOf(adaptive);

console.log(screens.length);

console.log(servicePrcentPrice);
console.log(allServicePrices);
console.log(getRollbackMessage(fullPrice));

console.log('“Стоимость верстки экранов '+ screenPrice +' рублей/ долларов/гривен/юани”' );
console.log('“Стоимость разработки сайта '+ fullPrice +' рублей/ долларов/гривен/юани”' );