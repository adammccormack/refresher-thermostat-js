class Thermostat {

  constructor(temperature) {
    this.TEMPERATURE = 20;
    this.MAX_TEMPERATURE = 25;
    this.POWER_SAVE = false;
  }

  getTemperature() {
    return this.TEMPERATURE;
  }
  
  up() {
    if (this.POWER_SAVE === true && this.TEMPERATURE > 24) {
      return;
    }
    this.TEMPERATURE ++;
  }

  down() {
    this.TEMPERATURE --;
  }

  setPowerSave(boolean) {
    if (boolean === true) {
      this.POWER_SAVE = true;
    } else if (boolean === false) {
      this.POWER_SAVE = false;
    }
  }
  
  // if PSM === true;
  // this.temperature <= 25;
}

module.exports = Thermostat;