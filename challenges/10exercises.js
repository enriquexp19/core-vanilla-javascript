// Define a function max() that takes two numbers as arguments and returns the largest of them.
// Use the if-then-else construct available in Javascript.
function max(a, b){
	if(a<b){
		return b;
	}
	if(b<a){
		return a;
	}
}
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
function maxOfThree(a, b, c){
	if (a>b&&a>c){
		return a;
	}
	if(b>a&&b>c){
		return b;
	}
	if(c>a&&c>b){
		return c;
	}
}
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(c){
	c = c.toLowerCase();
	if (c==='a'||c==='e'||c==='i'||c==='o'||c==='u'){
		return true;
	}
	return false;
}
// Write a function translate() that will translate a text into "rövarspråket".
// That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
function translate(string){
	wordArr = string.split(' ');
	let newStr = [];
	let eachWord = [];
	for(let i = 0;i<wordArr.length;i++){
		let charArr = wordArr[i].split('');
		eachWord = [];
		for(let j =0;j<charArr.length;j++){
			
			eachWord.push[charArr[j]];
			if(charArr[j]!=='a'&&charArr[j]!=='e'&&charArr[j]!=='i'&&charArr[j]!=='o'&&charArr[j]!=='u'){
				if(j!==0){
					eachWord.push("o", charArr[j]);
				}
				else {
					eachWord.push(charArr[j]);
				}
			}
			else{
				eachWord.push(charArr[j]);
			}
		}
		eachWord = eachWord.join('');
		newStr.push(eachWord);
	}
	newStr = newStr.join(" ");
	return newStr;
}
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers.
// For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
function sum(arr){
	let sum = 0;
	for(let i=0;i<arr.length;i++){
		sum += arr[i];
	}
	return sum;
}

function multiplay(arr){
	let product = 1;
	for(let i=0;i<arr.length;i++){
		product *= arr[i];
	}
	return product;
}
// Define a function reverse() that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
function reverse(string){
	string = string.split('');
	let reverse = [];
	let length = string.length;
	for(let i = 0;i<length;i++){
		reverse.unshift(string.shift());
	}
	reverse = reverse.join('');
	return reverse;
}
// Represent a small bilingual lexicon as a Javascript object in the following fashion
//{"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
//and use it to translate your Christmas cards from English into Swedish.
function engToSwed(string){
	string = string.toLowerCase().split(' ');
	let translation = [];
	let lexicon = {
		merry: "god",
		christmas: "jul",
		and: "och",
		happy: "gott",
		new: "nytt",
		year: "år"
	}
	for (let i = 0; i<string.length;i++){
		if(lexicon.hasOwnProperty(string[i])){
			translation.push(lexicon[string[i]]);
		}
		else{
			translation.push(string[i]);
		}
	}
	translation = translation.join(' ');
	return translation;
}
//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
function findLongestWord(arr){
	let longestLength = 0;
	let place = 0;
	for(i = 0;i<arr.length;i++){
		let word = arr[i].split('');
		if(word.length>longestLength){
			longestLength = word.length;
			place = i;
		}
	}
	return arr[place];
}
//Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
function filterLongWords(arr, int){
	let newArr = [];
	for (let i = 0;i<arr.length;i++){
		if(arr[i].length>int){
			newArr.push(arr[i]);
		}
	}
	return newArr;
}
//Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
function charFreq(string){
	let freq = new Object();
	string = string.split('');
	for (let i = 0;i<string.length;i++){
		if(freq.hasOwnProperty(string[i])===false){
			freq[string[i]] = 1;
		}
		else{
			freq[string[i]]++;
		}
	}
	return freq;
}