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




// Игра 3 "Переверни текст"

function startFlipTextGame() {
    const userText = prompt("Введите текст для переворачивания:");
    
    if (userText === null || userText.trim() === "") {
        alert("Текст не введен!");
        return;
    }
    
    // Переворачиваем текст
    const flippedText = Array.from(userText).reverse().join('');
    
    // Показываем результат
    alert(`🎯 РЕЗУЛЬТАТ:\n\n` +
          `📝 Оригинал: "${userText}"\n\n` +
          `🔄 Перевернутый текст:\n"${flippedText}"\n\n`);
    
    // Предлагаем сыграть еще раз
    const playAgain = confirm("Хотите перевернуть другой текст?");
    if (playAgain) {
        startFlipTextGame();
    }
}





// ИГРА 4 - КАМЕНЬ, НОЖНИЦЫ, БУМАГА 

// Глобальные переменные для счета
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;

// Функция для получения случайного выбора компьютера
function getComputerChoice() {
    const choices = ["камень", "ножницы", "бумага"];
    return choices[Math.floor(Math.random() * choices.length)];
}

// Функция для определения победителя
function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "ничья";
    }
    
    const winConditions = {
        "камень": "ножницы",
        "ножницы": "бумага", 
        "бумага": "камень"
    };
    
    return winConditions[userChoice] === computerChoice ? "победа" : "поражение";
}

// Основная функция игры
function playGame() {
    // Получаем выбор пользователя
    const userChoice = prompt("Выберите: камень, ножницы или бумага?").toLowerCase();
    
    // Проверка корректности ввода
    const validChoices = ["камень", "ножницы", "бумага"];
    if (!validChoices.includes(userChoice)) {
        alert("Некорректный ввод! Пожалуйста, обновите страницу и попробуйте снова.");
        return;
    }
    
    // Получаем выбор компьютера
    const computerChoice = getComputerChoice();
    
    // Определяем победителя
    const result = determineWinner(userChoice, computerChoice);
    
    // Обновляем счет
    if (result === "победа") {
        playerScore++;
    } else if (result === "поражение") {
        computerScore++;
    } else {
        drawCount++;
    }
    
    // Выводим результат со счетом
    const resultMessages = {
        "ничья": "Ничья!",
        "победа": "Вы победили!",
        "поражение": "Вы проиграли!"
    };
    
    const message = `
    Ваш выбор: ${userChoice}
    Выбор компьютера: ${computerChoice}
    
    Результат: ${resultMessages[result]}
    
    === СЧЕТ ===
    Ваши победы: ${playerScore}
    Победы компьютера: ${computerScore}
    Ничьи: ${drawCount}
    ===========`;
    
    alert(message);
    
    // Предлагаем сыграть еще раз
    const playAgain = confirm("Хотите сыграть еще раз?");
    if (playAgain) {
        playGame();
    } else {
        alert("Спасибо за игру!");
    }
}

  





// ИГРА 5 - "Простая викторина"

// Массив вопросов и правильных ответов
const quiz = [
    {
        question: "Какой цвет небо?",
        options: ["1. Красный", "2. Синий", "3. Зеленый"],
        correctAnswer: 2 // номер правильного ответа
    },
    {
        question: "Сколько дней в неделе?",
        options: ["1. Шесть", "2. Семь", "3. Восемь"],
        correctAnswer: 2
    },
    {
        question: "Сколько у человека пальцев на одной руке?",
        options: ["1. Четыре", "2. Пять", "3. Шесть"],
        correctAnswer: 2
    },
    {
        question: "Столица Франции?",
        options: ["1. Лондон", "2. Берлин", "3. Париж"],
        correctAnswer: 3
    },
    {
        question: "Самая большая планета Солнечной системы?",
        options: ["1. Земля", "2. Юпитер", "3. Сатурн"],
        correctAnswer: 2
    },
    {
        question: "Сколько сторон у квадрата?",
        options: ["1. Три", "2. Четыре", "3. Пять"],
        correctAnswer: 2
    }
];

// Переменные состояния игры
let currentQuestion = 0;
let score = 0;
let playerName = "";
let isGameActive = false;

// Функция запуска викторины
function startQuiz() {
    if (isGameActive) {
        const restart = confirm("Викторина уже запущена. Начать заново?");
        if (!restart) return;
    }
    
    resetQuiz();
    isGameActive = true;
    
    // Запрашиваем имя игрока
    getNameAndStart();
}

// Получение имени игрока
function getNameAndStart() {
    const name = prompt("🎮 ДОБРО ПОЖАЛОВАТЬ В ВИКТОРИНУ!\n\nВведите ваше имя:");
    
    if (name === null || name.trim() === "") {
        playerName = "Игрок";
        showQuizRules();
    } else {
        playerName = name.trim();
        showQuizRules();
    }
}

// Показать правила игры
function showQuizRules() {
    const rules = `🎯 ПРАВИЛА ВИКТОРИНЫ:\n\n` +
                 `Привет, ${playerName}!\n\n` +
                 `• Вам будет предложено ${quiz.length} вопросов\n` +
                 `• На каждый вопрос есть несколько вариантов ответов\n` +
                 `• Введите номер правильного ответа (1, 2 или 3)\n` +
                 `• Постарайтесь ответить на все вопросы правильно!\n\n` +
                 `Удачи! Нажмите OK, чтобы начать!`;
    
    if (confirm(rules)) {
        askQuestion();
    }
}

// Задать вопрос
function askQuestion() {
    if (currentQuestion >= quiz.length || !isGameActive) {
        endQuiz();
        return;
    }
    
    const questionData = quiz[currentQuestion];
    const questionNumber = currentQuestion + 1;
    
    // Формируем текст вопроса
    const questionText = `📝 ВОПРОС ${questionNumber} из ${quiz.length}\n\n` +
                        `${questionData.question}\n\n` +
                        questionData.options.join('\n') + '\n\n' +
                        `Введите номер ответа (1, 2 или 3):`;
    
    // Запрашиваем ответ
    const userAnswer = prompt(questionText);
    
    // Проверяем ответ
    checkAnswer(userAnswer, questionData, questionNumber);
}

// Проверить ответ
function checkAnswer(userAnswer, questionData, questionNumber) {
    // Если пользователь отменил
    if (userAnswer === null) {
        const quit = confirm("Вы уверены, что хотите выйти из викторины?");
        if (quit) {
            endQuiz();
            return;
        } else {
            askQuestion();
            return;
        }
    }
    
    const answerNum = parseInt(userAnswer);
    
    // Проверяем валидность ответа
    if (isNaN(answerNum) || answerNum < 1 || answerNum > 3) {
        alert("❌ Пожалуйста, введите номер ответа: 1, 2 или 3!");
        setTimeout(() => askQuestion(), 300);
        return;
    }
    
    // Проверяем правильность
    if (answerNum === questionData.correctAnswer) {
        score++;
        showCorrectFeedback(questionData, questionNumber);
    } else {
        showIncorrectFeedback(questionData, questionNumber);
    }
    
    // Переход к следующему вопросу
    currentQuestion++;
    setTimeout(() => askQuestion(), 1000);
}

// Показать правильный ответ
function showCorrectFeedback(questionData, questionNumber) {
    const feedback = `✅ ПРАВИЛЬНО! Вопрос ${questionNumber}\n\n` +
                    `Ваш ответ: ${questionData.correctAnswer}\n` +
                    `Правильный вариант: ${questionData.options[questionData.correctAnswer - 1]}\n\n` +
                    `🎉 +1 балл!\n` +
                    `Текущий счет: ${score} из ${questionNumber}`;
    
    alert(feedback);
}

// Показать неправильный ответ
function showIncorrectFeedback(questionData, questionNumber) {
    const correctOption = questionData.options[questionData.correctAnswer - 1];
    
    const feedback = `❌ НЕПРАВИЛЬНО! Вопрос ${questionNumber}\n\n` +
                    `Ваш ответ был неверным.\n` +
                    `Правильный ответ: ${questionData.correctAnswer} - ${correctOption}\n\n` +
                    `Текущий счет: ${score} из ${questionNumber}`;
    
    alert(feedback);
}

// Завершить викторину
function endQuiz() {
    isGameActive = false;
    
    // Расчет результатов
    const percentage = Math.round((score / quiz.length) * 100);
    let rating = "";
    let emoji = "";
    
    if (percentage === 100) {
        rating = "ОТЛИЧНО! Вы настоящий знаток!";
        emoji = "🏆🎉🌟";
    } else if (percentage >= 80) {
        rating = "ХОРОШО! Отличный результат!";
        emoji = "🎯✨";
    } else if (percentage >= 60) {
        rating = "НЕПЛОХО! Можно лучше!";
        emoji = "👍😊";
    } else if (percentage >= 40) {
        rating = "УДОВЛЕТВОРИТЕЛЬНО. Попробуйте еще раз!";
        emoji = "🤔📚";
    } else {
        rating = "НУЖНО ПОВТОРИТЬ МАТЕРИАЛ!";
        emoji = "📖💪";
    }
    
    // Итоговое сообщение
    const resultMessage = `🎮 ВИКТОРИНА ЗАВЕРШЕНА!\n\n` +
                         `👤 Игрок: ${playerName}\n\n` +
                         `📊 РЕЗУЛЬТАТЫ:\n` +
                         `• Правильных ответов: ${score} из ${quiz.length}\n` +
                         `• Процент правильных: ${percentage}%\n` +
                         `• Оценка: ${rating}\n\n` +
                         `${emoji}\n\n` +
                         `Спасибо за игру!`;
    
    alert(resultMessage);
    
    // Предлагаем сыграть еще раз
    setTimeout(() => {
        const playAgain = confirm("Хотите сыграть еще раз?");
        if (playAgain) {
            startQuiz();
        }
    }, 500);
}

// Сброс игры
function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    playerName = "";
    isGameActive = false;
}



    
