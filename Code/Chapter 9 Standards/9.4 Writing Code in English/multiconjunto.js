const elements = new Set();

elements.add(1);
elements.add(1);

echo elements.size() yields 1 
// This is the standard set

var moreElements = new MultiConjunto();
// We defined a multiset in Spanish
// because we are extending the domain

moreElements.agregar('hello');
moreElements.agregar('hello');
// 'agregar' is the Spanish word for 'add'

echo moreElements.size() yields 2 // Since it is a multiset

// elements and moreElements are NOT polymorphic
// I cannot exchange their implementation
