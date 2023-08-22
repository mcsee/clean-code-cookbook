class Item:
  def taxesCharged(self):
    return 1;
  
def buySupper():
  supperPurchase = Item('Soda');
  # Do something with the purchase
 
  # Lots of stuff related to the purchase
  # You drink the soda
  return supperPurchase;

def buyDrinks():
  # You could extract method! 

  # a few hours later..
  drinksPurchase = Item('Whisky');
  # You bough another drink
  
  return drinksPurchase;

taxAmount = buySupper().taxesCharged() + buyDrinks().taxesCharged();