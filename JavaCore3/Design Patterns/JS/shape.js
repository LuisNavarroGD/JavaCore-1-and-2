const circle = (radius) => {
  const proto = {
    type: "Circle",
    area() {
      return Math.PI * Math.pow(this.radius, 2);
    },
  };
  return Object.assign(Object.create(proto), { radius });
};

const square = (length) => {
  const proto = {
    type: "Square",
    area() {
      return Math.pow(this.length, 2);
    },
  };
  return Object.assign(Object.create(proto), { length });
};

const areaCalculator = (shapes) => {
  const proto = {
    sum() {
      const areas = this.shapes.map((shape) => shape.area());
      return areas.reduce((a, b) => a + b, 0);
    },
    output(format = "TEXT") {
      const totalArea = this.sum();
      switch (format.toUpperCase()) {
        case "JSON":
          return JSON.stringify({ totalArea });
        case "HTML":
          return `<div>Total Area: ${totalArea} units</div>`;
        case "HAML":
          return `.total-area Total Area: ${totalArea} units`;
        case "JADE":
          return `div Total Area: ${totalArea} units`;
        default:
          return `${totalArea} units`;
      }
    },
  };
  return Object.assign(Object.create(proto), { shapes });
};

// Crear las formas
const shapes = [
  circle(2), // Área: ~12.57
  square(5), // Área: 25
  square(6), // Área: 36
];

// Crear el calculador de áreas
const areas = areaCalculator(shapes);

// Mostrar resultados en diferentes formatos
console.log(areas.output("JSON")); // {"totalArea":73.56637061435917}
console.log(areas.output("HTML")); // <div>Total Area: 73.56637061435917 units</div>
console.log(areas.output("HAML")); // .total-area Total Area: 73.56637061435917 units
console.log(areas.output("JADE")); // div Total Area: 73.56637061435917 units
console.log(areas.output()); // 73.56637061435917 units
