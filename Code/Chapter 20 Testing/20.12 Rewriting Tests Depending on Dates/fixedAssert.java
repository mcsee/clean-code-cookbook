class DateTest {
    @Test
    void testNoFeatureFlagsAfterFixedDate() {
        LocalDate fixedDate = LocalDate.of(2023, 4, 4);
        LocalDate currentDate = LocalDate.now();        
        Assertions.assertTrue(currentDate.isBefore(fixedDate) ||
           !featureFlag.isOn());
    }
}