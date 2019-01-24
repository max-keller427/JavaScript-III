/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global Object BindingWindow/Global Object Binding
        When 'this' is used before it points to anything specifically, it will
        reference the defult window/global objects.
* 2. Implicit Binding
        The 'this' keyword will point to the object to the left of the . in 
        implicit binding. It will be used in a method.
* 3. Explicit Binding
        Not 'automatic'. Explicit binding uses a method to bind the this keyword
        to the arguments passed into the method.
* 4. New Binding
        The 'new' keyword allows us to create a new object using a constructor
        function. The 'new' keyword points to the constructor function and allows
        .this to be used with the 'new' object to be created.

*
* write out a code example of each explanation above
*/

// Principle 1: Window/Global Object Binding

// code example for Window Binding

function useless() {
    console.log(this);
}

// Principle 2: Implicit Binding

// code example for Implicit Binding

const max = {
    desires: 'more sleep',
    needs: 'to code',
    action: function(){
        console.log (`I think I need ${this.desires} to be better at ${this.needs}`)
    }
}

// Principle 3: 

// code example for New Binding

function Books (pages) {
    this.pages = pages;
    this.paragraph = "Third Paragraph";
    this.read = function () {
        console.log(`Please turn to page ${this.pages}, and start at the ${this.paragraph}.`)
    }
}

const warrior = new Books('34');
const push = new Books('12');
warrior.read();
push.read();

// Principle 4: Explicit Binding

// code example for Explicit Binding

const mug = {empty: 'mug'}
const contents = ['sugar', 'coffee', 'cream']

function makeCoffee (contents){
    console.log(`*Pours ${contents[1]} into ${this.empty}, not the ${contents[0]}
    or ${contents[2]}..common..*`)
}

makeCoffee.call(mug, contents); 