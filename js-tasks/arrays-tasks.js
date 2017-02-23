//////////////////////////////// Task 1

//What this code is going to show?

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?

alert(fruits.length ); // ?

// The answer is 4.

////////////////////////////// Task 2

/*Let’s try 5 array operations.

    Create an array styles with items “Jazz” and “Blues”.
    Append “Rock-n-Roll” to the end.
    Replace the value in the middle by “Classics”. Your code for finding the middle value should work for any arrays with odd length.
    Strip off the first value of the array and show it.
    Prepend Rap and Reggie to the array.
*/

var styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[(styles.length/2)-0.5] = "Classics";
console.log(styles.shift());
styles.unshift('Rap', "Reggae");

////////////////////////////// Task 3

//What is the result? Why?

let arr = ["a", "b"];

arr.push(function() {
  alert(this );
})

arr[2](); // ?

/* 	At first, a function is pushed to the end of the array.
	Then the function is called using arr[2](); */

/////////////////////////////// Task 4

/* Write the function sumInput() that:

    Asks the user for values using prompt and stores the values in the array.
    Finishes asking when the user enters a non-numeric value, an empty string, or presses “Cancel”.
    Calculates and returns the sum of array items.

P.S. A zero 0 is a valid number, please don’t stop the input on zero.*/

function sumInput() {
	var numbers = [];
	var sum = 0;
	var input = prompt("Please enter a number", 0);
	while(isNaN(input)==false){
		if(input===null||input===""||input===" "){
			break;
		}
		numbers.push(Number(input));
		input = prompt("Please enter another number, or click 'cancel' to see the sum", 0);
	}

	for (var i=0;i<numbers.length;i++){
		sum += numbers[i];
	}
	alert(sum);
}

sumInput();


////////////////////////////// Task 5

/*The input is an array of numbers, e.g. arr = [1, -2, 3, 4, -9, 6].

The task is: find the contiguous subarray of arr with the maximal sum of items.

Write the function getMaxSubSum(arr) that will find return that sum.*/

function getMaxSubSum(arr){
	let result = 0;
	for(let start = 0;start<arr.length;start++){
		let sum = 0;
		for(let next = start;next<arr.length;next++){
			sum += arr[next];
			result = Math.max(result, sum);
		}
	}
	return result;
}