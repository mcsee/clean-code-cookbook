<?

if (isOpen(file) & size(contents(file)) > 0)
  // Full evaluation 
  // Will fail since we cannot retrieve contents 
  // from not open file