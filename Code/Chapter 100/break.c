  switch (number) {
      case 1:
          printf("Number is 1.\n");
          break;
      case 2:
          printf("Number is 2.\n"); 
          break; // Added 'break' to prevent fall-through
      case 3:
          printf("Number is 3.\n"); 
          break;
      default:
          printf("Number is not 1, 2, or 3.\n");
  }

// This is correct even though switches AND defaults
// Are other code smells