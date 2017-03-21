(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {

    /**
     * Creates new Animal
     * @param {String} name Animal name
     * @param {Date} date Animal birth date
     * @return {void}
     */
    constructor(name, dateOfBirth)  {
      this.name = name;

      if (!(dateOfBirth instanceof Date)) {
        dateOfBirth = new Date();
      }
      this.date = dateOfBirth;
      console.log('Creating a new animal!');


    }

    // the code below will allow us to do the following:
    // let me = new Animal('me', new Date('1/1/2000'));
    // console.log( me.dateOfBirth ); // it will ACTUALLY read the `date` property
    get dateOfBirth(){
      return this.date;
      // console.log(this.date);
    }
    /**
     * Get animal age in whole years
     * @return {Number}
     */
    getAge() {
      return (new Date()).getFullYear() - this.dateOfBirth.getFullYear();
    }
    changeAnimalName(newAnimalName) {
      this.name = newAnimalName;
    }
    toString(){
      return 'The ' + this.name + ' was born on ' + this.date;
    }
  };

}());
