// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const movieDirectorList = moviesArray.map((movie) => {
    return movie.director;
  });
  //bonus
  // let uniqueDirectors = movieDirectorList.filter((director, index) => {
  //   return array.indexOf(director) === index;
  // });
  return movieDirectorList;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  let stevenDramaMovies = moviesArray.filter((item) => {
    return item.director == "Steven Spielberg" && item.genre.includes("Drama");
  });
  return stevenDramaMovies.reduce((acc, item) => acc + 1, 0);
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }
  const scores = moviesArray.map((movie) => {
    return movie.score;
  });
  let averageScore = scores.reduce(function (sum, movie) {
    if (!movie) {
      return sum;
    }
    return sum + movie;
  }, 0);
  averageScore = averageScore / moviesArray.length;
  return Number(averageScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const dramaMovies = moviesArray.filter(function (movie) {
    return movie.genre.includes("Drama");
  });

  const dramaScoreAvg = scoresAverage(dramaMovies);
  return dramaScoreAvg;
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const movieOrderAsc = moviesArray.slice();
  movieOrderAsc.sort((a, b) => {
    if (a.year > b.year) return 1;
    else if (b.year > a.year) return -1;
    else {
      if (a.title > b.title) return 1;
      else if (b.title > a.title) return -1;
    }
  });
  return movieOrderAsc;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const movieTitleOrder = moviesArray.slice();
  movieTitleOrder.sort((a, b) => {
    if (a.title > b.title) return 1;
    else if (b.title > a.title) return -1;
    else if (a.title === b.title) return 0;
  });
  const top20Movies = movieTitleOrder.slice(0, 20);
  let top20titles = top20Movies.map((movie) => {
    return movie.title;
  });
  return top20titles;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
