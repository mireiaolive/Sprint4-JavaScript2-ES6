// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  const result = array.map((movie) => movie.director);
  return result;
}

// Exercise 2: Get the films of a certain director
//.filter() returns a new array called getFilms
// takes a callback w/ 3 arguments and returns boolean
// whether the element should be included in the new array
function getMoviesFromDirector(array, director) {
  const getFilms = array.filter((movie) => movie.director === director);
  return getFilms;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverage(array) {
  //second argument is 0, where accumulator is going to start
  const sum = Number(
    (array.reduce((accu, num) => accu + num.score, 0) / array.length).toFixed(2)
  );
  return sum;
}

function moviesAverageOfDirector(array, director) {
  let moviesDirector = getMoviesFromDirector(array, director);
  let result = moviesAverage(moviesDirector);
  //returns a string, rounds it to two decimal w/ ".toFixed()"
  //converts result string back to a number using the "Number()" constructor
  return Number(result.toFixed(2));
}

// Exercise 4:  Alphabetic order by title
function orderAlphabetically(array) {
  let result = array.map((movie) => movie.title).sort();
  if (result.length > 20) {
    result.length = 20;
  }
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let result = array
    .map((movie) => ({ ...movie }))
    // sort in an ascending order
    .sort((p1, p2) =>
      p1.year > p2.year
        ? 1
        : p1.year < p2.year
        ? -1
        : //should order movies with the same year by their title, alphabetically
        p1.title > p2.title
        ? 1
        : p1.title < p2.title
        ? -1
        : 0
    );
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
//.includes() se utiliza con .filter() para filtrar una matriz de objetos
// y obtener solo los cumplen con ciertos criterios
function moviesAverageByCategory(array, category) {
  const moviesByCat = array.filter(
    (movie) => movie.genre.includes(category) && movie.score != ''
  );
  const result = moviesAverage(moviesByCat);
  return result;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear
  };
}
