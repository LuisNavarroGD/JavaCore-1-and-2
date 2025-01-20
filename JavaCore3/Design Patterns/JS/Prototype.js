const animal = {
  comer() {
    console.log("El animal está comiendo");
  },
};

const perro = Object.create(animal);
perro.ladrar = function () {
  console.log("El perro está ladrando");
};

perro.comer(); // El animal está comiendo
perro.ladrar(); // El perro está ladrando
