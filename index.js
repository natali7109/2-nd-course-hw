/*
let password = "пароль" ;
let inputPassword = prompt ("Введите пароль");
inputPassword = inputPassword.toLocaleLowerCase();
if (inputPassword === password) {
    alert ("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

let c = 3;
if (c > 0 && c < 10){
    alert ("Верно");
} else {
    alert ("Неверно");
}

let c = 0;
if (c > 0 && c < 10){
    alert ("Верно");
} else {
    alert ("Неверно");
}

let c = 10;
if (c > 0 && c < 10){
    alert ("Верно");
} else {
    alert ("Неверно");
}

let c = -3;
if (c > 0 && c < 10){
    alert ("Верно");
} else {
    alert ("Неверно");
}

let c = 2;
if (c > 0 && c < 10){
    alert ("Верно");
} else {
    alert ("Неверно");
}

let d = 50;
let e = 150;
if (d > 100 || e > 100) {
    console.log ("Верно");
} else {
    console.log ("Неверно");
}

let a = "2";
let b = "3";
alert (Number(a) + Number(b));


let monthNumber = prompt("Введите номер месяца");
let month = Number(monthNumber);
switch (month) {
    case 12: case 1: case 2:
        alert("Зима");
        break;
    case 3: case 4: case 5:
        alert("Весна");
        break;
    case 6: case 7: case 8:
        alert("Лето");
        break;
    case 9: case 10: case 11:
        alert("Осень");
        break;
    default:
        alert("Неверный номер месяца");
}

let input = prompt("Пожалуйста, введите любое число");
let number = Number(input);
if (isNaN(number)) {
    alert("Это не число!");
} else {
    if (number % 2 === 0) {
        alert("Вы ввели: " + number + " (четное число)");
    } else {
        alert("Вы ввели: " + number + " (нечетное число)");
    }
}

let clientOS;
if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    clientOS = 0; 
} else if (/Android/.test(navigator.userAgent)) {
    clientOS = 1; 
} else {
    clientOS = 1; 
}
if (clientOS === 0) {
    console.log ("Установите версию приложения для iOS по ссылке");
} else {
    console.log ("Установите версию приложения для Android по ссылке");
}


let clientOS = 0; 
let clientDeviceYear = 2015; 
let appType = clientDeviceYear >= 2015 ? "" : "облегченную версию ";
let osName = clientOS === 0 ? "iOS" : "Android";
let message = `Установите ${appType}приложения для ${osName} по ссылке`;
console.log(message);*/

