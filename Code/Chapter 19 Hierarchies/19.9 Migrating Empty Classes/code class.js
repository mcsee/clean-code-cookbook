class ShopItem { 
  code() { }
  description() { }                 
}

class BookItem extends ShopItem { 
   code() { return 'book' }
   description() { return 'some book'}     
}

// concrete Class has no real behavior, just return different 'data'