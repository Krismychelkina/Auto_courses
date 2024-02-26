//3. Дан массив arr. Найдите среднее арифметическое его элементов. Проверьте задачу на массиве с элементами 12, 15, 20, 25, 59, 79. Решение должно быть написано функцией и принимать любое массив.

function ArrAverage(arr) {
    const sum = arr.reduce((acc, curr) => acc + curr, 0); //сумма всех элементов массива
    const average = sum / arr.length; //среднее арифмтического элементов массива
    return average;
}

const arr = [12, 15, 20, 25, 59, 79];
console.log("Среднее арифметическое элементов массива: [" + arr + ']: ' + ArrAverage(arr)); //35

const arr2 = [true, false];
console.log("Среднее арифметическое элементов массива: [" + arr2 + ']: ' + ArrAverage(arr2)); //0.5

const arr3 = [];
console.log("Среднее арифметическое элементов массива: [" + arr3 + ']: ' + ArrAverage(arr3)); //NaN