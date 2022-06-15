class Thermostat {

  constructor(temperature) {
    this.TEMPERATURE = 20;
    this.MAX_TEMPERATURE = 24;
    this.POWER_SAVE = false;

  }

  getTemperature() {
    return this.TEMPERATURE;
  }
  
  up() {
    if (this.POWER_SAVE === true && this.TEMPERATURE > this.MAX_TEMPERATURE) {
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

}

module.exports = Thermostat;