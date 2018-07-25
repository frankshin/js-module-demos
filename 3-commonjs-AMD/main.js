// main.js
define(['sum'], function(sum) {
    var result = sum(1, 4);
    var answer = document.getElementById('answer');
    answer.innerHTML = result;
});