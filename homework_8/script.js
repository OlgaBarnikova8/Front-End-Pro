// 1. Переписать функцию sumTwoSmallestNumbers (из практического занятия). 
// Данная функция должна принимать неограниченное кол-во аргументов и 
// возвращать сумму двух наименьших чисел для заданного массива.
// Если передано меньше 2х аргументов - то должна вывестись ошибка (в консоль) и 
// функция не должна продолжать выполнение.
//1) найти 2 наименьших числа
//2) найти их сумму
//3) вівести ошибку в консоль
function sumTwoSmallestNumbers(...args) {
    if (args.length <= 1) {
        return console.error('передано меньше 2х аргументов')
    } else {
    let arr = args.sort((a, b) => a - b);    
    let sum = arr[0] + arr[1];   

    return sum;
   }    
}

console.log(sumTwoSmallestNumbers(19, 5, 42, 2, 77)); // 7
console.log(sumTwoSmallestNumbers(1, 3, 2)); // 3
console.log(sumTwoSmallestNumbers(1)); // undefined и отдельный console.error("...")


// 2. Написать функцию createCalculator, чтобы ее можно было использовать таким образом:
// Для реализации необходимо использовать замыкание.
// Подсказка 1: функция может возвращать любой тип данных
// Подсказка 2: в значении ключа объекта может быть функция (как мы разбирали в примере с функция calc)
const operations = {
    "sum": (a, b) => a + b,
    "sub": (a, b) => a - b,
    "mult": (a, b) => a * b,
    "div": (a, b) => a / b
  };
//const operationFunction = operations[operator];

function createCalculator(number) {
    let result = number;

    return {
        sum: (n) => result += n,   
        sub: (n) => result -= n,    
        mult: (n) => result *= n,
        div: (n) => result /= n, 
    };
}

const calc = createCalculator(10);
console.log(calc.sum(5)); /// 15
console.log(calc.mult(10)); // 150
console.log(calc.sub(40)); // 110
console.log(calc.div(10)); // 11
