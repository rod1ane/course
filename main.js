let personalMoviesDb;

let numberOfFilms = prompt("How many films you watch?");
let watchedFilms = prompt("One more watched films?");
let raitWatcheFilm = prompt("Rait watched film?");


personalMoviesDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

personalMoviesDb.movies[watchedFilms] = raitWatcheFilm;


console.log(personalMoviesDb);