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
    //!!!!!!!!!!!!!!!!! IFS ARE POLLUTING HERE !!!!!!!!!!!!!!!!!!!!!!!!!!
    if ((this.age < 18) && (movie.rate == 'Adults Only'))
      throw new Error("You are not allowed to watch this movie");
    else if ((this.age < 13) && (movie.rate == 'PG 13'))
      throw new Error("You are not allowed to watch this movie");
    // !!!!!!!!!!!!!!!! IFS ARE POLLUTING HERE !!!!!!!!!!!!!!!!!!!!!!!!!!!
    
    // watch movie
  }
}

let theExorcist = new Movie('Adults Only');
let gremlins = new Movie('PG 13');

let jane = new Moviegoer(12);

jane.watchMovie(theExorcist);
// Jane cannot watch the exorcist since she is 12
jane.watchMovie(gremlins);
// Jane cannot watch gremlins since she is 12

let joe = new Moviegoer(16);

joe.watchMovie(theExorcist);
// Joe cannot watch the exorcist since he is 16
joe.watchMovie(gremlins);
// Joe CAN watch gremlins since he is 16