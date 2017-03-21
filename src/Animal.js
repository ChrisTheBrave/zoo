(function() {
  'use strict';

  window.zoo = window.zoo || {};

  window.zoo.Animal = class Animal {

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
