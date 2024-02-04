// 1) Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
console.log('Exersise 1');
console.log('cat' + true);//cattrue
console.log(false + 'cat');//falsecat

console.log('cat' + 15);//cat15
console.log(1 + 'one');//1one

console.log(0 + true);//1
console.log(9 + false);//9
console.log(false + 0);//0
console.log(true + 14);//15

//Эскперименты в рамках задания 1
console.log(true + '14');//true14
console.log('true' + 14);//true14
console.log(1 + false + 'cat');//1cat
console.log(true + 1 + 'cat');//2cat
console.log('cat' + true + 1);//cattrue1

// 2) Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
console.log('Exersise 2');
console.log('cat' * true);//NaN
console.log(false * 'cat');//NaN

console.log('cat' * 15);//NaN
console.log(1 * 'one');//NaN

console.log(0 * true);//0
console.log(9 * false);//0
console.log(false * 0);//0
console.log(true * 14);//14

//Эскперименты в рамках задания 2
console.log(15 * -11);//-165
console.log(-2 * -1);//2
console.log(2n * 2n);//4n
console.log(-2n * 2n);//-4n
console.log(Infinity * 0);//NaN
console.log(Infinity * 1);//Infinity
console.log(10 * Infinity);//Infinity
//console.log(-2n * 2); //Cannot mix BigInt and other types, use explicit conversions
//console.log(-2n * 'n'); //Cannot mix BigInt and other types, use explicit conversions

// 3) Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
console.log('Exersise 3');
console.log('cat'/true);//NaN
console.log(false/'cat');//NaN

console.log('cat'/3);//NaN
console.log(8/'one');//NaN

console.log(8/true);//8
console.log(0/true);//0
console.log(9/false);//Infinity
console.log(false/0);//NaN
console.log(false/2);//0
console.log(true/14);//0.07...

// 4) Выполнить явное преобразование(number, string, boolean)
console.log('Exersise 4');
let value1 = true;
console.log('Before changes: value1 is ' + value1 + ', type is ' + typeof value1);
value1 = String(value1);
console.log('After changes: value1 is ' + value1 + ', type is ' + typeof value1);

let value2 = 15;
console.log('Before changes: value2 is ' + value2 + ', type is ' + typeof value2);
value2 = String(value2);
console.log('After changes: value2 is ' + value2 + ', type is ' + typeof value2);

let value3 = 1;
console.log('Before changes: value3 is ' + value3 + ', type is ' + typeof value3);
value3 = Boolean(value3);
console.log('After changes: value3 is ' + value3 + ', type is ' + typeof value3);

let value4 = 'cat'
console.log('Before changes: value4 is ' + value4 + ', type is ' + typeof value4);
value4 = Boolean(value4);
console.log('After changes: value4 is ' + value4 + ', type is ' + typeof value4);

let value5 = ''
console.log('Before changes: value5 is ' + value5 + ', type is ' + typeof value5);
value5 = Boolean(value5);
console.log('After changes: value5 is ' + value5 + ', type is ' + typeof value5);

let value6 = true;
console.log('Before changes: value6 is ' + value6 + ', type is ' + typeof value6);
value6 = Number(value6);
console.log('After changes: value6 is ' + value6 + ', type is ' + typeof value6);