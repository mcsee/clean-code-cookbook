<?

final class Book {
    // Just Book related Stuff
}

interface BookRetriever {
    public function bookByTitle(string $title);
}

final class DatabaseLibrarian implements BookRetriever {
    public function bookByTitle(string $title) {
        // Go to the database (not global hopefully)
    }
}

final class HotSpotLibrarian implements BookRetriever {
    // We always look for real life metaphors
    private $inbox;
    private $realRetriever;

    public function bookByTitle(string $title) {
        if ($this->inbox->includesTitle($title)) {
            // We are lucky. Someone has just returned the book copy.
            return $this->inbox->retrieveAndRemove($title);
        } else {
            return $this->realRetriever->bookByTitle($title);
        }
    }
}