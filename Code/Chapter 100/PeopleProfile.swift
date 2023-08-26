struct PeopleProfile {
    let name: String
    let age: Int
}

// We reify the PeopleProfile object
func getNameAndAge() -> PeopleProfile {
    let name = "John"
    let age = 30
    let profile = PeopleProfile(name: name, age: age)
    return profile
}