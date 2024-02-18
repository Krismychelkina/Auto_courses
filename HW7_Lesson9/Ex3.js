// 3. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Используйте также функцию getNum, чтобы вернуть промис, который с задержкой в 5 секунд выведет случайное число от 6 до 10.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем будет дожидаться результата getNum,
// а затем найдет сумму полученных чисел и выводит на экран.

function getRandomNumber(min, max) {
return new Promise(resolve => {
    setTimeout(() => {
        const num = Math.floor(Math.random() * (max - min + 1)) + min;
        resolve(num);
    }, Math.random() * (max - min) + min);
});
};

async function sumNum() {
    const num1 = await getRandomNumber(1, 5); // Первое число от 1 до 5
    const num2 = await getRandomNumber(6, 10); // Второе число от 6 до 10
    const sum = num1 + num2

    console.log('Сложить два числа: ' + num1 + ' и ' + num2);
    console.log('Итог: ' + sum);
};
sumNum();