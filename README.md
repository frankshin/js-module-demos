
# 模块规范汇总

## 1-script

> 概况：这种用法所处的阶段可以说是前端的草莽时期，完全没有模块的概念，直接使用内嵌脚本,Script 标签引入 JavaScript 文件

## 2-模块对象和IIFE(Immediately-invoked function expression 立即调用的函数表达式)

> 概况：为了减少上述方式对全局作用域的污染

原理&demo：该规范下，只在全局定义一个变量，所有项目代码和逻辑都包含在这个全局对象中，设计的出发点在于减少对全局作用域的污染。

```javascript {cmd="node"}
// app.js
var app = {};
```

```javascript {cmd="node"}
// sum.js
(function(){
    app.sum = function(a, b){
        return a + b;
    }  
})();
```

```javascript {cmd="node"}
// main.js
(function(app){
    var answer = app.sum(values)
    document.getElementById("answer").innerHTML = answer;
})(app);
```

## 3-commonjs-AMD

> 概况：该规范即从commonjs中分离出来的派系：Modules/Async派，该规范的支持者认为commonjs的基础规范还是只能服务于服务端，因为浏览器加载模块必须是异步的，不同于服务端，所以在浏览器端，加载当前模块之前，必须定义该模块所需要的依赖模块，然后当前模块必须放在所需依赖模块加载完成的回调里去执行。

该规范下的轮子：RequireJS

![](https://smallpang.oss-cn-shanghai.aliyuncs.com/blog/images/logo%20%281%29.png)

轮子原理&demo：
这里名叫requirejs的工具，并没有支持commonjs规范中的require语法

## 3-commonjs-Transport

> 概况：该规范即从commonjs中分离出来的派系：Modules/1.x派，该规范是基于现有规范稍作变通，只是在此基础上使用工具将模块转换成浏览器能够跑起来的代码模块

该规范下的轮子：Browserify

![](https://smallpang.oss-cn-shanghai.aliyuncs.com/blog/images/browserify.png)

轮子原理&demo：轮子的原理就是手动去定义浏览器中缺失但在commonjs规范中需要的变量模块（module、exports、require、global）

优点：

缺点：

## 3-commonjs-Wrappings

> 概况：该规范即从commonjs中分离出来的派系：Modules/2.0派，改规范的支持者类似“中间派”，既不想丢掉旧的规范，也不想像AMD那样推到重来。他们认为，Modules/1.0固然不适合浏览器，但它里面的一些理念还是很好的，（如通过require来声明依赖），新的规范应该兼容这些，AMD规范也有它好的地方（例如模块的预先加载以及通过return可以暴漏任意类型的数据，而不是像commonjs那样exports只能为object），也应采纳。最终他们制定了一个Modules/Wrappings（http://wiki.commonjs.org/wiki/Modules/Wrappings）规范，此规范指出了一个模块应该如何“包装”，包含以下内容：
1. 全局有一个module变量，用来定义模块
2. 通过module.declare方法来定义一个模块
3. module.declare方法只接收一个参数，那就是模块的factory，次factory可以是函数也可以是对象，如果是对象，那么模块输出就是此对象。
4. 模块的factory函数传入三个参数：require,exports,module，用来引入其他依赖和导出本模块API
5. 如果factory函数最后明确写有return数据（js函数中不写return默认返回undefined），那么return的内容即为模块的输出。
使用该规范的例子看起来像这样：

```javascript {cmd="node"}
// 可以使用exprots来对外暴漏API
module.declare(function(require, exports, module){
    exports.foo = "bar";
});
// 也可以直接return来对外暴漏数据
module.declare(function(require){
    return { foo: "bar" };
});
```

该规范下的轮子：目前貌似貌似没找到完全遵循该规范的轮子

轮子原理&demo：

优点：

缺点：

## 4-CMD（Common Module Definition）

> 概况：CMD规范基于兼容并包的思想，即提取各家规范的优点进行封装整合，最终形成一套独立的规范

该规范下的轮子：seajs（备注：不完全遵循该规范）

![](https://smallpang.oss-cn-shanghai.aliyuncs.com/blog/images/logo.png)

轮子原理&demo：seajs全面拥抱Modules/Wrappings规范，不用requirejs那样回调的方式来编写模块。而它也不是完全按照Modules/Wrappings规范，seajs并没有使用declare来定义模块，而是使用和requirejs一样的define，或许作者本人更喜欢这个名字吧。（然而这或多或少又会给人们造成理解上的混淆）

```javascript {cmd="node"}
//a.js
define(function(require, exports, module){
    console.log('a.js执行');
    return {
        hello: function(){
            console.log('hello, a.js');
        }
    }
});
//b.js
define(function(require, exports, module){
    console.log('b.js执行');
    return {
        hello: function(){
            console.log('hello, b.js');
        }
    }
});
//main.js
define(function(require, exports, module){
    console.log('main.js执行');
    var a = require('a');
    a.hello();
    $('#b').click(function(){
        var b = require('b');
        b.hello();
    });
});

// 使用说明：
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    // 通过 require 引入依赖
    var $ = require('jquery');
    var Spinning = require('./spinning');
    // 通过 exports 对外提供接口
    exports.doSomething = ...
    // 或者通过 module.exports 提供整个接口
    module.exports = ...
});
```

优点：

缺点：

## 5-ES6

> 概况：

该规范下的轮子：

轮子原理&demo：

## UMD(Universal Module Definition) - 通用模块定义

> 概况：如果在项目中不得不编写三种风格的模块类型，即模块模式/IIFE、最初的commonjs、从commonjs分离出的AMD

该规范下的轮子：

轮子原理&demo：

## Webpack

> 概况：Webpack 可以处理 CommonJS 、 AMD 和 ES6 模块

该规范下的轮子：

轮子原理&demo：

## Rollup (2015 年 5 月)

> 概况：

该规范下的轮子：

轮子原理&demo：

## SystemJS

> 概况：

该规范下的轮子：

轮子原理&demo：

## JSPM

> 概况：

该规范下的轮子：

轮子原理&demo：

## notes

- 排序没有严格的先后顺序，只是发展历程的大概呈现

## 参考文章 & 感谢

js模块化历程：https://www.cnblogs.com/lvdabao/p/js-modules-develop.html
浏览器加载 CommonJS 模块的原理与实现：http://www.ruanyifeng.com/blog/2015/05/commonjs-in-browser.html
JavaScript 模块简史：http://www.css88.com/archives/7628
javascript模块化发展历程：https://juejin.im/post/5b42adf9e51d45192344303f