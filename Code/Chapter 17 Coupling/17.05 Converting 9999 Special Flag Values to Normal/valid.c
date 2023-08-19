#include "stdio.h"
#include "stdlib.h"
#include "stdbool.h"
// No INVALID_VALUE defined

int main(void)
{    
    int id;
    id = get_value();
    if (!id) 
    { 
        return EXIT_FAILURE;
        // Sadly, C Programming Language has no exceptions
    }  
    return id;
}  

get_value() 
{
  // something bad happened
  return false;
}

// returns EXIT_FAILURE (1)