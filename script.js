'use strict';


const appData = {
    title: '',
    adaptive: true,
    screens: '',
    screenPrice: 0,
    rollback: 65,
    service1: '',
    service2: '',
    fullPrice: 0,
    servicePrcentPrice: 0,
    allServicePrices: 0,

    start: function () {
        appData.asking();
        appData.title = appData.getTitle();
        appData.allServicePrices = appData.getAllServicePrices();
        appData.fullPrice = appData.getFullPrice(appData.screenPrice,appData.allServicePrices);
        appData.servicePrcentPrice = appData.getServicePercentPrices(appData.fullPrice,appData.rollback);

        appData.logger()
      },

    asking: function() {
        appData.title = prompt(' “Как называется ваш проект?” ', 'Halograme');
        appData.screens = prompt(' “Какие типы экранов нужно разработать?” ', 'Простые, Сложные, Интерактивные');
    
        do {
            appData.screenPrice  = prompt(' “Сколько будет стоить данная работа?” ');
        } while (!appData.isNumber(appData.screenPrice))
    
        appData.adaptive = confirm(' “Нужен ли адаптив на сайте? ” ');
    },

    isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
    },
    
    getAllServicePrices: function() {
    let sum = 0

    for (let i = 0; i < 2; i++) {
    let price = 0

        if( i === 0 ){
            appData.service1 = prompt(' “Какой дополнительный тип услуги нужен?” ');
        } else if ( i === 1 ){
            appData.service2 = prompt(' “Какой дополнительный тип услуги нужен?” ');
        }

        do {
            price = prompt('Сколько это будет стоить?');
          } while (!appData.isNumber(price))
      
          sum += +price
      
    }
    return sum
    },

    getRollbackMessage: function(price) {
    if (price >= 30000) {
        return 'Даем скидку в 10%'
      } else if (price >= 15000 && price < 30000) {
        return 'Даем скидку в 5%'
      } else if (price >= 0 && price < 15000) {
        return 'Скидка не предусмотрена'
      } else {
        return 'Что-то пошло не так'
      }
    },

    getFullPrice: function(a,b) {
        return Number(a)+Number(b)
    },
    
    getServicePercentPrices: function(a,b) {
        return Math.ceil(a-a*(b/100))
    },
    
    getTitle: function() {
        return appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()
    },
    logger: function() {    
    console.log('title: ',typeof appData.title);
    console.log('screenPrice: ',typeof appData.screenPrice);
    console.log('adaptive: ',typeof appData.adaptive);

    console.log('screens: ',appData.screens.length);

    console.log('servicePrcentPrice: ',appData.servicePrcentPrice);
    console.log('allServicePrices: ',appData.allServicePrices);
    console.log(appData.getRollbackMessage(appData.fullPrice));

    console.log('“Стоимость верстки экранов '+ appData.screenPrice +' рублей/долларов/гривен/юани”' );
    console.log('“Стоимость разработки сайта '+ appData.fullPrice +' рублей/долларов/гривен/юани”' );

        console.log(' Свойства appData ')
        for (let key in appData) {
            console.log( "Ключ: " + key + " Значение: " + appData[key] );
        }
    }
}


appData.start();