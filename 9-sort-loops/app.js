//  Домашнее задание - циклы
/*
    Дан массив чисел: arr = [1, 40, -5, 10, 0]
    Написать функцию, которая сортирует данный массив при помощи циклов.

    Подсказка :
    -   Нужно использовать 2 цикла, вложенных друг в друга
    -   Нужно сравнивать и менять элементы
*/
const arr = [1, 40, -5, 10, 0];
function sortArray(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let temp = array[i];
            if (temp < array[j]) {
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

console.log(sortArray(arr));
