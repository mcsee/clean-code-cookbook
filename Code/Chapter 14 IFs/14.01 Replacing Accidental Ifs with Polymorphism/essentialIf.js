class Moviegoer {
  constructor(age) {
    this.age = age;
  }
  watchXRatedMovie() {
    if (this.age < 18)
      throw new Error("You are not allowed to watch this movie");
    else
      this.watchMovie();
  }
  watchMovie() {
    // ..
  }
}

let jane = new Moviegoer(12);

jane.watchXRatedMovie();
// Throws exception since Jane is too young to watch the movie