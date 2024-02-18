// Решить используя промисы и async/await.
// 2. Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет случайное число от 1 до 5.
// Создайте async функцию, которая с помощью await будет дожидаться результата getNum, затем возводить его в квадрат и выводить на экран.

function getNum(max,min) {
    return new Promise(resolve => {
        setTimeout(() => {
            const num = Math.floor(Math.random() * 5) + 1;
            resolve(num);
        }, 3000);
    });
};

async function squareNum() {
    const num = await getNum();
    const square = num * num;

    console.log('Возвести в квадрат: ' + num);
    console.log('Итог: ' + square);
}
squareNum();