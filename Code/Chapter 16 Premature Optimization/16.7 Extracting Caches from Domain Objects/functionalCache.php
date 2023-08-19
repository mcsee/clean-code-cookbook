<?

final class Book {

    private $cachedBooks;

    public function getBooksFromDatabaseByTitle(string $title) {

        if (isset($cachedBooks[$title])) {
            return $cachedBooks[$title];
        } else {
            return $this->doGetBooksFromDatabaseByTitle($title);
        }
    }

    private function doGetBooksFromDatabaseByTitle(string $title) {
        globalDatabase()->selectFrom('Books', 'WHERE TITLE = ' . $title);
    }
}