function init() {
	var arr = getRandomArray(15,0,30);
	sortArr(arr);
	var value = Number(prompt(`${arr}\n Choose a value to seach in above array`));

	var  foundValue = binarySearch(arr,value);
	if(foundValue) {
		document.body.appendChild(document.createElement('p')).textContent = `Found value in element: ${foundValue}`;
	} else {
		document.body.appendChild(document.createElement('p')).textContent = 'Value not found';	
	}
}

init();


function getRandomArray(arrSize, min, max) {
	var arr = [];
	while(arrSize) {
		let randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
		if(!arr.includes(randomNumber)) {
			arrSize--;
			arr.push(randomNumber);
		}
	}
	return  arr;

}

function updateScreen(arr,si,ei) {
        var content='';	
	var midInd = Math.floor(si+ei)/2;
	for(let i=si; i <= ei; i++) {
		if(i ==midInd) {
			content+=`${arr[i]}* `;
		} else {
			content+=`${arr[i]} `;
		}
	}

	document.body.appendChild(document.createElement('p')).textContent = content;

}


function sortArr(arr) {
	arr.sort((a,b)=>a-b);
}

function binarySearch(arr,value) {
   
	var si = 0;
	var ei = arr.length-1;
	while(si<=ei) {
		updateScreen(arr,si,ei);
		let midInd = Math.floor((si + ei)/2);
		
		let midValue = arr[midInd];
		if(midValue==value) {
			return midInd;
		} else if (value < midValue) {
			ei = midInd-1;
		} else {
			si = midInd+1;
		}

		
	}

	return null;
}


