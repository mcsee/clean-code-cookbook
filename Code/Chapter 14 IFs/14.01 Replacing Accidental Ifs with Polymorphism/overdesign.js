class Age {
}

class AgeLessThan13 extends Age {
  assertCanWatchPG13Movie() {
    throw new Error("You are not allowed to watch this movie");    
  }
  assertCanWatchAdultMovie() {
    throw new Error("You are not allowed to watch this movie");    
  }
}

class AgeBetween13And18 extends Age {
  assertCanWatchPG13Movie() {
    // No Problem
  }
  assertCanWatchAdultMovie() {
    throw new Error("You are not allowed to watch this movie");    
  }
}

class MovieRate {
  // If language permits this should be declared abstract
  // abstract assertCanWatch();
}

class PG13MovieRate extends MovieRate {
  //2. Move every *IF Body* to the former abstraction 
  assertCanWatch(age) {
    age.assertCanWatchPG13Movie()    
  }
}

class AdultsOnlyMovieRate extends MovieRate {
  //2. Move every *IF Body* to the former abstraction 
  assertCanWatch(age) {
     age.assertCanWatchAdultMovie()      
  }
}

class Movie {
  constructor(rate) {
    this._rate = rate; // Rate is now private
  }
  watchByMe(moviegoer) {
    this._rate.assertCanWatch(moviegoer.age);
  }
}

class Moviegoer {
  constructor(age) {
    this.age = age;
  }
  watchMovie(movie) { 
    movie.watchByMe(this);  
  }
}

let theExorcist = new Movie(new AdultsOnlyMovieRate());
let gremlins = new Movie(new PG13MovieRate());

let jane = new Moviegoer(new AgeLessThan13());

// jane.watchMovie(theExorcist);
// Jane cannot watch the exorcist since she is 12
// jane.watchMovie(gremlins);
// Jane cannot watch gremlins since she is 12

let joe = new Moviegoer(new AgeBetween13And18());

// joe.watchMovie(theExorcist);
// Joe cannot watch the exorcist since he is 16
joe.watchMovie(gremlins);
// Joe CAN watch gremlins since he is 16