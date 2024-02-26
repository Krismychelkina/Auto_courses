//2. Напишите код который будет разбивать число на заданное количество рандомных чисел сумма которых будет равна изначальному числу. Пример: разбить 15 на 3 части (сумма четырех чисел будет равна 15) (4,6,5) - Ваш код должен работать с любым числом заданным в переменной (не только с 15) и с любым количеством частей на которые надо разбить число.
//б. числа разбивки дробные с 2 знаками после запятой (4.55, 5.20, 5.25)

let value          = 15;
let n = 3;
let parts      = [];
console.log('Итог разбития числа ' + value + ' на ' + n + ' части/ей с 2 знаками после запятой: ');

for (let i = 1; i <= n; i ++) {
    if (i === n) {
        parts.push(value);
        break;
    }
    let part = (Math.random() * value).toFixed(2);
    parts.push(part);
    value -= part;
    value = value.toFixed(2); // Если это убрать, то последнее число массива может быть с большим количеством знаков после запятой
}

console.log(parts);