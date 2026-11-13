// Growing Landing — лабораторная работа №8
// Объекты в JavaScript


// ===== Задание 1. Исходные блоки =====
// В index.html нашёл: .hero, #about, #statistics, #contact
// Свойства объекта developer, которые будут нужны:
// name, position, age, projectCount, monthsLearning, isAvailable


// ===== Задание 2. Создаём объект developer =====

const developer = {
    name: 'Адиль',
    position: 'Начинающий веб-разработчик',
    age: 18,
    projectCount: 8,
    monthsLearning: 0,
    isAvailable: true
};

console.log('Имя: ' + developer.name);
console.log('Профессия: ' + developer.position);


// ===== Задание 3. Проверяем типы =====

console.log('typeof name: ' + typeof developer.name);                     // string
console.log('typeof age: ' + typeof developer.age);                       // number
console.log('typeof projectCount: ' + typeof developer.projectCount);     // number
console.log('typeof isAvailable: ' + typeof developer.isAvailable);       // boolean
// Тип зависит от значения: имя записано в кавычках — это string,
// 18 и 8 — числа без кавычек, true — значение boolean.


// ===== Задание 4. Вложенный объект contacts =====

developer.contacts = {
    email: 'student@example.com',
    phone: '+996700000000',
    city: 'Бишкек'
};

console.log('Email: ' + developer.contacts.email);
console.log('Телефон: ' + developer.contacts.phone);
console.log('Город: ' + developer.contacts.city);


// ===== Задание 5. Квадратные скобки =====

console.log(developer['name']);
console.log(developer['contacts']['city']);
// developer["name"] — в скобках текст, это то же самое, что developer.name.
// developer[name] — тут name без кавычек, это уже переменная. Такой
// переменной у меня нет, поэтому ключ не найдётся и будет undefined.


// ===== Задание 6. Меняем свойства =====

console.log('Прежняя профессия: ' + developer.position);

developer['position'] = 'JavaScript Developer';
developer['projectCount'] += 1;      // было 8, стало 9
developer['monthsLearning'] += 2;    // было 0, стало 2

console.log('Новая профессия: ' + developer['position']);
console.log('Проектов: ' + developer['projectCount']);
console.log('Месяцев обучения: ' + developer['monthsLearning']);


// ===== Задание 7. Добавляем свойства =====

developer.status = 'Учусь и работаю';
developer.contacts['telegram'] = '@student_demo';

console.log('Статус: ' + developer.status);
console.log('Telegram: ' + developer.contacts['telegram']);


// ===== Задание 8. Оператор in =====

console.log('"name" in developer: ' + ('name' in developer));                    // true
console.log('"portfolioUrl" in developer: ' + ('portfolioUrl' in developer));    // false
console.log('"contacts" in developer: ' + ('contacts' in developer));            // true
console.log('"email" in developer.contacts: ' + ('email' in developer.contacts)); // true
// email лежит не в самом developer, а внутри вложенного объекта contacts.
// Поэтому "email" in developer даст false, а "email" in developer.contacts — true.


// ===== Задание 9. undefined и null =====

developer.middleName = undefined;
developer.contacts.telegram = null;

console.log('"middleName" in developer: ' + ('middleName' in developer));          // true
console.log('middleName === undefined: ' + (developer.middleName === undefined));  // true
console.log('"telegram" in contacts: ' + ('telegram' in developer.contacts));      // true
console.log('telegram === null: ' + (developer.contacts.telegram === null));       // true
// Ключи на месте, просто значения «ничего» (undefined) и «пусто» (null).


// ===== Задание 10. delete =====

developer.tempNote = 'временная заметка';
delete developer.tempNote;

console.log('"tempNote" in developer: ' + ('tempNote' in developer));   // false
console.log('developer.tempNote: ' + developer.tempNote);               // undefined
// После delete ключа в объекте больше нет вообще. А при null ключ
// остаётся, только в нём лежит значение «пусто».


// ===== Задание 11. Имя в .hero =====

document.querySelector('#developer-name').textContent = 'Привет! Я ' + developer.name + ' 👋';


// ===== Задание 12. Профессия в .hero =====

document.querySelector('#developer-position').textContent = developer.position;


// ===== Задание 13. Город и email в #about =====

document.querySelector('#developer-city').textContent = 'Город: ' + developer.contacts.city;
document.querySelector('#developer-email').textContent = 'Email: ' + developer.contacts.email;


// ===== Задание 14. Статистика #statistics =====

document.querySelector('#stat-projects').textContent = developer.projectCount;
document.querySelector('#stat-experience').textContent = developer.monthsLearning;
// #stat-skills не трогаю, он остаётся как был


// ===== Задание 15. Статус =====

if (developer.isAvailable === true) {
    document.querySelector('#developer-availability').textContent = 'Открыт к новым проектам';
} else {
    document.querySelector('#developer-availability').textContent = 'Сейчас не принимаю проекты';
}

console.log(developer);
