// Growing Landing — лабораторная работа №6
// Основы JavaScript: переменные, типы данных, операторы и DOM

console.log('Growing Landing: JavaScript подключён');

// Этот файл подключён и к index.html, и к about.html.
// На главной нет элементов профиля, поэтому код ниже
// выполняется только на странице about.html (там есть #student-name).
if (document.querySelector('#student-name')) {

    // ===== Задание 1. Динамическая страница «Обо мне» =====

    // const — значение не будет меняться
    const username = 'Адиль';                 // string
    const profession = 'Программная инженерия';      // string
    const city = 'Бишкек';               // string
    const isStudent = true;                  // boolean

    // let — значение может измениться
    let age = 18;                            // number
    let description = 'Учусь на первом курсе программной инженерии и осваиваю навыки программирования';

    console.log('Имя: ' + username);
    console.log('Профессия: ' + profession);
    console.log('Город: ' + city);
    console.log('Возраст: ' + age);
    console.log('Студент: ' + isStudent);

    // Находим элементы по id и меняем их текст
    document.querySelector('#student-name').textContent = username;
    document.querySelector('#student-desc').textContent = description;
    document.querySelector('#student-city').textContent = city;
    document.querySelector('#student-age').textContent = age + ' лет';
    document.querySelector('#student-status').textContent = 'Студент: ' + isStudent;


    // ===== Задание 2. Статистика и вычисления =====

    let completeProjects = 4;  // завершённые проекты
    let newProjects = 5;       // новые проекты
    const plannedProjects = 14; // всего проектов по плану
    const hoursPerProject = 3; // часов на один проект
    const months = 2;          // месяцев обучения

    // + сложение: сколько проектов всего
    const totalProjects = completeProjects + newProjects;   // 4 + 5 = 9
    console.log('Завершено проектов: ' + completeProjects);
    console.log('Добавлено новых: ' + newProjects);
    console.log('Всего проектов: ' + totalProjects);

    // - вычитание: сколько осталось сделать
    const leftProjects = plannedProjects - totalProjects;   // 14 - 9 = 5
    console.log('Осталось проектов: ' + leftProjects);

    // * умножение: сколько часов потрачено
    const totalHours = totalProjects * hoursPerProject;   // 9 * 3 = 27
    console.log('Часов на проекты: ' + totalHours);

    // / деление: сколько проектов в среднем за месяц
    const averageProjects = totalProjects / months;   // 9 / 2 = 4.5
    console.log('Среднее за ' + months + ' месяца: ' + averageProjects);

    // % остаток от деления: сколько часов остаётся сверх полных учебных дней (по 8 часов)
    const restHours = totalHours % 8;                  // 27 % 8 = 3
    console.log('Остаток от деления ' + totalHours + ' на 8: ' + restHours);

    // Операторы присваивания на одной переменной
    let skills = 3;            // =  -> 3  (HTML, CSS, JavaScript)
    console.log('Навыков сначала: ' + skills);
    skills += 2;               // += -> 5  (выучил ещё 2)
    console.log('После += 2: ' + skills);
    skills -= 1;               // -= -> 4  (один пока не считаю)
    console.log('После -= 1: ' + skills);
    skills++;                  // ++ -> 5
    console.log('После ++: ' + skills);
    skills--;                  // -- -> 4
    console.log('После --: ' + skills);

    // Number(): строка "5" -> число 5
    const bonusText = '5';
    const bonus = Number(bonusText);
    console.log("Number('5') + 2: " + (bonus + 2));    // 7

    // String(): число -> строка
    const monthsText = String(months);
    console.log('String(months): ' + monthsText + ', тип: ' + typeof monthsText);

    // Выводим статистику на страницу
    document.querySelector('#stat-total').textContent = totalProjects;
    document.querySelector('#stat-left').textContent = leftProjects;
    document.querySelector('#stat-hours').textContent = totalHours;
    document.querySelector('#stat-average').textContent = averageProjects;
    document.querySelector('#stat-months').textContent = monthsText;
    document.querySelector('#stat-skills').textContent = skills;


    // ===== Задание 3. Строки и описание профиля =====

    const projectName = 'Growing Landing';

    // .length — свойство, пишется без скобок
    console.log('Длина имени: ' + username.length);
    // .toUpperCase() / .toLowerCase() — методы, пишутся со скобками
    console.log('Название проекта: ' + projectName.toUpperCase());
    console.log('Профессия: ' + profession.toLowerCase());

    // Предложение 1 — конкатенация через +
    const sentence1 = 'Меня зовут ' + username + ', я из города ' + city + '.';
    // Предложение 2 — шаблонная строка с ${}
    const sentence2 = `Мне ${age} лет, моё направление — ${profession.toLowerCase()}, я делаю проект ${projectName}.`;

    console.log('Конкатенация: ' + sentence1);
    console.log('Шаблонная строка: ' + sentence2);

    // Сначала читаем текст элемента, потом заменяем
    const roleElement = document.querySelector('#student-role');
    console.log('Текст до изменения: ' + roleElement.textContent);
    roleElement.textContent = profession;
    console.log('Текст после изменения: ' + roleElement.textContent);

    document.querySelector('#sentence-plus').textContent = sentence1;
    document.querySelector('#sentence-template').textContent = sentence2;
    document.querySelector('#project-name').textContent = 'Проект: ' + projectName.toUpperCase();


    // ===== Задание 4. Проверка типов и диагностика =====

    console.log('typeof имени: ' + typeof username);      // string
    console.log('typeof возраста: ' + typeof age);        // number
    console.log('typeof статуса: ' + typeof isStudent);   // boolean

    // "5" + 2 = "52": одно значение — строка, поэтому + не складывает,
    // а склеивает текст.
    console.log("'5' + 2: " + ('5' + 2));
    // Number("5") + 2 = 7: сначала строку превратили в число,
    // поэтому получилось обычное сложение.
    console.log("Number('5') + 2: " + (Number('5') + 2));

    // NaN (Not a Number — «не число»): слово «Привет» нельзя
    // превратить в число, поэтому Number() вернул NaN.
    console.log("Number('Привет'): " + Number('Привет'));
}