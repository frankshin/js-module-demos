(function () {
	'use strict';

	// sum.js
	let add = (a,b) => { return a + b };

	// main.js
	var answer = add(1, 3);
	document.getElementById("answer").innerHTML = answer;

}());
