class ProductionEnvironment:
  FROM_EMAIL = "Bob Builder <bob@builder.com>"

class DevelopmentEnvironment:
  FROM_EMAIL = "Bob Builder Development <bob@builder.com>"
  
# We can unit test environments
# and even implement different sending mechanisms

def send_welcome_email(email_address, environment):
  print("Sending welcome email to {email_address} "
        "from {environment.FROM_EMAIL}")
  # We can delegate into a fake sender (and possible logger)
  # and unit test it

send_welcome_email("john@doe.com", DevelopmentEnvironment())
# Sending welcome email to john@doe.com 
# from Bob Builder Development <bob@builder.com>

send_welcome_email("john@doe.com", ProductionEnvironment())
# Sending welcome email to john@doe.com 
# from Bob Builder <bob@builder.com>