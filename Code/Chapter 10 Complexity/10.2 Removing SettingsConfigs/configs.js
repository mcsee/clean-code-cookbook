class VerySpecificAndSmallObjectDealingWithPersistency {   
  retrieveData() {
    if (GlobalSettingsSingleton.getInstance().valueAt('IamAPossibleMistypedString')) {
      this.retriveDataThisWay();
    }
    else {
      this.retriveDataThisOtherWay();    
    }
  }
}

