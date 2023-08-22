<?

if (isOpen(file) && size(contents(file)) > 0)
  // Short circuit evaluation 
  // If the file is not open it willtry to get the contents  