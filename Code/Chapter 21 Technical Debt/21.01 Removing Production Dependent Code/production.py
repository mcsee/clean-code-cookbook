def send_welcome_email(email_address, environment):
  if ENVIRONMENT_NAME == "production":
    print("Sending welcome email to {email_address} "
          "from Bob Builder <bob@builder.com>")
  else:
    print("Emails are sent only on production")
    
send_welcome_email("john@doe.com", "development")
# Emails are sent only on production

send_welcome_email("john@doe.com", "production")
# Sending welcome email to john@doe.com
# from Bob Builder <bob@builder.com>