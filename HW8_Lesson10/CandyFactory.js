// На основе паттерна factoryMethod.js
class Candy {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

class CandyFactory {
    createCandy(name) {
        if (name.toLowerCase() === 'lollipop') {
            return new Candy(name, 10);
        }
        if (name.toLowerCase() === 'gummy bear') {
            return new Candy(name, 4);
        }
    }
}

module.exports = CandyFactory;