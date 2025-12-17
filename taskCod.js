//задание 1
/*const arr = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
    if (arr[i] === 10) {
        break; 
    }
}


//задание 2
const arr = [1, 5, 4, 10, 0, 3];
const index = arr.indexOf(4);
console.log(index);


//задание 3
const arr = [1, 3, 5, 10, 20];
console.log(arr.join(" "));


//задание 4
const result = [];

for (let i = 0; i < 3; i++) {
    result.push([]); 
    for (let j = 0; j < 3; j++) {
        result[i].push(1); 
    }
}

console.log(result); 


//задание 5
const arr = [1, 1, 1];
arr.push(2, 2, 2);
console.log(arr);


//задание 6
const arr = [9, 8, 7, 'a', 6, 5];
arr.sort();
const filteredArr = arr.filter(item => item !== 'a');

console.log(filteredArr); 


//задание 7
const numbers = [9, 8, 7, 6, 5];

const userGuess = prompt("Угадайте число от 1 до 10:");

if (numbers.includes(Number(userGuess))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}


//задание 8
const text = 'abcdef';
const splitText = text.split('');
const reverseText = splitText.reverse();
const joinText = reverseText.join('');

console.log(joinText);



//задание 9
const numbers = [
    [1, 2, 3],
    [4, 5, 6]
];
const result = [...numbers[0], ...numbers[1]];
console.log(result);


//задание 10
const numbers = [3, 7, 2, 9, 5, 1, 8, 4, 6, 10];

for (let i = 0; i < numbers.length; i++) {
    if (i + 1 < numbers.length) {
        const sum = numbers[i] + numbers[i + 1];

        console.log(`${numbers[i]} + ${numbers[i + 1]} = ${sum}`);
    }
}


//задание11
function getSquares(numbers) {
    return numbers.map(num => num * num);
}

const numbers = [1, 2, 3, 4, 5];
const squares = getSquares(numbers);
console.log(squares); 


//задание 12
function getStringLengths(strings) {
    return strings.map(str => str.length);
}

const words = ["apple", "cat", "javascript", "hello"];
const lengths = getStringLengths(words);
console.log(lengths); 


//задание 13
function getNegativeNumbers(numbers) {
    return numbers.filter(num => num < 0);
}

const numbers = [1, -2, 3, -4, 5, -6, 0];
const negatives = getNegativeNumbers(numbers);
console.log(negatives); // [-2, -4, -6]



// задание 14
function generateRandomArray(length, max) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.round(Math.random() * max));
    }
    return arr;
}

function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

const randomArray = generateRandomArray(10, 10);
const evenNumbersArray = getEvenNumbers(randomArray);
console.log("Сгенерированный массив:", randomArray);
console.log("Четные числа из массива:", evenNumbersArray);*/


//задание 15
const numbers = Array.from({length: 6}, () => Math.floor(Math.random() * 10) + 1);

const sum = numbers.reduce((acc, num) => acc + num, 0);
const average = sum / numbers.length;

console.log("Массив:", numbers);
console.log("Среднее арифметическое:", average);



