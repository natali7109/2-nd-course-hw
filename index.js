/*
function findLeast(a, b) {
    return a < b ? a : b;
}

console.log("findLeast(8, 4) =", findLeast(8, 4));    
console.log("findLeast(6, 6) =", findLeast(6, 6));


const checkРarity = (number) => 
    number % 2 === 0 ? 'Число четное' : 'Число нечетное';

console.log(checkРarity(2));   
console.log(checkРarity(3)); 


function squareNumber(number) {
    console.log(number * number);
}

console.log("Квадрат числа:");
squareNumber(25); 
squareNumber(52); 



const returnSquareNumber = number => number * number;



let age = prompt("Сколько Вам лет?");
alert(age);

let c = parseInt(age);
if (c > 0 && c < 12) {
    alert("Привет, друг!");
} else if (c >= 13) {
    alert("Добро пожаловать!");
} else if (c < 0) {
    alert("Вы ввели неправильное значение");
}


function controlNumber(a, b) {
    const num1 = Number(a);
    const num2 = Number(b);
    
    if (isNaN(num1) || isNaN(num2)) {
        return 'Одно или оба значения не являются числом';
    }
    return num1 * num2;
}

console.log(controlNumber(2.5, 4));      
console.log(controlNumber("3", "4"));  
console.log(controlNumber("ямал", 3));    
console.log(controlNumber("5", "xyz"));



let age = prompt("Введите число");

function cubeNumber(n) {
    let num = parseFloat(n); 
    
    if (isNaN(num)) {
        return 'Переданный параметр не является числом';
    }
    
    const cube = num * num * num;
    return `${num} в кубе равняется ${cube}`;
}

let result = cubeNumber(age);
alert(result);


const circle1 = {
    radius: 3,
    getArea: function() {
        return 3.14 * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * 3.14 * this.radius;
    }
};

const circle2 = {
    radius: 5,
    getArea: function() {
        return 3.14 * this.radius * this.radius;
    },
    getPerimeter: function() {
        return 2 * 3.14 * this.radius;
    }
};

console.log(circle1.getArea());      
console.log(circle1.getPerimeter()); 

console.log(circle2.getArea());      
console.log(circle2.getPerimeter());*/


/*
const guessNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;
let isGuessed = false;

alert("Добро пожаловать в игру 'Угадай число'! Я загадал число от 1 до 100. Попробуй угадать!");

while (!isGuessed) {
    let userGuess = parseInt(prompt("Введите ваше предположение:"));
    attempts++;
    
    if (isNaN(userGuess)) {
        alert("Пожалуйста, введите число!");
        continue;
    }
    
    if (userGuess === guessNumber) {
        isGuessed = true;
        alert(`Поздравляю! Вы угадали число ${guessNumber} за ${attempts} попыток!`);
    } 
    else if (userGuess < guessNumber) {
        alert("Загаданное число БОЛЬШЕ вашего предположения");
    } 
    else {
        alert("Загаданное число МЕНЬШЕ вашего предположения");
    }
}*/

function guessNumberGame() {
    const secretNumber = Math.floor(Math.random() * 100) + 1;
    let attempts = 0;
    
    while (true) {
        let userInput = prompt("Введите число от 1 до 100:");
        
        if (userInput === null) {
            alert("Игра прервана пользователем");
            return;
        }
        
        let userGuess = parseInt(userInput);
        attempts++;
        
        if (isNaN(userGuess)) {
            alert("Пожалуйста, введите число!");
            continue;
        }
        
        if (userGuess === secretNumber) {
            alert(`🎉 Поздравляю! Вы угадали число ${secretNumber} за ${attempts} попыток!`);
            return;
        } 
        else if (userGuess < secretNumber) {
            alert("🔼 Больше!");
        } 
        else {
            alert("🔽 Меньше!");
        }
    }
}

