// main (manager) function - create variables, send variables to check, write result in result area
const mainFunction = () => {
	const userText = document.getElementById('userText').value; // user text
	const userValue = document.getElementById('userValue').value; // user letter
	const resultArea = document.getElementById('textArea'); // Area for result
	const checkResult = checkFunction(userText, userValue); // send arguments to check

	if (!checkResult[0]) {
		resultArea.style.color = 'red'; // result area color
		resultArea.innerHTML = checkResult[1]; // write result in result area
	} else {
		resultArea.style.color = 'green'; // result area color
		resultArea.innerHTML = checkResult[1]; // write result in result area
	}
};

// Function, check user text and user letter
const checkFunction = (text, letter) => {
	let result; // variable for result

	if (!text || !letter) {
		result = [false, '>> Invalid data: empty data.']; // error: empty data
	} else if (text && letter) {
		const textArray = text.split(''); // iterate user text
		let foundLetterIndexes = new Array(); // letter indexes counter

		// iterate each text letter and check
		for (let x = 0; x < textArray.length; x++) {
			if (textArray[x] == letter) {
				foundLetterIndexes.push(x); // if letter is found, than add to array of found letter indexes
			}
		}

		// check count of found letter indexes
		if (foundLetterIndexes.length >= 1) {
			if (foundLetterIndexes.length > 1) {
				result = [true, `>> Valid data: Letter is found at ${foundLetterIndexes} indexes.`]; // letter indexes count is bigger than 1
			} else {
				result = [true, `>> Valid data: Letter is found at ${foundLetterIndexes} index.`]; // letter index count is 1
			}
		} else {
			result = [false, `>> Invalid data: Letter is not found.`]; // error: letter indexes count is smaller, than 1 is not found
		}
	}

	return result; // return result to main function
};
