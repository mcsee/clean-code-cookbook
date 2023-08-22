class Person {
    ancestors() {
        cachedResults = 
            GlobalPeopleSingletonCache.getInstance().relativesCache(this.id);
        if (cachedResults != null) {
            return (cachedResults.hashFor(this.id)).getAllParents();
        }
        return database().getAllParents(this.id);
    }
}