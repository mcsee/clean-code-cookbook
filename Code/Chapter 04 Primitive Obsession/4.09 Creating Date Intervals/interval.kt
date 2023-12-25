// You reify the Interval Concept

data class Interval(val fromDate: LocalDate, val toDate: LocalDate) {
    init {
        if (fromDate >= toDate) {
            throw IllegalArgumentException(
                "From date must be before to date")
        }
        // Of course the Interval must be immutable
        // By using the keyword 'data'
    }

    fun elapsedDays(): Long {
        return ChronoUnit.DAYS.between(fromDate, toDate)
    }
}

val from = LocalDate.of(2018, 12, 9)
val to = LocalDate.of(2002, 12, 22)

val interval = Interval(from, to) // Invalid
