class Thermostat {

  constructor(temperature) {
    this.DEFAULT_TEMPERATURE = 20;
    this.TEMPERATURE = 20;
    this.POWER_SAVE_MAX_TEMPERATURE = 24;
    this.MAX_TEMPERATURE = 31;
    this.MIN_TEMPERATURE = 10;
    this.POWER_SAVE = false;

  }

  getTemperature() {
    return this.TEMPERATURE;
  }
  
  up() {
    if (this.POWER_SAVE === false && this.TEMPERATURE > this.MAX_TEMPERATURE) {
      return;
    } else if (this.POWER_SAVE === true && this.TEMPERATURE > this.POWER_SAVE_MAX_TEMPERATURE) {
      return;
    } else {
    this.TEMPERATURE ++;
    }
  }

  down() {
    if (this.TEMPERATURE < this.MIN_TEMPERATURE) {
      return;
    }
    this.TEMPERATURE --;
  }

  setPowerSave(boolean) {
    if (boolean === true) {
      this.POWER_SAVE = true;
    } else if (boolean === false) {
      this.POWER_SAVE = false;
    }
  }

  reset() {
    this.TEMPERATURE = this.DEFAULT_TEMPERATURE;
  }

  checkEnergyUsage() {
    if (this.TEMPERATURE < 18) {
      return 'Low usage';
    } else if (this.TEMPERATURE <= 25) {
      return 'Medium usage';
    } else {
      return 'The temperature is TOO DAMN HIGHHHHHHHHHH';
    }
  }
}

module.exports = Thermostat;