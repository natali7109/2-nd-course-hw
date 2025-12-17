/*
// Задание 1
let str = 'js';
let result1 = str.toUpperCase();
console.log(result1); 

//Задание 2
function filterStringsByPrefix(arr, prefix) {
    const lowerPrefix = prefix.toLowerCase();
    
    return arr.filter(str => {
        return str.toLowerCase().startsWith(lowerPrefix);
    });
}

const fruits = ['apple', 'banana', 'apricot', 'orange', 'Avocado', 'APPLE'];

console.log(filterStringsByPrefix(fruits, 'ap')); 

console.log(filterStringsByPrefix(fruits, 'b')); 

console.log(filterStringsByPrefix(fruits, 'o')); 

console.log(filterStringsByPrefix(fruits, 'x')); 

console.log(filterStringsByPrefix([], 'test')); 

console.log(filterStringsByPrefix(fruits, '')); 


//Задание 3
const number = 32.58884;

const roundedDown = Math.floor(number);
console.log(`До меньшего целого: ${roundedDown}`); 

const roundedUp = Math.ceil(number);
console.log(`До большего целого: ${roundedUp}`); 

const rounded = Math.round(number);
console.log(`До ближайшего целого: ${rounded}`);


//задание 4
const numbersArray = [52, 53, 49, 77, 21, 32];
const min = Math.min(...numbersArray);
const max = Math.max(...numbersArray);

console.log(`Минимальное: ${min}`);
console.log(`Максимальное: ${max}`);


//Задание 5
function getRandomNumber() {
    const randomNum = Math.floor(Math.random() * 10) + 1;
    console.log(randomNum);
    return randomNum;
}
getRandomNumber();


//Задание 6
function generateRandomArray(n) {
    if (!Number.isInteger(n) || n <= 0) {
        console.error('Ошибка: n должно быть положительным целым числом');
        return [];
    }
    
    const arrayLength = Math.floor(n / 2);
    
    const resultArray = [];
    
    for (let i = 0; i < arrayLength; i++) {
        const randomNumber = Math.floor(Math.random() * (n + 1));
        resultArray.push(randomNumber);
    }
    
    return resultArray;
}

console.log(generateRandomArray(10));
console.log(generateRandomArray(6));



//Задание 7
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(getRandomInRange(1, 5));  
console.log(getRandomInRange(5, 10));  
console.log(getRandomInRange(-10, 10));



//Задание 8
const currentDate = new Date();
console.log(currentDate);



//Задание 9
const currentDate = new Date();
console.log('Текущая дата:', currentDate);

const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);

console.log('Дата через 73 дня:', futureDate);




//Задание 10
function formatRussianDateTime(date) {
    if (!(date instanceof Date) || isNaN(date.getTime())) {
        throw new Error('Некорректная дата');
    }
    
    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    
    const weekdays = [
        'воскресенье', 'понедельник', 'вторник', 'среда',
        'четверг', 'пятница', 'суббота'
    ];
    
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const weekday = weekdays[date.getDay()];
    
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');
    
    return `Дата: ${day} ${month} ${year} — это ${weekday}.\nВремя: ${hours}:${minutes}:${seconds}`;
}

console.log(formatRussianDateTime(new Date('2023-03-08')));
*/