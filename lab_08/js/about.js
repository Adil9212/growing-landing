// Growing Landing — лабораторная работа №6
// Основы JavaScript: переменные, типы данных, операторы и DOM
// Скрипт страницы about.html (в лабе 7 вынесен из script.js в about.js).

console.log('Growing Landing: JavaScript подключён');


// ===== Задание 1. Данные о себе =====

// const — эти значения не меняются
const username = 'Адиль';                    // string
const profession = 'Программная инженерия';  // string
const city = 'Бишкек';                       // string
const isStudent = true;                      // boolean

// let — эти значения могут измениться
let age = 18;                                // number
let description = 'Учусь на первом курсе программной инженерии и осваиваю навыки программирования';

console.log('Имя: ' + username);
console.log('Профессия: ' + profession);
console.log('Город: ' + city);
console.log('Возраст: ' + age);
console.log('Студент: ' + isStudent);

// Находим элементы по id и подставляем текст
document.querySelector('#student-name').textContent = username;
document.querySelector('#student-desc').textContent = description;
document.querySelector('#student-city').textContent = city;
document.querySelector('#student-age').textContent = age + ' лет';
document.querySelector('#student-status').textContent = isStudent;

// Те же данные в блоке «Информация обо мне»
document.querySelector('#info-name').textContent = username;
document.querySelector('#info-role').textContent = profession;
document.querySelector('#info-city').textContent = city;
document.querySelector('#info-age').textContent = age + ' лет';
document.querySelector('#info-student').textContent = isStudent;


// ===== Задание 2. Статистика и вычисления =====

let completeProjects = 4;    // завершённые проекты
let newProjects = 5;         // новые проекты
const plannedProjects = 14;  // всего проектов по плану
const hoursPerProject = 3;   // часов на один проект
const months = 2;            // месяцев обучения

// + сложение: сколько проектов всего
const totalProjects = completeProjects + newProjects;           // 4 + 5 = 9
console.log('Завершено проектов: ' + completeProjects);
console.log('Добавлено новых: ' + newProjects);
console.log('Всего проектов: ' + totalProjects);

// - вычитание: сколько осталось сделать
const leftProjects = plannedProjects - totalProjects;           // 14 - 9 = 5
console.log('Осталось проектов: ' + leftProjects);

// * умножение: сколько часов уйдёт на все проекты
const totalHours = totalProjects * hoursPerProject;             // 9 * 3 = 27
console.log('Часов на проекты: ' + totalHours);

// / деление: сколько проектов в среднем за месяц
const averageProjects = totalProjects / months;                 // 9 / 2 = 4.5
console.log('Среднее за ' + months + ' месяца: ' + averageProjects);

// % остаток от деления: часов сверх полных рабочих дней по 8 часов
const restHours = totalHours % 8;                               // 27 % 8 = 3
console.log('Остаток от деления ' + totalHours + ' на 8: ' + restHours);

// Операторы присваивания на одной переменной
let skills = 3;     // =  -> 3
console.log('Навыков сначала: ' + skills);
skills += 2;        // += -> 5
console.log('После += 2: ' + skills);
skills -= 1;        // -= -> 4
console.log('После -= 1: ' + skills);
skills++;           // ++ -> 5
console.log('После ++: ' + skills);
skills--;           // -- -> 4
console.log('После --: ' + skills);

// Number(): строка '5' -> число 5
const bonus = Number('5');
console.log("Number('5') + 2: " + (bonus + 2));                // 7

// String(): число -> строка
const monthsText = String(months);
console.log('String(months): ' + monthsText + ', тип: ' + typeof monthsText);

// Выводим статистику на страницу
document.querySelector('#stat-total').textContent = totalProjects;
document.querySelector('#stat-left').textContent = leftProjects;
document.querySelector('#stat-average').textContent = averageProjects;
document.querySelector('#stat-hours').textContent = totalHours;
document.querySelector('#stat-months').textContent = monthsText;
document.querySelector('#stat-skills').textContent = skills;


// ===== Задание 3. Строки =====

const projectName = 'Growing Landing';

// .length — свойство, скобки не нужны
console.log('Длина имени: ' + username.length);
// .toUpperCase() и .toLowerCase() — методы, скобки нужны
console.log('Название проекта: ' + projectName.toUpperCase());
console.log('Профессия: ' + profession.toLowerCase());

// Предложение 1 — склеиваем через +
const sentence1 = 'Меня зовут ' + username + ', я из города ' + city + '.';
// Предложение 2 — шаблонная строка с ${}
const sentence2 = `Мне ${age} лет, моё направление — ${profession.toLowerCase()}, я делаю проект ${projectName}.`;

console.log('Конкатенация: ' + sentence1);
console.log('Шаблонная строка: ' + sentence2);

// Сначала читаем текст элемента, потом заменяем его
const roleElement = document.querySelector('#student-role');
console.log('Текст до изменения: ' + roleElement.textContent);
roleElement.textContent = profession;
console.log('Текст после изменения: ' + roleElement.textContent);

document.querySelector('#project-name').textContent = projectName.toUpperCase();
document.querySelector('#sentence-plus').textContent = sentence1;
document.querySelector('#sentence-template').textContent = sentence2;


// ===== Задание 4. Проверка типов =====

console.log('typeof имени: ' + typeof username);      // string
console.log('typeof возраста: ' + typeof age);        // number
console.log('typeof статуса: ' + typeof isStudent);   // boolean

// '5' + 2 = '52': одно значение строка, поэтому + склеивает текст
console.log("'5' + 2: " + ('5' + 2));
// Number('5') + 2 = 7: строку сначала превратили в число, потом сложили
console.log("Number('5') + 2: " + (Number('5') + 2));

// NaN (Not a Number, «не число»): слово «Привет» в число не превратить
console.log("Number('Привет'): " + Number('Привет'));


// =====================================================
// Лабораторная №7. Условия и логические операторы
// =====================================================


// ===== Задание 1. Уровень разработчика =====

let projectsCount = totalProjects;   // число проектов берём из лабы 6
let experience = 7;                  // опыт в месяцах
// переменная age уже объявлена выше (18)

// Совершеннолетие проверяем один раз и потом используем дальше
const isAdult = age >= 18;

// Уровень по таблице из методички (if ... else if ... else)
let level;
if (projectsCount < 0) {
    level = 'Ошибка: проектов не может быть меньше нуля';
} else if (projectsCount === 0) {
    level = 'Нет проектов';
} else if (projectsCount <= 2) {
    level = 'Новичок';
} else if (projectsCount <= 5) {
    level = 'Начинающий разработчик';
} else if (projectsCount <= 10) {
    level = 'Продвинутый разработчик';
} else {
    level = 'Опытный разработчик';
}

// Возрастной статус
let ageStatus;
if (isAdult) {
    ageStatus = 'Совершеннолетний';
} else {
    ageStatus = 'Несовершеннолетний';
}

// Junior: возраст от 18, опыт от 6 месяцев и минимум 3 проекта.
// Все три условия должны быть верны сразу, поэтому &&
const canBeJunior = age >= 18 && experience >= 6 && projectsCount >= 3;

let juniorText;
if (projectsCount < 0) {
    juniorText = 'Нельзя определить: ошибка в данных';
} else if (canBeJunior) {
    juniorText = 'Может претендовать на Junior';
} else {
    juniorText = 'Пока не может претендовать на Junior';
}

console.log('Проектов: ' + projectsCount);
console.log('Уровень: ' + level);
console.log('Возрастной статус: ' + ageStatus);
console.log('Junior: ' + juniorText);

document.querySelector('#level-projects').textContent = projectsCount;
document.querySelector('#level-age').textContent = age + ' лет';
document.querySelector('#level-exp').textContent = experience + ' мес.';
document.querySelector('#dev-level').textContent = level;
document.querySelector('#age-status').textContent = ageStatus;
document.querySelector('#junior-status').textContent = juniorText;


// ===== Задание 2. Доступ и скидки =====

let userRole = 'student';   // student, teacher или guest
let isRegistered = true;
let basePrice = 12000;      // цена в сомах

// Нужная роль: student ИЛИ teacher, поэтому ||
const hasRightRole = userRole === 'student' || userRole === 'teacher';
// Доступ есть, только если выполнено всё сразу, поэтому &&
const canAccess = isRegistered && isAdult && hasRightRole;

// ! означает «не»: если не зарегистрирован, выводим отдельное сообщение
let accessText;
if (!isRegistered) {
    accessText = 'Доступ закрыт: нет регистрации';
} else if (!isAdult) {
    accessText = 'Доступ закрыт: нет 18 лет';
} else if (!hasRightRole) {
    accessText = 'Доступ закрыт: нужна роль student или teacher';
} else {
    accessText = 'Доступ разрешён';
}

// Скидка по статусу
let discountPercent;
if (userRole === 'student') {
    discountPercent = 30;
} else if (userRole === 'teacher') {
    discountPercent = 20;
} else {
    discountPercent = 0;    // guest и любая другая роль
}

let discountSum = 0;
let finalPrice = 0;
let baseText;
let percentText;
let sumText;
let finalText;

if (basePrice < 0) {
    // отрицательная цена — это ошибка, расчёт не делаем
    baseText = 'Ошибка: цена меньше нуля';
    percentText = '—';
    sumText = '—';
    finalText = '—';
} else {
    discountSum = basePrice * discountPercent / 100;
    finalPrice = basePrice - discountSum;
    baseText = basePrice + ' сом';
    percentText = discountPercent + '%';
    sumText = discountSum + ' сом';
    finalText = finalPrice + ' сом';
}

console.log('Роль: ' + userRole + ', зарегистрирован: ' + isRegistered);
console.log('Доступ: ' + accessText + ' (canAccess = ' + canAccess + ')');
console.log('Цена: ' + baseText);
console.log('Скидка: ' + percentText + ', сумма: ' + sumText);
console.log('Итого: ' + finalText);

document.querySelector('#access-role').textContent = userRole;
document.querySelector('#access-registered').textContent = isRegistered;
document.querySelector('#access-status').textContent = accessText;
document.querySelector('#price-base').textContent = baseText;
document.querySelector('#discount-percent').textContent = percentText;
document.querySelector('#discount-sum').textContent = sumText;
document.querySelector('#price-final').textContent = finalText;


// ===== Задание 3. Категория проекта (switch) =====

// .value у select — это значение атрибута value выбранного option, а не его текст
const selectedType = document.querySelector('#projectType').value;

let categoryName;
let categoryDesc;
let categoryExample;

switch (selectedType) {
    case 'web':
        categoryName = 'Веб-сайт';
        categoryDesc = 'Сайты и веб-приложения, которые открываются в браузере.';
        categoryExample = 'Интернет-магазин';
        break;
    case 'mobile':
        categoryName = 'Мобильное приложение';
        categoryDesc = 'Программы для телефонов на Android и iOS.';
        categoryExample = 'Приложение доставки';
        break;
    case 'game':
        categoryName = 'Игра';
        categoryDesc = 'Компьютерные и мобильные игры.';
        categoryExample = '2D-платформер';
        break;
    case 'design':
        categoryName = 'UX/UI дизайн';
        categoryDesc = 'Проектирование внешнего вида и удобства интерфейса.';
        categoryExample = 'Макет в Figma';
        break;
    case 'other':
        categoryName = 'Другое';
        categoryDesc = 'Проект, который не подходит под остальные категории.';
        categoryExample = 'Собственный проект';
        break;
    default:
        // сюда попадаем, если value не совпало ни с одним case
        categoryName = 'Категория не найдена';
        categoryDesc = '—';
        categoryExample = '—';
}

console.log('Выбрано: ' + selectedType);
console.log('Категория: ' + categoryName);
console.log('Описание: ' + categoryDesc);
console.log('Пример: ' + categoryExample);

document.querySelector('#cat-name').textContent = categoryName;
document.querySelector('#cat-desc').textContent = categoryDesc;
document.querySelector('#cat-example').textContent = categoryExample;


// ===== Задание 4. Итоговая карточка =====

// Тернарный оператор: условие ? если_да : если_нет.
// Проект считается завершённым, когда сделаны все запланированные проекты
// (сейчас сделано 4 из 14, поэтому «В разработке»)
const projectStatus = completeProjects >= plannedProjects ? 'Завершён' : 'В разработке';

console.log('Статус проекта: ' + projectStatus);

// Ничего заново не считаем, берём готовые переменные из заданий 1–3
document.querySelector('#card-name').textContent = username;
document.querySelector('#card-age').textContent = age + ' лет';
document.querySelector('#card-adult').textContent = ageStatus;
document.querySelector('#card-projects').textContent = projectsCount;
document.querySelector('#card-level').textContent = level;
document.querySelector('#card-exp').textContent = experience + ' мес.';
document.querySelector('#card-junior').textContent = juniorText;
document.querySelector('#card-category').textContent = categoryName;
document.querySelector('#card-desc').textContent = categoryDesc;
document.querySelector('#card-example').textContent = categoryExample;
document.querySelector('#card-access').textContent = accessText;
document.querySelector('#card-base').textContent = baseText;
document.querySelector('#card-discount').textContent = percentText + ' (' + sumText + ')';
document.querySelector('#card-final').textContent = finalText;
document.querySelector('#card-status').textContent = projectStatus;
