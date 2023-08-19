import json

def process_serialized_data(serialized_data):
    try:
        obj = json.loads(serialized_data)  
        # Deserialize the JSON object
        # Does not execute code
        # ...

user_data = '{"key": "value"}'

process_serialized_data(user_data)
