class car:

    def __init__(self, company, color, engine):
        self._company = company
        self._color = color 
        self._engine = engine
    
    def goTo(self, coordinate):        
        self.move()
        
    def startEngine(self):
        ## code to start engine
        self.engine.start()
    
    def display(self):
        print ('This is a', self._color, self.company)
        ## Displaying is accidental
        
    def toJSon(self):
        ## Serializing is accidental
        return "json"
        
    def updateOnDatabase(self):
        ## Persistence is accidental
        this.database.update(this)
        
    def getId(self):
        ## identifiers are accidental
        return id;
        
    def fromRow(self, row):
        ## Persistence is accidental
        this.database.convertFromRow(row, this);
        
    def forkCar(self):
        ## Concurrency is accidental
        ConcurrencySemaphoreSingleton.getInstance().forkCar(this)