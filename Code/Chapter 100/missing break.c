  switch (number) {
      case 1:
          printf("Number is 1.\n");
          break;
      case 2:
          printf("Number is 2.\n"); 
          // Missing break
      case 3:
          // Case 2 will continue here
          printf("Number is 3.\n"); 
          break;
      default:
          printf("Number is not 1, 2, or 3.\n");
  }

// If the number is 2 this will output numbers 2 and 3