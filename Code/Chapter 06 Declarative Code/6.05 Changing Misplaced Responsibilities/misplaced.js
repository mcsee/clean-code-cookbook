function add(a, b) {
  return a + b;
}
// this is natural in many programming languages,
// but unnatural in real life

class GraphicEditor {
  constructor() {
    this.PI = 3.14;
    // You shouldn't define the constant here
  }

  pi() {
    return this.PI;
    // Not this object's responsibility
  }

  drawCircle(radius) {
    console.log("Drawing a circle with radius ${radius} " +
    "and circumference " + (2 * this.pi()) * radius");
  }
}