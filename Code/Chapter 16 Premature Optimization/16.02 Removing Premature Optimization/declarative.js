class Person {   
  ancestors() {
     return this.mother.meAndAncerstors().concat(this.father.meAndAncerstors());      
  }
  meAndAncerstors() {
     return this.ancestors().push(this);
  }
}