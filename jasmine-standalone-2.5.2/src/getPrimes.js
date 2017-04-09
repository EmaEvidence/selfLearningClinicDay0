function getPrimes(n){
	var primeNumbers = [];
	if (n === 0){
		return "Invalid Input, Supply Positive Numbers greater than 1";
	}
	else if (n <= 1){
		return "Invalid Input, Supply Positive Numbers greater than 1";
	}
	else if (Math.round(n) !== n){
		return primeNumbers;
	}
	else{
			var numb = [];
			for (var a = 0; a<=n; a++){
				numb.push(a);
			}
			//Asymptotic Analysis for this loop is O(n).
			var l = numb.length;
			for (var b = 1; b<= l; b++){
				var factors = [];
				for (var i = 1; i <= b; i++) {
					if (numb[b] % numb[i] == 0){
						factors.push(numb[i]);
					}
				}
				//Asymptotic Analysis for this loop is O(n2) but I tried optimizing it by making it not loop the entire numb array every time
				// But just loop to the Position of the number in consideration in the array.
				if (factors.length == 2){
					primeNumbers.push(numb[b]);
				}
			}
			//Asymptotic Analysis for this loop is O(n).
			return primeNumbers;
	}
}