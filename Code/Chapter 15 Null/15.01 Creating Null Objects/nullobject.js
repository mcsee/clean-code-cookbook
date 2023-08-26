class CartItem {
    constructor(price) {
        this.price = price;
    }
}

class DiscountCoupon {
    constructor(rate) {
        this.rate = rate;
    }

    discount(subtotal) {
        return subtotal * (1 - this.rate);
    }
}

class NullCoupon {
    discount(subtotal) {
        return subtotal;
    }
}

class Cart {
    constructor(selecteditems, discountCoupon) {
        this.items = selecteditems;
        this.discountCoupon = discountCoupon;
    }

    subtotal() {
        return this.items.reduce(
            (previous, current) => previous + current.price, 0);
    }

    total() {
        return this.discountCoupon.discount(this.subtotal());
    }
}

cart = new Cart([
    new CartItem(1),
    new CartItem(2),
    new CartItem(7)
    ], new DiscountCoupon(0.15));
// 10 - 1.5 = 8.5

cart = new Cart([
    new CartItem(1),
    new CartItem(2),
    new CartItem(7)
    ], new NullCoupon());
// 10 - nullObject = 10