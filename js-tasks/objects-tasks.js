// Task 1
/*var user = {
	"name": "John",
	"surname": "Smith"
};

user.name = "Pete";
delete user.name;

// Task 2
function isEmpty(arg){
      return JSON.stringify(arg) === JSON.stringify({});
}

// Task 3
const user2 = {
  "name": "John"
};
// does it work?
user2.name = "Pete";
// Yep!
console.log(user2.name);

// Task 4
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
var sum = salaries.John + salaries.Ann + salaries.Pete;
console.log(sum);
*/
// Task 5
var menu = {
  "width": 200,
  "height": 300,
  "title": "My menu"
};

function multiplyNumeric(obj) {
      for (var i = 0;i<Object.values(obj).length;i++) {
        if (typeof(Object.values(obj)[i]) === 'number') {
          Object.values(obj)[i] *= 2;
        }
      }
    }

multiplyNumeric(menu);
console.log(menu);