class Unit:
    def __init__(self, name, symbol):
        self.name = name
        self.symbol = symbol

class Measure:
    def __init__(self, scalar, unit):
        self.scalar = scalar
        self.unit = unit

    def __str__(self):
        return f"{self.scalar} {self.unit.symbol}"

centimetersUnit = Unit("centimeters", "cm")
inchesUnit = Unit("inches", "in")

tencCentimeters = Measure(10, centimeters)
tenInches = Measure(10, inches)

tenCentimeters + tenInches
# error until we introduce a conversion factor
# in this case the conversion is constant 
# inches = centimeters / 2.54
