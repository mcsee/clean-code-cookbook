class Movie {

  constructor(rate) {
    this.rate = rate;
  }
}

class Moviegoer {
  constructor(age) {
    this.age = age;
  }
  watchMovie(movie) {
    if ((this.age < 18) && (movie.rate == 'Adults Only'))
      throw new Error("You are not allowed to watch this movie");
    
    // watch movie
  }
}

let jane = new Moviegoer(12);
let theExorcist = new Movie('Adults Only');

jane.watchMovie(theExorcist);
// Jane cannot watch the exorcist since she is 12