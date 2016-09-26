"use strict";
/*
  Create a function named Car with one property named `manufactured_date`
  whose value will be Date.now()
 */
function Car () {
  // Create the manufactured date property (see above)
  this.manufacturedDate = Date.now();
}

/*
  1. Create a new constructor function for the make of your favorite car.
  2. It must inherit from the more general Car object.
  3. Give it one property, named manufacturer, that holds a string value.
         For, example, this.manufacturer = "Ford".
 */
function Tesla () {
  this.make = "Tesla";
}
// Set the prototype to a new Car instance
Tesla.prototype = new Car();

/*
  1. Create a constructor function named after your favorite car model.
  2. It must inherit from the specific make type you created in previous step.
  3. Create some instance properties that are specific to the specific
        car model (e.g. horsepower, cargo capacity, etc.)
*/
function ModelS () {
  this.model = "ModelS";
}
// Set the prototype to appropriate model you created above and set the model name argument
ModelS.prototype = new Tesla();

/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    1. Create three new instances of your favorite car.
    2. Create a new property on each object to hold the license plate
       number for each car.
*/
var myFirstFavoriteCar = new ModelS();
myFirstFavoriteCar.plate_number = "111-111";
var mySecondFavoriteCar = new ModelS();
mySecondFavoriteCar.plate_number = "222-222";
var myThirdFavoriteCar = new ModelS();
myThirdFavoriteCar.plate_number = "333-333";



/*
  Now let's see some power of prototypal inheritance. Create a function for
  another model that's made by the manufacturer as your previous car. So if
  your first model was Fusion, make another one here for F150, for example.
 */
function ModelX () {
  this.model = "ModelX";
}
/*
  Assign the prototype to the make you define above. Now both models will
  inherit the `manufacturer` property from the make function.
 */
 ModelX.prototype = new Tesla();
/*
  Now create an instance of this new car model to put in your garage. Remember
  to give it a plate number.
 */
var myFourthFavoriteCar = new ModelX();
myFourthFavoriteCar.plate_number = "444-444";
var myFifthFavoriteCar = new ModelX();
myFifthFavoriteCar.plate_number = "555-555";
var mySixthFavoriteCar = new ModelX();
mySixthFavoriteCar.plate_number = "666-666";


console.log("Car", new Car());
console.log("Tesla", new Tesla());
console.log("ModelS", new ModelS());
console.log("myFirstFavoriteCar", myFirstFavoriteCar);
console.log("myFourthFavoriteCar", myFourthFavoriteCar);