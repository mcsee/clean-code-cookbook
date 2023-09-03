class Movie {
  constructor(rate) {
    this._rate = rate; // Rate is now private
  }
  warnIfNotAllowed(age) {
    this._rate.warnIfNotAllowed(age);
  }
}

class Moviegoer {
  constructor(age) {
    this.age = age;
  }
  watchMovie(movie) { 
    movie.warnIfNotAllowed(this.age);     
    // watch movie
  }
}