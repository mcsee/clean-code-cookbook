const elements = new Set();

elements.add(1);
elements.add(1);

echo elements.size() yields 1 
// This is the standard set

var moreElements = new MultiConjunto();
// You defined a multiset in Spanish
// because you are extending the domain

moreElements.agregar('hello');
moreElements.agregar('hello');
// 'agregar' is the Spanish word for 'add'

echo moreElements.size() yields 2 // Since it is a multiset

// Elements and moreElements are NOT polymorphic
// You cannot exchange their implementation

class Person {
    constructor() {
        this.visitedCities = new Set();
   }

    visitCity(city) {
        this.visitedCities.add(city);
        // Breaks if you change the set (expecting ‘add()’)
        // with a MultiConjunto (expecting ‘agregar()’)
    }
}