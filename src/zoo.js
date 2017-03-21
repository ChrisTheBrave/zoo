(function() {
  'use strict';

  window.zoo = window.zoo || {};

  let Animal = window.zoo.Animal;
  let Cheetah = window.zoo.Cheetah;
  let Brahma = window.zoo.Brahma;


  let nala = new Cheetah('Nala', new Date('2/14/2004'), 5, 70);
  console.log( nala.toString() );
  console.log( nala.getAge() );

  console.log(nala.giveBirth('scar'));
  console.log(nala.giveBirth('speed'));
  console.log(nala.giveBirth('lenny'));



  let pepita = new Brahma('Pepita', new Date('07/17/2010'), 4, 2);
  console.log( pepita.toString() );
  console.log( pepita.getAge() );

  console.log(pepita.giveBirth('leon'));
  console.log(pepita.giveBirth('osito'));
  console.log(pepita.giveBirth('flash'));

  try {
  new Animal();
  } catch(err) {
    console.warn(err.message);
  }
})();
