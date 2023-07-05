// Сохраняем массив в переменную
const directors = [
    {
        name: 'Стивен Спилберг',
        career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
        films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
        top_rated_film: 'Список Шиндлера'
    },
    {
        name: 'Кристофер Нолан',
        career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
        films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
        top_rated_film: 'Начало'
    },
    {
        name: 'Мартин МакДона',
        career: 'Сценарист, Режиссёр, Продюсер',
        films: 'https://www.film.ru/person/martin-makdonah',
        top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
        name: 'Алексей Балабанов',
        career: 'Режиссёр, Сценарист, Актёр, Продюсер',
        films: 'https://www.film.ru/person/aleksey-balabanov',
        top_rated_film: 'Брат'
    },
    {
        name: 'Питер Фаррелли',
        career: 'Продюсер, Режиссёр, Сценарист, Актёр',
        films: 'https://www.film.ru/person/piter-farrelli',
        top_rated_film: 'Зелёная книга'
    },
    {
        name: 'Юрий Быков',
        career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
        films: 'https://www.film.ru/person/yuriy-bykov',
        top_rated_film: 'Дурак'
    },
    {
        name: 'Жан-Марк Валле',
        career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
        films: 'https://www.film.ru/person/zhan-mark-valle',
        top_rated_film: 'Далласский клуб покупателей'
    },
];

directors.forEach((director) => {

    // Создаём элементы на странице
    const container = document.createElement('div');
    const nameElement = document.createElement('h2');
    const careerElement = document.createElement('p');
    const filmsElement = document.createElement('a');
    const topRatedFilmElement = document.createElement('p');
    container.classList.add("container");


    // Добавляем информацию из массива в созданные элементы
    nameElement.textContent = director.name;
    careerElement.textContent = 'Карьера: ' + director.career;
    filmsElement.textContent = 'Ссылка на фильмы:';
    filmsElement.href = director.films;
    topRatedFilmElement.textContent = 'Лучший фильм: ' + director.top_rated_film;

    //Добавляем элементы на страницу
    container.appendChild(nameElement);
    container.appendChild(careerElement);
    container.appendChild(filmsElement);
    container.appendChild(topRatedFilmElement);
    document.body.appendChild(container);

});

// Создаём новый массив с лучшими фильмами режиссёров и ввыводим на экран внизу страницы
const topFilmsContainer = document.createElement('div');
topFilmsContainer.classList.add("topFilmsContainer");
const topFilmsTitle = document.createElement('h2')
topFilmsTitle.textContent = 'Лучшие фильмы этих режиссёров';
const topFilmsList = document.createElement('p');
topFilmsList.textContent = directors.map((director) => director.top_rated_film);

topFilmsContainer.appendChild(topFilmsTitle);
topFilmsContainer.appendChild(topFilmsList);
document.body.appendChild(topFilmsContainer);