class VerySpecificAndSmallObjectDealingWithPersistency { 
   constructor(retrieveStrategy) {   
    this.retrieveStrategy = retrieveStrategy;
  }
  retrieveData() {
    this.retrieveStrategy.retrieveData();        
  }
}