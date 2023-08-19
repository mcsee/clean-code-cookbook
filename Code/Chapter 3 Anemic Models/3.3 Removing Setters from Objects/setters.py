 
class PhoneCall:
  _origin = ''
  _destination = ''
  _duration = 0
  
  def set_origin(self, originNumber):
    self._origin = originNumber
    
  def set_destination(self, destinationNumber):
    self._destination = destinationNumber
    
  def set_duration(self, durationInSeconds):
    self._duration = durationInSeconds 

janePhoneCall = PhoneCall()
janePhoneCall.set_origin('555-5555')
janePhoneCall.set_destination('444-4444')
janePhoneCall.set_duration(60)

# Anemic and mutable Class 