class ElementComparator{
  greatherThan(firstElement, secondElement) {
    return firstElement > secondElement;
    // This is just an example. 
    // With more complex objects this comparison might not be trivial
  }
}

class BubbleSortingStrategy {
  // You have a strategy, you can't unit test it,
  // change for a polymorphic,
  // Swap and benchmark algorithms etc.
  constructor(collection, comparer) {
    this._elements = collection;
    this._comparer = comparer;
  }
  sorted() {
    for (var outerIterator = 0;
         outerIterator < this.size(); 
         outerIterator++) {
      for(var innerIterator = 0 ; 
          innerIterator < this.size() - outerIterator - 1;
          innerIterator++) {
        if (this._comparer.greatherThan(
          this._elements[innerIterator],
            this._elements[ innerIterator + 1])) {
             this.swap(innerIterator);  
        }
      } 
    } 
    return this._elements; 
  }
  size() {
    return this._elements.length;
  }
  
  swap(position) {
    var temporarySwap = this._elements[position];
    this._elements[position] = this._elements[position + 1];
    this._elements[position + 1] = temporarySwap;
  }
} 

scores = [9, 5, 2, 7, 23, 1, 3]; 
sorted = new 
  BubbleSortingStrategy(scores,new ElementComparator()).sorted();