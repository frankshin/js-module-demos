
# Modules/1.x派 -- commonjs

# 该实现方式是在commonjs规范的基础上通过工具强行转换实现在浏览器端的使用的 --- “保皇派”

- 这一波人认为，在现有基础上进行改进即可满足浏览器端的需要，既然浏览器端需要function包装，需要异步加载，那么新增一个方案，能把现有模块转化为适合浏览器端的就行了，有点像“保皇派”。基于这个主张，制定了Modules/Transport（http://wiki.commonjs.org/wiki/Modules/Transport）规范，提出了先通过工具把现有模块转化为复合浏览器上使用的模块，然后再使用的方案。

- browserify就是这样一个工具，可以把nodejs的模块编译成浏览器可用的模块。（Modules/Transport规范晦涩难懂，我也不确定browserify跟它是何关联，有知道的朋友可以讲一下）
目前的最新版是Modules/1.1.1（http://wiki.commonjs.org/wiki/Modules/1.1.1），增加了一些require的属性，以及模块内增加module变量来描述模块信息，变动不大。

# commonjs规范demo如下

```javascript {cmd="node"}
//math.js
exports.add = function() {
    var sum = 0, i = 0, args = arguments, l = args.length;
    while (i < l) {
        sum += args[i++];
    }
    return sum;
};

//increment.js
var add = require('math').add;
exports.increment = function(val) {
    return add(val, 1);
};

//program.js
var inc = require('increment').increment;
var a = 1;
inc(a); // 2

```


# 浏览器为什么无法实现commonjs？

- 浏览器不兼容CommonJS的根本原因，在于缺少四个Node.js环境的变量。如下：
- module
- exports
- require
- global
