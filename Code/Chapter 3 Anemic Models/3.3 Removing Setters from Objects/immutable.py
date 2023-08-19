class PhoneCall:
  _origin = ''
  _destination = ''
  _durationInSeconds = 0
  
   def __init__(self, origin, destination, durationInSeconds):
      
      if destination == origin:
       raise ValueError("Destination cannot be the same as origin")
      # single control point.
      # We only create valid phone calls and they remain valid since they cannot mutate
      
      self._origin = origin
      self._destination = destination
      self._durationInSeconds = durationInSeconds
      
  # No setters are necessary 
             
  def durationInSeconds(self):
    return self._durationInSeconds
  
  def durationInMilliSeconds(self):
    return self._durationInSeconds * 1000