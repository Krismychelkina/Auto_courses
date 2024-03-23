// Класс для шоколада

const Sweet = require('./Sweet');

class Chocolate extends Sweet {
    constructor(name, weight, cocoaPercentage) {
        super(name, weight);
        this.cocoaPercentage = cocoaPercentage;
    }
}

module.exports = Chocolate;