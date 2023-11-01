const celsiusToFahrenheit = celsius => 
  (celsius * 1.8) + 32;
const fahrenheitToCelsius = fahrenheit =>
  (fahrenheit - 32) / 1.8;

 const convertTemperature = (temperature, unit)=>{
   if(unit === "C"){
     return celsiusToFahrenheit(temperature);
   } else if (unit ==="F"){
     return fahrenheitToCelsius(temperature)
     
   } else {
     return "invalid unit. use 'F' for fahrenheit or 'C' for Celsius"
   }
 }

const celsiusValue = 25;
const fahrenheitValue = 77;

const convertedToFahrenheit = convertTemperature(celsiusValue, "C");
const convertedToCelsius = convertTemperature(fahrenheitValue, "F");

console.log(convertedToCelsius);
console.log(convertedToFahrenheit);