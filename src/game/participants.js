/* articles on javascript classes

https://www.programiz.com/javascript/classes

Classes are one of the features introduced in the ES6 version of JavaScript.

A class is a blueprint for the object. You can create an object from the class.

You can think of the class as a sketch (prototype) of a house.
It contains all the details about the floors, doors, windows, etc.
Based on these descriptions, you build the house. House is the object.

Since many houses can be made from the same description, we can create many objects from a class.

JavaScript class is similar to the Javascript constructor function, and it is merely a syntactic sugar.

The constructor function is defined as:

// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// create an object
const person1 = new Person();

Instead of using the function keyword, you use the class keyword for creating JS classes. For example,

// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}

The class keyword is used to create a class. The properties are assigned in a constructor function.

Now you can create an object. For example,

// creating a class
class Person {
  constructor(name) {
    this.name = name;
  }
}

// creating an object
const person1 = new Person('John');
const person2 = new Person('Jack');

console.log(person1.name); // John
console.log(person2.name); // Jack

Here, person1 and person2 are objects of Person class.

Note: The constructor() method inside a class gets called automatically each time an object is created.

https://www.javascripttutorial.net/es6/javascript-class/
Unlike other programming languages such as Java and C#, JavaScript classes are syntactic sugar over the prototypal inheritance.
In other words, ES6 classes are just special functions.

Prior to ES6, JavaScript had no concepts of classes.
To mimic a class, you often use the constructor/prototype pattern as shown in the following example:

function Person(name) {
    this.name = name;
}

Person.prototype.getName = function () {
    return this.name;
};

var john = new Person("John Doe");
console.log(john.getName());

Output:
John Doe

How it works.

First, create the Person as a constructor function that has a property name called name. The getName() function is assigned to the prototype so that it can be shared by all instances of the Person type.

Then, create a new instance of the Person type using the new operator. The john object, hence, is an instance of the Person and Object through prototypal inheritance.

The following statements use the instanceof operator to check if john is an instance of the Person and Object type:

console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

*/


import { deck } from './globals';

class Deck {
  // “Class fields” is a syntax that allows to add any properties.
  // https://javascript.info/class
  cardCount = 52
  cards = deck
}

export class Dealer {

  /* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
  The static keyword defines a static method or property for a class.
  Static members (properties and methods) are called without instantiating their class and cannot be called through a class instance.
  Static methods are often used to create utility functions for an application,
  whereas static properties are useful for caches, fixed-configuration,
  or any other data you don't need to be replicated across instances.
  */

  static deck = new Deck()
  shuffledDeck = []

  shuffleDeck() {
    // some animation
    // some logic
    this.shuffledDeck = deck
    // then:
    return this.shuffledDeck
  }

  partitionDeck() {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    // https://www.w3schools.com/jsref/jsref_slice_array.asp
    const playerOneDeck = this.shuffledDeck.slice(0, (this.shuffledDeck.length / 2));
    const playerTwoDeck = this.shuffledDeck.slice(this.shuffledDeck.length / 2);
    return [playerOneDeck, playerTwoDeck]
  }
}

export class Player {
  constructor(deck, name) {
    this.deck = deck;
    this.name = name;
  }
  // https://dmitripavlutin.com/javascript-classes-complete-guide/#3-fields
  /*
  Class fields are variables that hold information. Fields can be attached to 2 entities:

  Fields on the class instance
  Fields on the class itself (aka static)

  The fields also have 2 levels of accessibility:

  Public: the field is accessible anywhere
  Private: the field is accessible only within the body of the class
  */
  winner = false
  myTurn = false
}


/* Hoisting

An important difference between function declarations and class declarations is that while functions
can be called in code that appears before they are defined, classes must be defined before they can be constructed.

Code like the following will throw a referenceError

const p = new Rectangle(); // referenceError

class Rectangle {}

*/


/* Hoisting
A class should be defined before using it. Unlike functions and other JavaScript declarations, the class is not hoisted. For example,

// accessing class
const p = new Person(); // ReferenceError

// defining class
class Person {
  constructor(name) {
    this.name = name;
  }
}
As you can see, accessing a class before defining it throws an error.

*/
