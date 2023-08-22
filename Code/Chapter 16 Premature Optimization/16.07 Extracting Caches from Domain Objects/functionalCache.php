<?

final class Book {

    private $cachedBooks;

    public function getBooksFromDatabaseByTitle(string $title) {
        if (!isset($this->cachedBooks[$title])) {
            $this->cachedBooks[$title] = 
                $this->doGetBooksFromDatabaseByTitle($title);
        }
        return $this->cachedBooks[$title];
    }

    private function doGetBooksFromDatabaseByTitle(string $title) {
        globalDatabase()->selectFrom('Books', 'WHERE TITLE = ' . $title);
    }
}