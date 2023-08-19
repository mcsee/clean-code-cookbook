class Date:
  def __init__(self, day, month, year):
    self.day = day
    self.month = month
    self.year = year

  def setMonth(self, month):
    self.month = month

startDate = Date(3, 11, 2020)
# OK

startDate = Date(31, 11, 2020)
# Should fail

startDate.setMonth(13)
# Should fail