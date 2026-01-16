/*
// задание 1
const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
 
 console.log(people.sort((a, b) => a.age - b.age));

 // Функция-правило: проверяет, является ли число положительным
function isPositive(number) {
    return number > 0;
}




// Задание 2
function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    const result = []; // Создаем пустой массив для результатов
    
    for (let i = 0; i < array.length; i++) {
        const currentElement = array[i];
        
        if (ruleFunction(currentElement)) {
            result.push(currentElement);
        }
    }
    
    return result; 
}

// Тестирование с числами
console.log(filter([3, -4, 1, 9], isPositive));


// Тестирование с объектами
const people = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(people, isMale));




//задание 3
function startTimer() {
    console.log("Таймер запущен на 30 секунд...");
    
    let secondsPassed = 0;
    const totalSeconds = 30;
    const intervalSeconds = 3;
    
    // Выводим текущую дату сразу при старте
    console.log(new Date().toLocaleString());
    
    // Создаем интервал, который будет выполняться каждые 3 секунды
    const intervalId = setInterval(function() {
        secondsPassed += intervalSeconds;
        
        // Выводим текущую дату
        console.log(new Date().toLocaleString());
        
        // Проверяем, не прошло ли уже 30 секунд
        if (secondsPassed >= totalSeconds) {
            clearInterval(intervalId); // Останавливаем интервал
            console.log("30 секунд прошло");
        }
    }, intervalSeconds * 1000); // Преобразуем секунды в миллисекунды
}

startTimer();



//Задание 4
function delayForSecond(callback) {
    //  задержка выполнения callback на 1 секунду
    setTimeout(callback, 1000);
}

delayForSecond(function () {
   console.log('Привет, Глеб!');
});



//Задание 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if(cb) {  cb(); }
    }, 1000)
}

function sayHi (name) {
    console.log(`Привет, ${name}!`); 
}

delayForSecond(() => sayHi('Глеб'));*/