class Person(val name: String, val latitude: Double, val longitude: Double)

fun main() {
    val people = listOf(
        Person("Alice", 40.7128, -74.0060), // New York City
        Person("Bob", 51.5074, -0.1278), // London
        Person("Charlie", 48.8566, 2.3522), // Paris
        Person("Tony Hoare", 0.0, 0.0) // Null Island
    )
    
    for (person in people) {
        if (person.latitude == 0.0 && person.longitude == 0.0) {
            println("${person.name} lives on Null Island!")
        } else {
            println("${person.name} lives at (${person.latitude}, ${person.longitude}).")
        }
    }
}
