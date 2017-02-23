// Task 1
let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?

// DON'T FORGET TO UNCOMMENT
//alert( fruits.length ); // ?

// The answer is 4.

// Task 2
var styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[(styles.length/2)-0.5] = "Classics";
console.log(styles.shift());
styles.unshift('Rap', "Reggae");

// Task 3
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
})

arr[2](); // ?

/* 	At first, a function is pushed to the end of the array.
	Then the function is called using arr[2](); */

