//Для паттерна CandyBuilder
const CandyBuilder = require('./CandyBuilder');

let candy3 = new CandyBuilder().addName('Sour Worms').addFlavor('lemon').changeShape('long').addWeight(2).build();
let candy4 = new CandyBuilder().build();

//Для паттерна CandyFactory
const CandyFactory = require('./CandyFactory');

const factory = new CandyFactory();

const lollipop = factory.createCandy('Lollipop');
const gummyBear = factory.createCandy('Gummy Bear');

//Определить иерархию конфет и прочих сладостей.
//Создать несколько объектов-конфет.
const Candy = require('./Candy');
const Chocolate = require('./Chocolate');
const Gift = require('./Gift');

const candy1 = new Candy('Jelly', 10, 'orange');
const candy2 = new Candy('Jelly', 15, 'strawberry');
const chocolate1 = new Chocolate('Dark Chocolate', 50, 70);
const chocolate2 = new Chocolate('Milk Chocolate', 40, 40);

//Создаю подарок и добавляю в него сладости выше + сладости, созданные на основе паттернов
const gift = new Gift();
gift.addSweet(candy1);
gift.addSweet(candy2);
gift.addSweet(chocolate1);
gift.addSweet(chocolate2);
gift.addSweet(candy3); //из CandyBuilder
gift.addSweet(candy4); //из CandyBuilder
gift.addSweet(lollipop);  //из CandyFactory
gift.addSweet(gummyBear);  //из CandyFactory

//Собрать детский подарок с определением его веса.
//Провести сортировку конфет в подарке на основе одного из параметров. - Сортировала на основе веса
//Найти конфету в подарке, соответствующую заданному диапазону параметров. - Нашла конфету с весом 4 гр
console.log('Вес подарка: ' + gift.getTotalWeight() + 'гр.');
gift.sortSweetsByWeight();
console.log("Конфеты/шоколад из подарка, отсортированные по весу (от min к max): ", gift);
console.log("Конфета/шоколад с весом 4гр.: ", gift.findSweetsByWeightRange(4, 4));