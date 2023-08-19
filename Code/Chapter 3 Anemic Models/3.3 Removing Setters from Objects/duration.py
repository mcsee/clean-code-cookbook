class PhoneCall:
  _origin = ''
  _destination = ''
  _duration = 0
    
  def set_duration(self, durationInSeconds):
    self._duration = durationInSeconds
            
  def get_duration(self):
    return self._duration
  
# duration is exposed in seconds as a ripple effect
# this violates information hiding principle and prevents us from changing it representation