class VerySpecificAndSmallObjectDealingWithPersistency { 
   constructor(retrieveStrategy) {   
    this.retrieveStrategy = retrieveStrategy;
  }
  retrieveData() {
    this.retrieveStrategy.retrieveData();        
  }
}
// You get rid of the if condition by using a polymorphic strategy