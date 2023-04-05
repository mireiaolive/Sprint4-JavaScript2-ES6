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
function hoursToMinutes(array) {
  // we create a new array
  const result = array.map((movie) => {
    // duration parts is split using the space character as a separator
    const durationParts = movie.duration.split(' ');
    // variable is initialized to 0 and will store the total duration in minutes
    let totalMinutes = 0;

    for (let i = 0; i < durationParts.length; i++) {
      const part = durationParts[i];
      // convert strign to intiger w/ radix 10
      // the string being converted is the current duration part of the movie
      const number = parseInt(part, 10);
      // checks if it contains the string "h"
      const isHour = part.includes('h');

      if (isHour) {
        // if the duration part is an hour, the number of hours is multiplied by 60
        totalMinutes += number * 60;
      } else {
        totalMinutes += number;
      }
    }

    return {
      ...movie,
      duration: totalMinutes
    };
  });
  console.log(result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let yearMovie = array.filter((array) => array.year == year);
  //sorting movies by their score in descending order
  //movie with the highest score will come first in the sorted array
  let sortMovie = yearMovie.sort((a, b) => b.score - a.score);
  let result = [sortMovie[0]];
  //[] is used to create a new array called result that contains the first element of sortMovie.
  //The resulting array result will have only one element, which is the highest scoring movie.
  return result;
}

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
