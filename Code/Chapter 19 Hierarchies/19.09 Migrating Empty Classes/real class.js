class ShopItem { 
  constructor(code, description) {
    // validate code and description
    this._code = code;
    this._description = description;
  }
  code() { return this._code }
  description() { return this._description }                 
  // Add more functions to avoid anemic classes
  // getters are also code smells, so you need to iterate it
}

bookItem = new ShopItem('book', 'some book);
// create more items