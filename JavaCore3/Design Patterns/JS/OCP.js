// Clase base para las formas geométricas
class Shape {
  area() {
    throw new Error("This method must be implemented in subclasses");
  }
}

// Implementaciones específicas para cada forma
class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  area() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Square extends Shape {
  constructor(length) {
    super();
    this.length = length;
  }

  area() {
    return Math.pow(this.length, 2);
  }
}

// Clase que utiliza las formas sin modificar su implementación
class AreaCalculator {
  calculate(shapes) {
    return shapes.reduce((total, shape) => total + shape.area(), 0);
  }
}

// Uso
const shapes = [
  new Circle(2), // Área: ~12.57
  new Square(5), // Área: 25
];

const calculator = new AreaCalculator();
console.log(calculator.calculate(shapes)); // ~37.57