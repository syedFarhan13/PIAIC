function createCar(manufacturer, model, ...options) {
    let car = {
      manufacturer: manufacturer,
      model: model
    };
    
    for (let i = 0; i < options.length; i += 2) {
      let key = options[i];
      let value = options[i+1];
      car[key] = value;
    }
  
    return car;
  }
  
  let myCar = createCar("Tesla", "Model S", "color", "red", "autopilot", true);
  console.log(myCar);
  