// 1. Create a Polymorphic Hierarchy for every IF condition
// (if it doesn't already exist)
class MovieRate {
  // If language permits this should be declared abstract
}

class PG13MovieRate extends MovieRate {
  //2. Move every *IF Body* to the former abstraction 
  warnIfNotAllowed(age) {
    if (age < 13)
      throw new Error("You are not allowed to watch this movie");    
  }
}

class AdultsOnlyMovieRate extends MovieRate {
  //2. Move every *IF Body* to the former abstraction 
  warnIfNotAllowed(age) {
    if (age < 18)
      throw new Error("You are not allowed to watch this movie");    
  }
}

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
    // 3. Replace IF Call by polymorphic method call
    movie.rate.warnIfNotAllowed(this.age);     
    // watch movie
  }
}

let theExorcist = new Movie(new AdultsOnlyMovieRate());
let gremlins = new Movie(new PG13MovieRate());

let jane = new Moviegoer(12);

// jane.watchMovie(theExorcist);
// Jane cannot watch the exorcist since she is 12
// jane.watchMovie(gremlins);
// Jane cannot watch gremlins since she is 12

let joe = new Moviegoer(16);

// joe.watchMovie(theExorcist);
// Joe cannot watch the exorcist since he is 16
joe.watchMovie(gremlins);
// Joe CAN watch gremlins since he is 16