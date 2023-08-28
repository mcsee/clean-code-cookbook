def multiply(first_multiplier, second_multiplier):
    return first_multiplier * second_multiplier
    
class TestMultiply(unittest.TestCase):
    def test_multiply_both_possitive_outcome_is_possitive(self):
        result = multiply(2, 3)
        self.assertEqual(result, 6)
    def test_multiply_both_negative_outcome_is_positive(self):
        result = multiply(-2, -4)
        self.assertEqual(result, 8)
    def test_multiply_first_is_zero_outcome_is_zero(self):
        result = multiply(0, -4)
        self.assertEqual(result, 0)
    def test_multiply_second_is_zero_outcome_is_zero(self):
        result = multiply(3, 0)
        self.assertEqual(result, 0)
    def test_multiply_both_are_zero_outcome_is_zero(self):
        result = multiply(0, 0)
        self.assertEqual(result, 0)           

# You define a test function called test_multiply,
# which calls the multiply function with different arguments 
# and verifies that the result is correct using the assertEqual method.

# 1. Take the comment of the method explaining what the function does.
# 2. Rename the method with the comment description (the what).
# 3. Create tests to verify the comments. 
# 4. Omit irrelevant implementation details