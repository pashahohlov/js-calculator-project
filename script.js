'use strict';


const appData = {
    title: '',
    adaptive: true,
    screens: [],
    screenPrice: 0,
    rollback: 65,
    services: {},
    fullPrice: 0,
    servicePrcentPrice: 0,
    allServicePrices: 0,

    start: function () {
        appData.asking();
        appData.getTitle();
        appData.addPrice();
        appData.getFullPrice(appData.screenPrice,appData.allServicePrices);
        appData.getServicePercentPrices(appData.fullPrice,appData.rollback);

        appData.logger()
      },

    asking: function() {
        appData.title = prompt(' “Как называется ваш проект?” ', 'Halograme');

    for (let i = 0; i < 2; i++) {
        let name =  prompt(' "Какие типы экранов нужно разработать?" ')
        let price = 0
    
        do {
          price = prompt(' "Сколько будет стоить данная работа?" ')
        } while (!appData.isNumber(price))
    
        appData.screens.push({id: i, name: name, price: price})
      }

    for (let i = 0; i < 2; i++) {
        let name =  prompt(' “Какой дополнительный тип услуги нужен?” ');
        let price = 0;
    
    
            do {
                price = prompt('Сколько это будет стоить?');
              } while (!appData.isNumber(price))
          
            appData.services[name] = price;
        }
    
        appData.adaptive = confirm(' “Нужен ли адаптив на сайте? ” ');
    },

    isNumber: function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num)
    },

    addPrice: function () {
        for (let screen of appData.screens) {
          appData.screenPrice += +screen.price
        }
    
        for(let key in appData.services) {
          appData.allServicePrices += appData.services[key]
        }
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
        appData.fullPrice = Number(a)+Number(b)
    },
    
    getServicePercentPrices: function(a,b) {
        appData.servicePrcentPrice = Math.ceil(a-a*(b/100))
    },
    
    getTitle: function() {
        appData.title = appData.title.trim()[0].toUpperCase() + appData.title.trim().substring(1).toLowerCase()
    },
    logger: function() {    
    console.log('title: ',typeof appData.title);
    console.log('screenPrice: ',typeof appData.screenPrice);
    console.log('adaptive: ',typeof appData.adaptive);

    console.log('screensLength: ',appData.screens.length);
    console.log('screens: ',appData.screens);


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