w<?

final class BookItem {
    // No. We will not inherit from concrete class Book since this is another smell

    // No. We will not list a bunch of anemic attributes. since yet this is another smell

    function numberOfPages() {
        //
    }

    function language(): Language {
        //
    }

    function book(): Book {
        // Book can tell us a lot about her/his author, title etc.

    }

    function edition(): BookEdition {
        // ..
    }

    // Loan and overdues are not book items responsibility

}

final class LoanTracker {
    function loan(BookItem $bookCopy, LibraryUser $reader, DatePeriod $loanDates) {
        // DatePeriod is better than anemic $fromDate and $toDate
    }
}

final class LoanTrackerTests extends TestCase {
    // Lots of maintained tests telling us how the system really works
}