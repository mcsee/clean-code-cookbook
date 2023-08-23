class Song {
    constructor(title, artist) {
        this.title = title;
        this.artist = artist;
    }

    play() {
        console.log(`Playing ${this.title} by ${this.artist}`);
    }
}