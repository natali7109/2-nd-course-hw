//ИГРА 1.
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

// ИГРА 2. 
const mathGameConfig = {
    minNumber: 1,
    maxNumber: 20,
    maxDivisionResult: 10,
    operations: ['+', '-', '*', '/'],
    pointsPerCorrect: 10,
    gameTime: 45 // секунд
};

// Переменные состояния игры
let mathGameScore = 0;
let mathGameCorrect = 0;
let mathGameIncorrect = 0;
let mathGameTimer = null;
let mathGameTimeLeft = 0;
let isMathGameActive = false;

// Функция запуска игры
function startMathGame() {
    if (isMathGameActive) {
        const continueGame = confirm("Игра уже запущена. Хотите начать заново?");
        if (!continueGame) return;
    }
    
    resetMathGame();
    isMathGameActive = true;
    mathGameTimeLeft = mathGameConfig.gameTime;
    
    // Показываем правила
    showMathGameRules();
    
    // Запускаем таймер
    startMathGameTimer();
    
    // Начинаем первый раунд
    setTimeout(() => mathGameRound(), 500);
}

// Функция показа правил
function showMathGameRules() {
    alert(`🎯 ПРАВИЛА ИГРЫ "ПРОСТАЯ АРИФМЕТИКА":

• Вам будут предложены арифметические задачи
• Задачи включают: сложение (+), вычитание (-), умножение (×) и деление (÷)
• Числа от 1 до 20, деление только с целыми результатами
• На решение каждой задачи - неограниченное время
• Но общее время игры: ${mathGameConfig.gameTime} секунд
• За каждый правильный ответ: +${mathGameConfig.pointsPerCorrect} очков

Удачи! Нажмите ОК, чтобы начать!`);
}

// Функция раунда игры
function mathGameRound() {
    if (!isMathGameActive || mathGameTimeLeft <= 0) {
        endMathGame();
        return;
    }
    
    // Генерируем задачу
    const problem = generateMathProblem();
    const displayOperation = getDisplayOperation(problem.operation);
    const problemText = `${problem.num1} ${displayOperation} ${problem.num2} = ?`;
    
    // Запрашиваем ответ
    let userAnswer = prompt(problemText + "\n\nВведите ответ (или 'стоп' для завершения):");
    
    // Проверяем, хочет ли пользователь выйти
    if (userAnswer === null || userAnswer.toLowerCase() === 'стоп') {
        const confirmExit = confirm("Вы уверены, что хотите закончить игру?");
        if (confirmExit) {
            endMathGame();
            return;
        } else {
            // Продолжаем игру с той же задачей
            setTimeout(() => mathGameRound(), 100);
            return;
        }
    }
    
    // Проверяем ответ
    checkMathAnswer(userAnswer, problem);
    
    // Продолжаем следующий раунд
    setTimeout(() => mathGameRound(), 100);
}

// Генерация задачи
function generateMathProblem() {
    let num1, num2, operation, correctAnswer;
    let isValid = false;
    
    while (!isValid) {
        // Выбираем случайную операцию
        operation = mathGameConfig.operations[
            Math.floor(Math.random() * mathGameConfig.operations.length)
        ];
        
        switch(operation) {
            case '+':
                num1 = getRandomInt(mathGameConfig.minNumber, mathGameConfig.maxNumber);
                num2 = getRandomInt(mathGameConfig.minNumber, mathGameConfig.maxNumber);
                correctAnswer = num1 + num2;
                isValid = true;
                break;
                
            case '-':
                num1 = getRandomInt(mathGameConfig.minNumber, mathGameConfig.maxNumber);
                num2 = getRandomInt(mathGameConfig.minNumber, mathGameConfig.maxNumber);
                // Чтобы результат не был отрицательным
                if (num1 < num2) [num1, num2] = [num2, num1];
                correctAnswer = num1 - num2;
                isValid = true;
                break;
                
            case '*':
                num1 = getRandomInt(mathGameConfig.minNumber, mathGameConfig.maxNumber);
                num2 = getRandomInt(mathGameConfig.minNumber, Math.min(10, mathGameConfig.maxNumber));
                correctAnswer = num1 * num2;
                isValid = true;
                break;
                
            case '/':
                // Генерируем деление с целым результатом
                correctAnswer = getRandomInt(1, mathGameConfig.maxDivisionResult);
                num2 = getRandomInt(1, 10);
                num1 = correctAnswer * num2;
                if (num1 <= mathGameConfig.maxNumber) isValid = true;
                break;
        }
    }
    
    return {
        num1: num1,
        num2: num2,
        operation: operation,
        correctAnswer: correctAnswer,
        text: `${num1} ${getDisplayOperation(operation)} ${num2}`
    };
}

// Получение символа операции для отображения
function getDisplayOperation(operation) {
    switch(operation) {
        case '+': return '+';
        case '-': return '-';
        case '*': return '×';
        case '/': return '÷';
        default: return operation;
    }
}

// Проверка ответа
function checkMathAnswer(userAnswer, problem) {
    const userNumber = parseFloat(userAnswer.replace(',', '.'));
    
    if (isNaN(userNumber)) {
        mathGameIncorrect++;
        alert("❌ Ошибка! Нужно ввести число!");
        return;
    }
    
    const tolerance = 0.01; // Допуск для дробных чисел
    
    if (Math.abs(userNumber - problem.correctAnswer) < tolerance) {
        mathGameScore += mathGameConfig.pointsPerCorrect;
        mathGameCorrect++;
        
        // Показываем результат с задержкой
        setTimeout(() => {
            alert(`✅ ПРАВИЛЬНО!\n\n${problem.text} = ${problem.correctAnswer}\n\n+${mathGameConfig.pointsPerCorrect} очков\nВсего очков: ${mathGameScore}`);
        }, 50);
    } else {
        mathGameIncorrect++;
        
        // Показываем правильный ответ
        setTimeout(() => {
            alert(`❌ НЕПРАВИЛЬНО!\n\n${problem.text} = ${problem.correctAnswer}\nВаш ответ: ${userNumber}\n\nПравильный ответ: ${problem.correctAnswer}`);
        }, 50);
    }
    
    // Обновляем статистику на странице (если есть элементы)
    updateMathGameStats();
}

// Обновление статистики на странице
function updateMathGameStats() {
    // Если на странице есть элементы для отображения статистики
    const scoreElement = document.getElementById('math-game-score');
    const correctElement = document.getElementById('math-game-correct');
    const incorrectElement = document.getElementById('math-game-incorrect');
    const timeElement = document.getElementById('math-game-time');
    
    if (scoreElement) scoreElement.textContent = mathGameScore;
    if (correctElement) correctElement.textContent = mathGameCorrect;
    if (incorrectElement) incorrectElement.textContent = mathGameIncorrect;
    if (timeElement) timeElement.textContent = mathGameTimeLeft;
}

// Таймер игры
function startMathGameTimer() {
    if (mathGameTimer) clearInterval(mathGameTimer);
    
    mathGameTimer = setInterval(() => {
        if (!isMathGameActive) {
            clearInterval(mathGameTimer);
            return;
        }
        
        mathGameTimeLeft--;
        updateMathGameStats();
        
        if (mathGameTimeLeft <= 0) {
            clearInterval(mathGameTimer);
            endMathGame();
        }
        
        // Предупреждение о скором окончании времени
        if (mathGameTimeLeft === 10) {
            setTimeout(() => {
                if (isMathGameActive) {
                    alert("⏰ Внимание! Осталось 10 секунд!");
                }
            }, 100);
        }
    }, 1000);
}

// Завершение игры
function endMathGame() {
    isMathGameActive = false;
    if (mathGameTimer) clearInterval(mathGameTimer);
    
    // Итоговое сообщение
    setTimeout(() => {
        const accuracy = mathGameCorrect + mathGameIncorrect > 0 
            ? Math.round((mathGameCorrect / (mathGameCorrect + mathGameIncorrect)) * 100) 
            : 0;
        
        const message = `🎮 ИГРА ЗАВЕРШЕНА!\n\n📊 РЕЗУЛЬТАТЫ:\n` +
                       `• Набрано очков: ${mathGameScore}\n` +
                       `• Правильных ответов: ${mathGameCorrect}\n` +
                       `• Неправильных ответов: ${mathGameIncorrect}\n` +
                       `• Точность: ${accuracy}%\n\n` +
                       (mathGameTimeLeft <= 0 ? "⏰ Время вышло!" : "🏁 Игра завершена!") +
                       `\n\nСпасибо за игру!`;
        
        alert(message);
        
        // Предлагаем сыграть еще раз
        setTimeout(() => {
            const playAgain = confirm("Хотите сыграть еще раз?");
            if (playAgain) startMathGame();
        }, 500);
    }, 300);
}

// Сброс игры
function resetMathGame() {
    mathGameScore = 0;
    mathGameCorrect = 0;
    mathGameIncorrect = 0;
    mathGameTimeLeft = mathGameConfig.gameTime;
    isMathGameActive = false;
    
    if (mathGameTimer) {
        clearInterval(mathGameTimer);
        mathGameTimer = null;
    }
    
    updateMathGameStats();
}

// Вспомогательная функция для получения случайного целого числа
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для отображения текущей статистики в alert
function showMathGameStats() {
    const accuracy = mathGameCorrect + mathGameIncorrect > 0 
        ? Math.round((mathGameCorrect / (mathGameCorrect + mathGameIncorrect)) * 100) 
        : 0;
    
    alert(`📊 ТЕКУЩАЯ СТАТИСТИКА:\n\n` +
          `• Очки: ${mathGameScore}\n` +
          `• Правильно: ${mathGameCorrect}\n` +
          `• Неправильно: ${mathGameIncorrect}\n` +
          `• Точность: ${accuracy}%\n` +
          `• Осталось времени: ${mathGameTimeLeft} сек.`);
}

