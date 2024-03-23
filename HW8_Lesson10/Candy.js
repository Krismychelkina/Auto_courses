// Класс для конфет

const Sweet = require('./Sweet');

class Candy extends Sweet {
    constructor(name, weight, flavor) {
        super(name, weight);
        this.flavor = flavor;
    }
}

module.exports = Candy;