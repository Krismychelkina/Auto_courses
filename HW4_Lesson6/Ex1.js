//1. Эмулировать игру в кубики, 2 человека по очереди бросают кубик, каждый в итоге бросает одинаковое количество раз (должно работать с любым количеством раз заданным в переменной). У кого сумма трех бросков будет наибольшей - тот выиграл. Если суммы равны то ничья. Выведите результаты в консоль.

let arr = [];
let n = 6  // Задаю количество бросков

for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 6) + 1);   //Генерю массив с рандомными числами от 1 до 6, количество элементов массива = n
}

console.log('Итоги ' +  n + ' бросков = ' + arr);

let sum1 = 0;
for (let i=0; i < arr.length; i++){
    if (i % 2 === 0){
        sum1 += arr[i];
    }
}
console.log('Сумма Игрока 1: ' + sum1);  //Его броски с индексами 1,3,5 и т.д

let sum2 = 0;
for (let i=0; i < arr.length; i++){
    if (i % 2 !== 0){
        sum2 += arr[i];
    }
}
console.log('Сумма Игрока 2: ' + sum2); //Его броски с индексами 2,4,6 и т.д

if((sum1) > (sum2)){
   console.log('Игрок 1 выиграл');
}
else
    if ((sum2) > (sum1)) {
       console.log('Игрок 2 выиграл');
}
else {
    console.log('Ничья');
}