class Date:
  def __init__(self, day, month, year):
  	if month > 12:
    	raise Exception("Month should not exceed 12")
    #
    # etc ...
  
    self._day = day
    self._month = month
    self._year = year
 
startDate = Date(3, 11, 2020)
# OK

startDate = Date(31, 11, 2020)
# fails

startDate.setMonth(13)
# fails since invariant makes object immutable