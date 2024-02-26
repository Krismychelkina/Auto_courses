//1. Подсчитать количество Пятниц 13-ого с любого заданного числа прошлого (например с 01.01.2000) до сегодня.Ваш код должен иметь возможность считать количество дней на любую заданную в переменной первоначальную дату и считать верно через 10-15-20 лет. Решение должно быть написано функцией.

function friday13s(startDate) {
    let start = new Date(startDate);
    let today = new Date();
    let count = 0;

    while (start <= today) {
        if (start.getDate() === 13 && start.getDay() === 5) {
            count++;
        }
        start.setDate(start.getDate() + 1);
    }
    return count;
}

let startDate = new Date(Date.UTC(2000, 0, 1));
console.log('Количество пятниц 13-го с ' + startDate.toUTCString() + ' до сегодня:' + friday13s(startDate));