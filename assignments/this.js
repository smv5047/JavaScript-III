/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Binding

When 'this' is used in the Global Scope it returns the browser/window object. This usage of this doesn't appear to have any immediate use case.

* 2. Implicit Binding

When using 'this' within an object scope, this will refer to the name of the object. In this case the object provides context as to what 'this' is refering to.

* 3. Constructor/New Binding

When this is used in the Constructor binding it is helping to build an object template. It can help to create certain placeholders for key value pairs that can then be populated using the 'new' keyword


* 4. Explicit Binding

When using 'this' with the apply, call, or bind object methods, this gets defined explicitly as part of the argument.

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// console.log(this);

// Principle 2

// code example for Implicit Binding

const pizza = {
    sauce: "tomato",
    crust: "stuffed",
    eat: function (name) {
        console.log(`${name} ate his pizza with ${this.sauce} sauce and ${this.crust} crust`);
    }
};

// pizza.eat('Steve');

// Principle 3

// code example for New Binding

function Hero(stats) {
    this.name = stats.name;
    this.age = stats.age;
    this.sword = stats.sword;
    this.kingdom = stats.kingdom;
}

const link = new Hero ({
    name: "Link",
    age: 15,
    sword: "Master",
    kingdom: "Hyrule"
});

// console.log(link);

// Principle 4

// code example for Explicit Binding

const foundingFather = {
    name: "Benjamin Franklin"
};

const colors = ['red', 'white', 'blue']

function signing (color1, color2, color3) {
    return `${this.name} was instrumental in forming the Constitution for the ${color1}, ${color2}, and ${color3}`;
}

console.log(signing.apply(foundingFather, colors));