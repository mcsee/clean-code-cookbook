class CartItem {
    constructor(price) {
        this.price = price;
    }
}

class DiscountCoupon {
    constructor(rate) {
        this.rate = rate;
    }
}

class Cart {
    constructor(selecteditems, discountCoupon) {
        this.items = selecteditems;
        this.discountCoupon = discountCoupon;
    }

    subtotal() {
        return this.items.reduce((previous, current) => 
            previous + current.price, 0);
    }

    total() {
        if (this.discountCoupon == null)
            return this.subtotal();
        else
            return this.subtotal() * (1 - this.discountCoupon.rate);
    }
}

cart = new Cart([
    new CartItem(1),
    new CartItem(2),
    new CartItem(7)
    ], new DiscountCoupon(0.15)]);
// 10 - 1.5 = 8.5

cart = new Cart([
    new CartItem(1),
    new CartItem(2),
    new CartItem(7)
    ], null);
// 10 - null  = 10