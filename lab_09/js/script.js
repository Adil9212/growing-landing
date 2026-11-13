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


// =====================================================
// Лабораторная №9. Массивы, циклы и карточки
// =====================================================


// ===== Задание 1. Анализ Growing Landing =====
// Объект developer из лабы 8 сохранён выше, ничего из него не удалял.
// Уже выводится через JS: приветствие и профессия в .hero, город, email
// и статус в #about, два числа в #statistics.
// Пока статично: пилюли HTML/CSS/JavaScript, третья карточка статистики,
// FAQ и отзывы. Карточки в #services-list станут динамическими в заданиях 11–14.


// ===== Задание 2. Массив навыков =====

developer.skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'Figma'];
console.log(developer.skills);


// ===== Задание 3. Индексы =====

console.log('Первый: ' + developer.skills[0]);                                   // HTML
console.log('Третий: ' + developer.skills[2]);                                   // JavaScript
console.log('Последний: ' + developer.skills[developer.skills.length - 1]);      // Figma
// Индексы идут с нуля, поэтому третий элемент имеет индекс 2.


// ===== Задание 4. Меняем элемент =====

const oldSkill = developer.skills[2];
developer.skills[2] = 'TypeScript';
console.log('Было: ' + oldSkill + ', стало: ' + developer.skills[2]);
// const запрещает только заново присвоить сам developer.
// Менять то, что внутри объекта и массива, можно.
developer.skills[2] = 'JavaScript';   // возвращаю как было


// ===== Задание 5. length и статистика =====

document.querySelector('#skills-count').textContent = developer.skills.length;
document.querySelector('#stat-skills').textContent = developer.skills.length;   // третья карточка статистики


// ===== Задание 6. push() =====

developer.skills.push('React');
console.log('Длина после push: ' + developer.skills.length);                      // 6
console.log('Добавили: ' + developer.skills[developer.skills.length - 1]);        // React
// push возвращает новую длину массива, а не добавленный элемент.


// ===== Задание 7. pop() =====

const removedSkill = developer.skills.pop();
console.log('Удалили: ' + removedSkill);                                           // React
console.log('Длина после pop: ' + developer.skills.length);                        // 5
document.querySelector('#skills-count').textContent = developer.skills.length;
document.querySelector('#stat-skills').textContent = developer.skills.length;


// ===== Задание 8. Цикл for =====

for (let i = 0; i < developer.skills.length; i++) {
    console.log(i + ': ' + developer.skills[i]);
}
// Если написать i <= developer.skills.length, цикл сделает лишний круг:
// skills[5] не существует, получится undefined.


// ===== Задание 9. while и for...of =====

let n = 0;                                 // свой счётчик для while
while (n < developer.skills.length) {
    console.log('while: ' + developer.skills[n]);
    n++;                                   // без этой строки цикл не закончится
}

for (const skill of developer.skills) {
    console.log('for...of: ' + skill);
}


// ===== Задание 10. Навыки на странице =====

const skillsList = document.querySelector('#skills-list');

for (let i = 0; i < developer.skills.length; i++) {
    const span = document.createElement('span');
    span.textContent = developer.skills[i];
    span.classList.add('skill');           // стиль .skill описан в CSS
    skillsList.appendChild(span);
}


// ===== Задание 11. Массив услуг =====

developer.services = [
    { icon: '◈', title: 'Лендинги', description: 'Современные одностраничные сайты с понятной структурой.' },
    { icon: '▦', title: 'Адаптивная вёрстка', description: 'Аккуратные интерфейсы для телефона, планшета и компьютера.' },
    { icon: '⌘', title: 'Интерактивность', description: 'Кнопки, формы и динамические элементы — скоро на JavaScript.' }
];

console.log(developer.services[0].title);     // Лендинги
console.log(developer.services.length);       // 3
// developer.services — это массив, у него нет своего title.
// Заголовок есть у каждого объекта внутри, поэтому services[0].title.


// ===== Задание 12. Контейнер =====
// В index.html у div#services-list удалил три статичных article.
// Сам контейнер и id остались, карточки теперь создаёт JavaScript.


// ===== Задание 14. Четвёртая карточка (push ДО цикла из задания 13) =====

developer.services.push({
    icon: '⚙',
    title: 'Веб-приложения',
    description: 'Разработка интерактивных веб-приложений.'
});
console.log('Услуг в массиве: ' + developer.services.length);   // 4


// ===== Задание 13. Карточки услуг через цикл =====

const servicesList = document.querySelector('#services-list');

for (let i = 0; i < developer.services.length; i++) {
    const service = developer.services[i];

    const card = document.createElement('article');
    card.classList.add('service-card');

    const icon = document.createElement('span');
    icon.classList.add('service-icon');
    icon.textContent = service.icon;

    const number = document.createElement('span');
    number.classList.add('card-number');
    number.textContent = String(i + 1).padStart(2, '0');   // 01, 02, 03, 04

    const title = document.createElement('h3');
    title.textContent = service.title;

    const text = document.createElement('p');
    text.textContent = service.description;

    const arrow = document.createElement('span');
    arrow.classList.add('card-arrow');
    arrow.textContent = '↗';

    // Все пять элементов кладём в card по очереди, а card — в контейнер
    card.appendChild(icon);
    card.appendChild(number);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(arrow);
    servicesList.appendChild(card);
}


// ===== Задание 15. Проверка =====
// Меняю title у любой услуги в массиве, обновляю страницу — карточка меняется.
// Цепочка такая: developer → services → for → createElement → appendChild.
// Если менять массив уже после отрисовки, страница сама не обновится:
// цикл отработал один раз при загрузке, его надо запустить заново.
console.log('Готово. Карточек на странице: ' + servicesList.children.length);
