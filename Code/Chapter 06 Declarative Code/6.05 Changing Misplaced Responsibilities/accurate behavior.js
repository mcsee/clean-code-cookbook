class Integer {
  function add(adder) {
    return this + adder;
  }
}
// This won't compile in many programming languages
// But it is the right place for adding responsibility

class GraphicEditor {
  drawCircle(radius) {
    console.log(`Drawing a circle with radius ${radius} 
    and circumference ${2 * Number.pi() * radius}.`);
  }
}
// PI's definition is RealConstants (or Number)'s responsibility
