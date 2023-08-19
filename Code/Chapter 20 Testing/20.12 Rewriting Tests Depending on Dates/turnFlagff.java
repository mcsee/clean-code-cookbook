class DateTest {
    @Test
    void testNoFeatureFlags() {   
        Assertions.assertFalse(featureFlag.isOn());
    }
}