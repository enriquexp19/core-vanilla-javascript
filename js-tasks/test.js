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

console.log(charFreq("acbabccbcbcbababcbabcb"));