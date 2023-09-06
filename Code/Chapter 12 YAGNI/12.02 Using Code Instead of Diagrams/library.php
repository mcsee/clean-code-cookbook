<?

final class BookItem {
    function numberOfPages() { }
    function language(): Language { }
    function book(): Book { }        
    function edition(): BookEdition { }
    // Loan and overdues are not book items responsibility
}

final class LoanTracker {
    function loan(
        BookItem $bookCopy, 
        LibraryUser $reader, 
        DatePeriod $loanDates) {
        // DatePeriod is better than anemic $fromDate and $toDate
    }
}

final class LoanTrackerTests extends TestCase {
    // Lots of maintained tests telling you how the system really works
}