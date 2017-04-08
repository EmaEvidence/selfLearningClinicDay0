function aritGeo(arr){
	if (arr.length === 0){
		return 0;
	}
	else if ((arr[1]/arr[0] == arr[2]/arr[1]) ||  (arr[3]/arr[2] == arr[4]/arr[3])){
		return 'Geometric';
	}
	else if ((arr[1]-arr[0] == arr[2]-arr[1]) &&  (arr[3]-arr[2] == arr[4]-arr[3])){
		return 'Arithmetic';
	}
	else{
		return -1;
	}
	

}