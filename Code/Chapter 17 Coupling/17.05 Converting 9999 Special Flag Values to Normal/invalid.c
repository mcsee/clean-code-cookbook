#define INVALID_VALUE 999

int main(void)
{    
    int id = get_value();
    if (id == INVALID_VALUE)
    { 
        return EXIT_FAILURE;  
        // id is a flag and also a valid domain value        
    }
    return id;
}

int get_value() 
{
  // something bad happened
  return INVALID_VALUE;
}

// returns EXIT_FAILURE (1)