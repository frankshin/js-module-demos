//b.js
define(function(require, exports, module){
    console.log('b.js执行');
    return {
        hello: function(){
            console.log('hello, b.js');
        }
    }
});