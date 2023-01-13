function carFactory(obj) {
  const engine = [
    { power: 90, volume: 1800 },
    { power: 120, volume: 2400 },
    { power: 200, volume: 3500 },
  ];

  const carriage = {
    hatchback: { type: "hatchback", color: obj.color },
    coupe: { type: "coupe", color: obj.color },
  };

  function wheels() {
    let diameter = Number(obj.wheelsize);
    if (diameter % 2 === 0) {
      diameter--;
    }
    let arr = Array(4).fill(diameter);

    return arr;
  }

  return {
    model: obj.model,
    engine: engine.find((e) => e.power >= obj.power),
    carriage: carriage[obj.carriage],
    wheels: wheels(),
  };
}
console.log(
  carFactory({
    model: "VW Golf II",
    power: 90,
    color: "blue",
    carriage: "hatchback",
    wheelsize: 14,
  })
);
console.log(
  carFactory({
    model: "Opel Vectra",
    power: 110,
    color: "grey",
    carriage: "coupe",
    wheelsize: 17,
  })
);
