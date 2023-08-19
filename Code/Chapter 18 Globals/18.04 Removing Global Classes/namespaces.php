<?

namespace Date;

final class DateFormatter {

    function reformatYYYYDDMMtoYYYYMMDD(Date $date) {
    }
    // function is not static since class single responsibility
    // is to create instances and not be a library of utils

}

namespace OracleDatabase;

class DatabaseAccessor {
    // Database is not a singleton and it is namespace scoped
}