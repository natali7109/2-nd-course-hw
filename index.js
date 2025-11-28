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