def is_platypus(self):
    return self.is_mammal() && self.has_fur() && self.has_beak() && self.has_tail() && self.can_swim()
  
# We can even group conditions according to animal taxonomies