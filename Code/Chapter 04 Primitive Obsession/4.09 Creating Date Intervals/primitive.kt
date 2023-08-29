val from = LocalDate.of(2018, 12, 9)
val to = LocalDate.of(2022, 12, 22)

val elapsed = elapsedDays(from, to)
    
fun elapsedDays(fromDate: LocalDate, toDate: LocalDate): Long {
    return ChronoUnit.DAYS.between(fromDate, toDate)
}

// You need to apply this short function 
// Or the inline version many times in your code
// You don't check from Date to be less than toDate
// You can make accounting numbers with a negative number