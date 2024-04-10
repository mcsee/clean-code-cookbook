try {
	for (int index = 0;; index++)
		array[index]++;
	} catch (ArrayIndexOutOfBoundsException e) {}

// Endless loop without end condition