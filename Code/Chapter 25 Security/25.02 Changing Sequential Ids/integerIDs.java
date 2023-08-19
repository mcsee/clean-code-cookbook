class Book {
    private Long bookId; // book knows its ID
    private List<Long> authorIds; // book knows author IDs
}

Book harryPotter = new Book(1, {2});
Book cleanCode = new Book(2, {4});
Book donQuixote = new Book(3, {5});

// We can scrape from now on.