class BookCartTestCase(unittest.TestCase):
    def setUp(self):
        self.cart = Cart()

    def test_add_book(self):
       self.cart.add_item('Harry Potter', 3, 10)
       self.cart.emailAddress('seller@example.com')
       
       self.assertEqual(
           self.cart.total,
           30, 
           msg='Book Cart total not correct after adding books')
       self.assertEqual(
           self.cart.items['Harry Potter'],
           3,
           msg='Quantity of items not correct after adding book')

    # We don't reuse same example.
    # We use a new REAL book
    def test_remove_item(self):
        self.cart.add_item('Divergent', 3, 10)
        self.cart.remove_item('Divergent', 2, 10)    
        self.assertEqual(
            self.cart.total,
            10,
            msg='Book Cart total not correct after removing book')
        self.assertEqual(
            self.cart.items['Divergent'],
            1,
            msg='Quantity of books not correct after removing book')
