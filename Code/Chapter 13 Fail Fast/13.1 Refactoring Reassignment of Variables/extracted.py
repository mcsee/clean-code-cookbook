class Item:
  def __init__(self, name):
    self.name = name
  def taxesCharged(self):
    return 1;
class Money:
  pass 
  
def buySupper():
  supperPurchase = Item('Soda');
  # Do something with the purchase
 
  # Lots of stuff related to the purchase
  # I drink the soda
  return supperPurchase;

def buyDrinks():
  # I could extract method! 

  # a few hours later..
  drinksPurchase = Item('Whisky');
  # I bough another drink
  
  return drinksPurchase;

taxAmount = buySupper().taxesCharged() + buyDrinks().taxesCharged();