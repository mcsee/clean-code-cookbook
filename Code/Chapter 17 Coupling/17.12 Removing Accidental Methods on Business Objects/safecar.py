class car:

    def __init__(self,company,color,engine):
        self._company = company
        self._color = color 
        self._engine = engine
    
    def goTo(self, coordinate):        
        self.move()
        
    def startEngine(self):
        ## code to start engine
        self.engine.start() 