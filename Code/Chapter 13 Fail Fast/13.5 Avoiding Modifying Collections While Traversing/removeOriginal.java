Collection<Integer> people = new ArrayList<>();
// here we add elements to the collection...
  
for (Object person : people) {
    if (condition(person)) {
        people.remove(person);
    }
}
// We iterate AND remove elements