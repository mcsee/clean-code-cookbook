int main(void)
{    
    int id;
    id = get_value();
    if (id < 0) 
    { 
        printf("Error: Failed to obtain value\n");
        return EXIT_FAILURE;
    }  
    return id;
}  

int get_value() 
{
  // something bad happened
  return -1; // Return a negative value to indicate error
}

// No INVALID_VALUE defined