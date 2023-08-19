Assert.assertEquals(0.0012f, 0.0014f, 0.0002); // true
Assert.assertEquals(0.0012f, 0.0014f, 0.0001); // false
// The last parameter is the delta threshold

Assert.assertEquals(12 / 10000, 12 / 10000); // true
Assert.assertEquals(12 / 10000, 14 / 10000); // false