class Item:
  def __init__(self, name):
    self.name = name
  def taxesCharged(self):
    return 1;
class Money:
  pass 

lastPurchase = Item('Soda');
# Do something with the purchase

taxAmount = lastPurchase.taxesCharged();
# Lots of stuff related to the purchase
# I drink the soda

# I cannot extract method from below without passing
# useless lastPurchase as parameter

# a few hours later..
lastPurchase = Item('Whisky');
# I bought another drink

taxAmount += lastPurchase.taxesCharged();