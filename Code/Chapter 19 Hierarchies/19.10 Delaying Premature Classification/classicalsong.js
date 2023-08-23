class ClassicalSong extends Song {
    constructor(title, artist, composer) {
        super(title, artist);
        this.composer = composer;
    }

    listenCarefully() {
        console.log(`I am listening to ${this.title} by ${this.composer}`);
    }
}

const goldberg = new ClassicalSong
    ("The Goldberg Variations", "Glenn Gould", "Bach");