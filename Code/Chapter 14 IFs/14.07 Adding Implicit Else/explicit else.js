function carBrandExplicit(model) {
  if (model === 'A4') {
    return 'Audi';
  }
  if (model === 'AMG') {
    return 'Mercedes-Benz';
  }
  
  // Fail Fast
  throw new Exception('Model not found);
}