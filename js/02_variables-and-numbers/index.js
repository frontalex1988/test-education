/*
Задание 1
Запишите в переменные x и y координаты двух произвольных точек: x1, y1 — первая точка, x2, y2 — вторая точка. Вычислите площадь прямоугольника, противоположные углы которого представлены указанными точками. Выведите результат с помощью console.log.
*/

let x1 = 10;
let y1 = 2;

let x2 = -5;
let y2 = 3;

let x = Math.abs(x1 - x2);
let y = Math.abs(y1 - y2);

let s = x * y;
console.log('Площадь пр.треуг. с координатами х - ' + x + ' и у - ' + y + ' равна ' + s);


/*
Задание 2
Вычислите дробные части чисел a и b с точностью n. Выведите получившиеся числа с помощью console.log. Выведите результаты их сравнения >, <, ≥, ≤, ===, ≠ с помощью console.log.
*/

let a = 13.890123;
let b = 2.891564;
let n = 2;

let droba = Math.floor(a % 1 * Math.pow(10, n));
let drobb = Math.floor(b % 1 * Math.pow(10, n));

console.log('Дробная часть равна от числа a = ' + droba);
console.log('Дробная часть равна от числа b = ' + drobb);
console.log(droba > drobb);
console.log(droba < drobb);
console.log(droba >= drobb);
console.log(droba <= drobb);
console.log(droba === drobb);
console.log(droba !== drobb);

/*
Задание 3
Написать генератор нечётных случайных чисел в диапазоне между n и m включительно. Учесть, что n и m могут быть отрицательными, а также может быть n > m или n < m. Вывести результат с помощью console.log.
*/


let c = 1;
let m = 5;

let min = Math.min(c, m);
let max = Math.max(c, m);

let randomNumber = Math.floor(Math.random() * Math.abs(max - min) + min - 1);
let randomOddNumber = randomNumber + (1 - randomNumber % 2);

console.log(randomOddNumber);