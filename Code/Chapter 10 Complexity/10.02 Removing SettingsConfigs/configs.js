class VerySpecificAndSmallObjectDealingWithPersistency {
    retrieveData() {
        if (GlobalSettingsSingleton.getInstance()
            .valueAt('RetrievDataDirectly')) {
            // Notice the unnoticed typo in 'RetrievDataDirectly'
            this.retrieveDataThisWay();
        }
        else {
            this.retrieveDataThisOtherWay();
        }
    }
}