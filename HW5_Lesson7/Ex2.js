//2. Дана строка из четного количества цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'. Решение должно быть написано функцией и принимать любое число.

function EqualSum(str) {
    let digits = str.split('').map(Number);
    let firstSum = digits.slice(0, 3).reduce((acc, curr) => acc + curr, 0); //сумма первых трех цифр
    let secondSum = digits.slice(3).reduce((acc, curr) => acc + curr, 0); //сумма вторых трех цифр
    return firstSum === secondSum ? 'да' : 'нет';
}

let number = '122113';
console.log(EqualSum(number)); //да

let number2 = '123456';
console.log(EqualSum(number2)); //нет