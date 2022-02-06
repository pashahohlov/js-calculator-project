'use strict';


const title = document.getElementsByTagName('h1')
const button = document.getElementsByClassName('handler_btn')
const buttonTiming = document.querySelector('.screen-btn')
const percent = document.querySelectorAll('.other-items.percent')
const number = document.querySelectorAll('.other-items.number')
const range = document.querySelector('.rollback input')
const span = document.querySelector('.rollback .range-value')
const input = document.getElementsByClassName('total-input')
let screen = document.querySelectorAll('.screen')


console.log(title);
console.log(button);
console.log(buttonTiming);
console.log(percent,number);
console.log(range);
console.log(span);
console.log(input);
console.log(screen);


/*
const appData = {
  title: '',
  screens: [],
  screenPrice: 0,
  adaptive: true,
  rollback: 10,
  allServicePrices: 0,
  fullPrice: 0,
  serviePercentPrice: 0,
  services: {},
  start: function () {
    appData.asking()
    appData.addPrice()
    appData.getFullPrice()
    appData.getServicePercentPrices()
    appData.getTitle()
    
    appData.logger()
  },
  isNumber: function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
  },
  asking: function () {
    appData.title = prompt('Как называется ваш проект?', 'Калькулятор верстки')
    
    for (let i = 0; i < 2; i++) {
      let name =  prompt('Какие типы экранов нужно разработать?')
      let price = 0
      do {
        price = prompt('Сколько будет стоить данная работа?')
      } while (!appData.isNumber(price))
      appData.screens.push({id: i, name: name, price: price})
    }
    for (let i = 0; i < 2; i++) {
      let name = prompt('Какой дополнительный тип услуги нужен?')
      let price = 0
      
      do {
        price = prompt('Сколько это будет стоить?');
      } while (!appData.isNumber(price))
      appData.services[name] = +price
    }
    
    appData.adaptive = confirm('Нужен ли адаптив на сайте?');
  },
  addPrice: function () {
    for (let screen of appData.screens) {
      appData.screenPrice += +screen.price
    }
    for(let key in appData.services) {
      appData.allServicePrices += appData.services[key]
    }
  },
  getFullPrice: function () {
    appData.fullPrice =  +appData.screenPrice + appData.allServicePrices
  },
  getServicePercentPrices: function () {
    appData.serviePercentPrice =  appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
  },
  getTitle: function () {
    appData.title =  appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()
  },
  getRollbackMessage: function(price) {
    if (price >= 30000) {
      return "Даем скидку в 10%"
    } else if (price >= 15000 && price < 30000) {
      return "Даем скидку в 5%"
    } else if (price >= 0 && price < 15000) {
      return "Скидка не предусмотрена"
    } else {
      return "Что-то пошло не так"
    }
  },
  logger: function () {
    console.log("allServicePrices", appData.allServicePrices);
    console.log(appData.getRollbackMessage(appData.fullPrice));
    console.log("title",typeof appData.title);
    console.log("screenPrice",typeof appData.screenPrice);
    console.log("adaptive",typeof appData.adaptive);
    console.log("screens.length",appData.screens.length);
    console.log("screens",appData.screens);
    console.log("serviePercentPrice",appData.serviePercentPrice);
    console.log("Стоимость верстки экранов " + appData.screenPrice + " гривен и Стоимость разработки сайта " + appData.fullPrice + " гривен.");
    console.log(" ");
    console.log("↓ Свойства и методы appData ↓");
    console.log(" ");
    for (let key in appData) {
      console.log( "Ключ: " + key + " Значение: " + appData[key] );
    }
  }
}
*/