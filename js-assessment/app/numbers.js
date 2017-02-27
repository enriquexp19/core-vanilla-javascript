exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
  	let binArray = [];
  	for(let i = 0;i<8;i++){
  		if(num%2===0){
  			binArray.unshift(0);
  		}
  		else{
  			binArray.unshift(1);
  		}
  		num = Math.floor(num/2);
  	}
  	let place = 8 - bit;
  	return binArray[place];
  },

  base10: function(str) {
  	let baseTen = parseInt(str, 2);
  	return baseTen;
  },

  convertToBinary: function(num) {
  	let binArray = [];
  	for(let i = 0;i<8;i++){
  		if(num%2===0){
  			binArray.unshift(0);
  		}
  		else{
  			binArray.unshift(1);
  		}
  		num = Math.floor(num/2);
  	}
  	let result = binArray.join('');
  	return result;
  },

  multiply: function(a, b) {

  }
};
