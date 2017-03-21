(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;


  window.zoo.Brahma = class Brahma extends Animal {
    /**
     * Creates Brahma function
     * @param {String} name  Name of the brahma
     * @param {Number} number Date brahma was born
     * @param {Number} number Number of eggs brahma can lay
     * @param {Number} number Size of bird
     * @return {void}
     */
    constructor(name, dateOfBirth, numberOfEggs, birdSizeInFeet) {
      super(name, dateOfBirth);

      this.numberOfEggs = numberOfEggs;
      this.birdSize = birdSizeInFeet;
      this.children = [];
      console.log('Creating a Brahma');
    }
    giveBirth(name) {
      let babyBrahma = new window.zoo.Brahma(name, new Date('10/3/20012'), 3, 1.5);
      this.children.push(babyBrahma);
      return babyBrahma;
    }

    /**
     *Creates scientific name of Brahma
     * @param {String} name
     * @return {String}
     */
    static scientificBrahmaName() {
      return 'Gallus gallus domesticus';
    }

    toString() {
      return this.name + ' was born on ' + this.dateOfBirth + ' and the scientific name of the Brahma is ' + Brahma.scientificBrahmaName() + ' .'
    }

  };



}());
