//main.js
define(function(require, exports, module){
    console.log('main.js执行');
    var a = require('a');
    a.hello();
    
    require('jquery');
    console.log('$', $);
    $('#b').click(function(){
        var b = require('b');
        b.hello();
    });
});