function init() {
	const MIN = 0;
	const MAX =100;
	const ANSWER = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
	const TOTAL_ATTEMPTS = 5;
	var attemptsLeft = TOTAL_ATTEMPTS;
	var hasUserWon = false;
	var userGuessArr = [];


	while(attemptsLeft && !hasUserWon ) {
		let userGuessNumber =Number(prompt('What is the number: '));

		if(userGuessNumber == ANSWER) {
			hasUserWon = true;
		} else if (userGuessArr.includes(userGuessNumber)) {
			alert("Oops! I've already alerted you that it's not the right one");
		}

		else {
			if(userGuessNumber>ANSWER) {
				alert('You went far from answer');
			} else {
				alert('You are behind the answer');
			}
			userGuessArr.push(userGuessNumber);
			attemptsLeft-=1;
		}


	}

	if (hasUserWon) {
		alert('Bravo! You guessed it correct!');
	} else {
		alert('Sorry! You Lose');
	}
}

init();
