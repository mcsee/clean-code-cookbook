abstract class Location {
    abstract fun calculateDistance(other: Location): Double
    abstract fun ifKnownOrElse(knownAction: (Location) -> Unit,
        unknownAction: () -> Unit)
}

class EarthLocation(val latitude: Double, val longitude: Double) : Location() {
    override fun calculateDistance(other: Location): Double {
        val earthRadius = 6371.0
        val latDistance = Math.toRadians(
            latitude - (other as EarthLocation).latitude)
        val lngDistance = Math.toRadians(
            longitude - other.longitude)
        val a = sin(latDistance / 2) * sin(latDistance / 2) +
          cos(Math.toRadians(latitude)) * 
          cos(Math.toRadians(other.latitude)) *
          sin(lngDistance / 2) * sin(lngDistance / 2)
        val c = 2 * atan2(sqrt(a), sqrt(1 - a))
        return earthRadius * c
}
    
    override fun ifKnownOrElse(knownAction: 
      (Location) -> Unit, unknownAction: () -> Unit) {
        knownAction(this)
    }
}

class UnknownLocation : Location() {
    override fun calculateDistance(other: Location): Double {
        throw IllegalArgumentException(
            "Cannot calculate distance from an unknown location.")
    }

    override fun ifKnownOrElse(knownAction:
        (Location) -> Unit, unknownAction: () -> Unit) {
            unknownAction()
    }
}

class Person(val name: String, val location: Location)

fun main() {
    val people = listOf(
        Person("Alice", EarthLocation(40.7128, -74.0060)), // New York City
        Person("Bob", EarthLocation(51.5074, -0.1278)), // London
        Person("Charlie", EarthLocation(48.8566, 2.3522)), // Paris
        Person("Tony", UnknownLocation()) // Unknown location
    )
    val rio = EarthLocation(-22.9068, -43.1729) // Rio de Janeiro coordinates

    for (person in people) {
        person.location.ifKnownOrElse(
            { location -> println(person.name" is " +
                person.location.calculateDistance(rio) +
                    " kilometers { println("${person.name} is at an unknown location.") }
       )
    }
}