class Author { }

class Book {    
    private List<Author> authors; // book knows authors
    // No strange behavior. just what a book can do
    // Real books don't know about IDs
    // ISBN is accidental to a book. Readers don't care
}

class BookResource {    
    private Book resource; // The resource knows the underlying book
    private id; // The id is the link we provide to external world
}

Book harryPotter = new Book(new Author('J. K. Rowling'));

Book designPatterns = new Book(
    new Author('Erich Gamma'), 
    new Author('Richard Helm'), 
    new Author('Ralph Johnson'), 
    new Author('John Vlissides')); 
    
Book donQuixote = new Book(new Author('Miguel Cervantes'));

BookResource harryPotterResource = new BookResource(
    harryPotter, UUID.randomUUID());

// Books don’t know their id. Just the resource does