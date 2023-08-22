class Item:
  def taxesCharged(self):
    return 1;

lastPurchase = Item('Soda');
# Do something with the purchase

taxAmount = lastPurchase.taxesCharged();
# Lots of stuff related to the purchase
# You drink the soda

# I cannot extract method from below without passing
# useless lastPurchase as parameter

# a few hours later..
lastPurchase = Item('Whisky');
# You bought another drink

taxAmount += lastPurchase.taxesCharged();