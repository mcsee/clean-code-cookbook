<?

if (isOpen(file) && size(contents(file)) > 0)
  // Short circuit evaluation 
  // If file is not open it will not get the contents  