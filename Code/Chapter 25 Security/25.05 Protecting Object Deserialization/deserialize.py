import pickle  # Python's serialization module

def process_serialized_data(serialized_data):
    try:
        obj = pickle.loads(serialized_data)  
        # Deserialize the object
        # Process the deserialized object
        # ...

# User-submitted serialized data
user_data = (
    b"\x80\x04\x95\x13\x00\x00\x00\x00\x00\x00\x00\x8c\x08os\n"
    b"system\n\x8c\x06uptime\n\x86\x94."
)
# This code executes os.system("uptime") 

process_serialized_data(user_data)
