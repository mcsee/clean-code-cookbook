class Boss(object):
    def __init__(self, name):
        self.name = name 
        
class GoodBoss(Boss):
    def __init__(self, name):
        super().__init__(name)
        
# This is actually a very classification example
# Bosses should be immutable but can change their mood
# with constructive feedback