Collection<Integer> people = new ArrayList<>();
// Here you add elements to the collection...

List<Object> iterationPeople = ImmutableList.copyOf(people);
    
for (Object person : iterationPeople) {
    if (condition(person)) {
        people.remove(person);
    }
}
// You iterate a copy and remove it from the original

coll.removeIf(currentIndex -> currentIndex == 5);
// Or use language tools (if available)