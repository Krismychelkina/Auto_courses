//2. Напишите функцию, которая вставит данные в массив с заданного места в массиве. Например дан массив [1, 2, 3, 4, 5] в функцию передается место 3 и [ 'a', 'b', 'c'] получается массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

function addToArr(arr, index, newData) {
    let resultArr = arr.slice(0, index);
    resultArr = resultArr.concat(newData, arr.slice(index));
    return resultArr;
}
let arr = [1, 2, 3, 4, 5];
let index = 3;
let newData = ['a', 'b', 'c'];
console.log(addToArr(arr, index, newData)); //Вернет [1, 2, 3, 'a', 'b', 'c', 4, 5]