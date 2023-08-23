def sanitize(string):
  # Remove any characters that are not letters or numbers
  sanitized_string = re.sub(r'[^a-zA-Z0-9]', '', string)
  
  return sanitized_string

user_input = "abc123!@#"
print(sanitize(user_input))  # Output: "abc123"