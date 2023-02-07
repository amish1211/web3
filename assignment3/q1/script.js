var num1 = Number(prompt('Enter the first number: '));
var num2 = Number(prompt('Enter the second number: '));
var sumEl = document.querySelector('#sum');
var differenceEl = document.querySelector('#difference');
var productEl = document.querySelector('#product');
var quotientEl = document.querySelector('#quotient');

if(num1 && num2) {
	let sum = num1+num2;
	let difference = num1-num2;
	let product = num1*num2;
	let quotient = num1/num2;

	display(sum,sumEl);
	display(difference,differenceEl);
	display(product,productEl);
	display(quotient,quotientEl);
} else  {
	alert('Please enter valid numbers');
}


function display(value, element) {
	element.textContent+=value
}
