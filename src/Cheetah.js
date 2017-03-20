(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;

  window.zoo.Cheetah = class Cheetah extends Animal {
    /**
     * Creates the Cheetah function
     * @param {String} name  Name of the cheetah
     * @param {Number} number Date cheetah was born
     * @param {Number} number Number of cubs cheetah can birth
     * @param {Number} number MPH cheetah can run
     * @return {void}
     */
    constructor(name, dateOfBirth, numberOfCubs, runningMPH) {
      super(name, dateOfBirth);

      this.numberOfCubs = numberOfCubs;
      this.runningMPH = runningMPH;
      this.children = [];
      console.log('Creating a Cheetah');
    }

    giveBirth(name) {
      let babyCheetah = new window.zoo.Cheetah(name, new Date('10/3/20016'), 5, 65);
      this.children.push(babyCheetah);
      return babyCheetah;
    }


    /**
     *Creates scientific name of Cheetah
     *@param {String} name
     *@return {String}
     */
    static scientificName() {
      return 'Acinonyx jubatus';
    }

    toString() {
      return this.name + ' was born on ' + this.dateOfBirth;
    }
  };


}());
