const elements = new Set();

elements.add(1);
elements.add(1);

echo elements.size() yields 1 
// This is the standard set

var moreElements = new MultiSet();
// We defined a multiset in English

moreElements.add('hello');
moreElements.add('hello');

echo moreElements.size() yields 2 // Since it is a multiset

// elements and moreElements are polymorphic
// I can exchange their implementation anytime
