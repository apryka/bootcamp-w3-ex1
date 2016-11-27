(function() {

    'use strict';

    class Person {

      constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
      }

      sayHello() {
        console.log(`Cześć, nazywam się ${ this.firstName } ${ this.lastName } !`);
      }

    }

    class Programmer extends Person {

      constructor(firstName, lastName, lang = 'Javascript') {
        super(firstName, lastName);

        this.firstName = firstName;
        this.lastName = lastName;
        this.lang = lang;
      }

      work() {

        this.sayHello();
        console.log(`Piszę właśnie kod w moim ulubionym języku, którym jest ${ this.lang }.`);

      }
    }

    var jsDev = new Programmer("Jan", "Kowalski", "Python");
    var jsDev2 = new Programmer("Artur", "Pryka");

    jsDev.work();
    jsDev2.work();


})();

// 
// function Person(firstName, lastName) {
//
//     if( !(this instanceof Person) ) {
//         return new Person(firstName, lastName);
//     }
//
//     this.firstName = firstName;
//     this.lastName = lastName;
//
// }
//
// Person.prototype.sayHello = function() {
//
//     console.log("Cześć, nazywam się " + this.firstName + " " + this.lastName + "!");
//
// };
//
// function Programmer(firstName, lastName, lang) {
//
//     lang = lang || "JavaScript";
//
//     Person.call(this, firstName, lastName);
//
//     this.lang = lang;
//
// };
//
// Programmer.prototype = Object.create(Person.prototype);
// Programmer.prototype.constructor = Programmer;
//
// Programmer.prototype.work = function() {
//
//     this.sayHello();
//     console.log("Piszę właśnie kod w moim ulubionym języku, którym jest " + this.lang + ".");
//
// };
//
// var jsDev = new Programmer("Jan", "Kowalski", "Python");
//
// jsDev.work();
