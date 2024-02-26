// Класс для подарка
class Gift {
    constructor() {
        this.sweets = [];
    }

    addSweet(sweet) {
        this.sweets.push(sweet);
    }

    getTotalWeight() {
        return this.sweets.reduce((total, sweet) => total + sweet.weight, 0);
    }

    sortSweetsByWeight() {
        this.sweets.sort((a, b) => a.weight - b.weight);
    }

    findSweetsByWeightRange(minWeight, maxWeight) {
        return this.sweets.filter(sweet => sweet.weight >= minWeight && sweet.weight <= maxWeight);
    }
}

module.exports = Gift;