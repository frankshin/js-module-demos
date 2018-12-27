define(function(require, exports, module){
    console.log('a.js执行');
    return {
        hello: function(){
            console.log('hello, a.js');
        }
    }

    // console.log('a.js执行 - export');
    // hello.prototype = function(){
    //     console.log('hello, a.js');
    // }
    // module.export = hello;
});