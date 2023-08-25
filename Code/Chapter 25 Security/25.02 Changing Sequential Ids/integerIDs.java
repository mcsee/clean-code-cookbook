class Book {
    private Long bookId; // book knows its ID
    private List<Long> authorIds; // book knows author IDs
}

Book harryPotter = new Book(1, List.of(2));
Book designPatterns = new Book(2, List.of(4, 6, 7, 8));
Book donQuixote = new Book(3, List.of(5));

// You can scrape from now on