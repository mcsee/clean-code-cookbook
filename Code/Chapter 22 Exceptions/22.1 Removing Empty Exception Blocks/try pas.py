# bad
import logging

def send_email(): 
  print("Sending email") 
  raise ConnectionError("Oops")
  
try:
  send_email() 
except: 
  # AVOID THIS
pass