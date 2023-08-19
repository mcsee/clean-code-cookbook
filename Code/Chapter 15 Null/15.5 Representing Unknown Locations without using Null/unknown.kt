abstract class Location {
    abstract fun calculateDistance(other: Location): Double
}

class Coordinates(val latitude: Double, val longitude: Double) : Location() {
    override fun calculateDistance(other: Location): Double {    
        val earthRadius = 6371.0 // kilometers
        val latDistance = Math.toRadians(latitude - other.latitude)
        val lngDistance = Math.toRadians(longitude - other.longitude)
        val a = sin(latDistance / 2) * sin(latDistance / 2) +
                cos(Math.toRadians(latitude)) * cos(Math.toRadians(other.latitude)) *
                sin(lngDistance / 2) * sin(lngDistance / 2)
        val c = 2 * atan2(sqrt(a), sqrt(1 - a))
        return earthRadius * c
    }
}

class UnknownLocation : Location() {
    override fun calculateDistance(other: Location): Double {
        throw IllegalArgumentException("Cannot calculate distance from unknown location.")
    }
}

class Person(val name: String, val location: Location)

fun main() {
    val people = listOf(
        Person("Alice", Coordinates(40.7128, -74.0060)), // New York City
        Person("Bob", Coordinates(51.5074, -0.1278)), // London
        Person("Charlie", Coordinates(48.8566, 2.3522)), // Paris
        Person("Tony Hoare", UnknownLocation()) // Unknown location
    )
    
    val rio = Coordinates(-22.9068, -43.1729) // Rio de Janeiro coordinates
    
    for (person in people) {
        try {
            val distance = person.location.calculateDistance(rio)
            println("${person.name} is ${distance} kilometers from Rio de Janeiro.")
        } catch (e: IllegalArgumentException) {
            println("${person.name} is at an unknown location.")
        }
    }
}
