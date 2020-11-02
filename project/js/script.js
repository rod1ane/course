/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */





'use strict';


// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

let parentAds = document.querySelector('.promo__adv');

parentAds.querySelectorAll('img').forEach(item => {
    item.remove();
});

// 2) Изменить жанр фильма, поменять "комедия" на "драма"
document.querySelector(".promo__genre").textContent = 'Драма';


// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

document.querySelector(".promo__bg").style.cssText = 'background: url("img/bg.jpg") center center/cover no-repeat';

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

let moviesItem = document.querySelectorAll(".promo__interactive-item")
moviesItem.forEach(el => {
    el.innerHTML = 'Hello';
})
const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

