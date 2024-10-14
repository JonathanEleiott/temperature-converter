// create a prompt for the user asking them to enter a Fahrenheit temp and let them know we'll convert it to Celsius
const userFahrenheitTemp = prompt(`enter your Fahrenheit temp and we'll convert it to Celsius`);

// create a function called `convertToCelsius`
// convertToCelsius takes in a fahrenheit temp
const convertToCelsius = (fahrenheitTemp) => {
  // use the formula to convert the passed in Fahrenheit Temp to Celsius
  // celsiusTemp = (fahrenheitTemp - 32) * (5/9)
  const fahrAsNum = Number(fahrenheitTemp);
  const celsiusTemp = (fahrAsNum - 32) * (5/9);
  // return the Celsius temp
  return celsiusTemp;
}

// create a function called `describeTemperature`
// describeTemperature takes in a fahrenheit temp
const describeTemperature = (fahrTemp) => {
  // if the fahr temp is less than 32
  if(fahrTemp < 32) {
    // then return `very cold`
    return `very cold`;
    // if the fahr temp is less than 64
  } else if(fahrTemp < 64) {
    // then return `cold`
    return `cold`;
    // if the fahr temp is less than 86
  } else if(fahrTemp < 86) {
    // then return `warm`
    return `warm`;
    // if the fahr temp is less than 100
  } else if(fahrTemp < 100) {
    // then return `hot`
    return `hot`;
    // if the fahr temp is more than or equal 100
  } else {
    // then return `very hot`
    return `very hot`;
  }
}

// alert the user `You entered {fahrenheit temp} which converts to {celsius temp} and that feels {feeling description}`
alert(`You entered ${userFahrenheitTemp} Fahrenheit which converts to ${convertToCelsius(userFahrenheitTemp)} Celsius and that feels ${describeTemperature(userFahrenheitTemp)}`);

// push the project to GitHub