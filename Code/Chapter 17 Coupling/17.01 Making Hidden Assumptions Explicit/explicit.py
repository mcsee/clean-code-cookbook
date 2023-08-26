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

tenCentimeters = Measure(10, centimetersUnit)
tenInches = Measure(10, inchesUnit)

tenCentimeters + tenInches
# error until you introduce a conversion factor
# in this case the conversion is constant 
# inches = centimeters / 2.54
