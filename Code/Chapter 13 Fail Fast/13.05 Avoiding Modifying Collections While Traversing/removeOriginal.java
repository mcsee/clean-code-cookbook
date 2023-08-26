// here you add elements to the collection...
Collection<Integer> people = new ArrayList<>();
  
for (Object person : people) {
    if (condition(person)) {
        people.remove(person);
    }
}
// You iterate AND remove elements, elements,
// risking skipping other candidates for removal