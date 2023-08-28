# Since you have a setter you can create invalid combinations

janePhoneCall = PhoneCall()
janePhoneCall.set_origin('555-5555')
janePhoneCall.set_destination('555-5555')
janePhoneCall.set_duration(60) 

# You can't change the destination during the call.
# This is not enforced due to setters

# Origin and Destination cannot be the same

 def set_destination(self, destinationNumber):
    if destinationNumber == self._origin:
      raise ValueError("Destination cannot be the same as origin")
    self._destination = destinationNumber
    
 def set_origin(self, originNumber):
    if originNumber == self._destination:
      raise ValueError("Destination cannot be the same as origin")
    # repeated code   
    self._origin = originNumber
