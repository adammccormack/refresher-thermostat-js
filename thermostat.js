class Thermostat {

  constructor(temperature) {
    this.TEMPERATURE = 20;
    this.POWER_SAVE_MAX_TEMPERATURE = 24;
    this.MAX_TEMPERATURE = 32;
    this.MIN_TEMPERATURE = 10;
    this.POWER_SAVE = false;

  }

  getTemperature() {
    return this.TEMPERATURE;
  }
  
  up() {
    if (this.POWER_SAVE === false && this.TEMPERATURE > 31) {
      return;
    } else if (this.POWER_SAVE === true && this.TEMPERATURE > this.MAX_TEMPERATURE) {
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
    this.TEMPERATURE = 20;
  }

}

module.exports = Thermostat;