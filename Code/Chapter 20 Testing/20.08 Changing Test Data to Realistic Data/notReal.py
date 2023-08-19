class BookCartTestCase(unittest.TestCase):
    def setUp(self):
        self.cart = Cart()

    def test_add_book(self):
       self.cart.add_item('xxxxx', 3, 10)
        # This is not a real example
       self.cart.emailAddress('sarsasa')
        # This is not a real email

       self.assertEqual(self.cart.total, 30, msg='Book Cart total not correct after adding books')
       self.assertEqual(self.cart.items['xxxxx'], 3, msg='Quantity of items not correct after adding book')
 
    def test_remove_item(self):
        self.cart.add_item('fgdfhhfhhh', 3, 10)
        self.cart.remove_item('fgdfhhfhrhh', 2, 10)    
        # We made a typo since example is not a real one
        self.assertEqual(self.cart.total, 10, msg='Book Cart total not correct after removing book')
        self.assertEqual(self.cart.items['fgdfhhfhhh'], 1, msg='Quantity of books not correct after removing book')