//Class Car để khởi tạo các object, sau đó được truyền vào decorator function

function Car(name) {
  this.name = name;

  // Default values
  this.color = "White";
}

// Creating a new Object to decorate
const tesla = new Car("Tesla Model 3");

// Decorating the object with new functionality

tesla.setColor = function (color) {
  this.color = color;
};

tesla.setPrice = function (price) {
  this.price = price;
};

tesla.setColor("black");
tesla.setPrice(49000);

// Prints blank
console.log(tesla.color);

//hoac

class Car {
  constructor() {
    // Default Cost
    this.cost = function () {
      return 20000;
    };
  }
}

// Decorator function
function carWithAC(car) {
  car.hasAC = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 500;
  };
}

// Decorator function
function carWithAutoTransmission(car) {
  car.hasAutoTransmission = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 2000;
  };
}

// Decorator function
function carWithPowerLocks(car) {
  car.hasPowerLocks = true;
  const prevCost = car.cost();
  car.cost = function () {
    return prevCost + 500;
  };
}
