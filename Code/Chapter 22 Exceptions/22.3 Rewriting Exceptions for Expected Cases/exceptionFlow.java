try {
	for (int i = 0;; i++)
		array[i]++;
	} catch (ArrayIndexOutOfBoundsException e) {}

// Endless loop without end condition