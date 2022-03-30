const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const Thermostat = require("./thermostat");

const thermostat = new Thermostat;

console.log(thermostat.getTemperature());

const userInput = () => {rl.question('What would you like to do? ', (answer) => {
  if (answer === 'up') {
    thermostat.up();
  } else if (answer === 'down') {
    thermostat.down();
  } else if (answer === 'psm on') {
    thermostat.setPowerSavingMode(true);
  } else if (answer === 'psm off') {
    thermostat.setPowerSavingMode(false);
  } else if (answer === 'reset') {
    thermostat.reset();
  }
  console.log(thermostat.getTemperature());
  userInput();
});
};

userInput();