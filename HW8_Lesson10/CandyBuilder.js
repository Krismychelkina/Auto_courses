//На основе паттерна builder.js
class Candy {
    constructor() {
        this.name = 'Secret Sweet';
        this.flavor = 'cherry';
        this.shape = 'star';
        this.weight = 3;
    }
}

class CandyBuilder {
    constructor() {
        this.candy = new Candy();
    }
    addName(name) {
        this.candy.name = name;
        return this;
    }
    addFlavor(flavor) {
        this.candy.flavor = flavor;
        return this;
    }
    changeShape(shape) {
        this.candy.shape = shape;
        return this;
    }

     addWeight(weight) {
         this.candy.weight = weight;
         return this;
     }

    build() {
        return this.candy;
    }
}

module.exports = CandyBuilder;