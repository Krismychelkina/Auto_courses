// Решить используя промисы и async/await.
// 1. Сделайте 3 промиса, в каждом из которых расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.С помощью Promise.race дождитесь загрузки
// первого сработавшего промиса и выведите результат его работы на экран.

function delay(timeout) {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
async function run() {
    const startTime = Date.now();

    const promises = [
        delay(Math.random() * 4000 + 1000).then(() => 1),
        delay(Math.random() * 4000 + 1000).then(() => 2),
        delay(Math.random() * 4000 + 1000).then(() => 3)
    ];
    const result = await Promise.race(promises);
    const endTime = Date.now();

    console.log('Результат первого сработавшего промиса: ' + result );
    console.log('Задержка: ' + (endTime - startTime) + ' миллисекунд');
};
run();