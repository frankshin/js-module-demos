
## 目录

### 1-script

> 概况：这种用法所处的阶段可以说是前端的草莽时期，完全没有模块的概念，直接使用内嵌脚本,Script 标签引入 JavaScript 文件

### 2-IIFE

> 概况：为了减少上述方式对全局作用域的污染

原理&demo：该规范下，只在全局定义一个变量，所有项目代码和逻辑都包含在这个全局对象中，设计的出发点在于减少对全局作用域的污染。
// app.js
`
var app = {};
`

// sum.js
`
(function(){
    app.sum = function(a, b){
        return a + b;
    }  
})();
`

// main.js
`
(function(app){
    var answer = app.sum(values)
    document.getElementById("answer").innerHTML = answer;
})(app);
`

### 3-commonjs-AMD

> 概况：该规范的支持者认为commonjs的基础规范还是只能服务于服务端，因为浏览器加载模块必须是异步的，不同于服务端，所以在浏览器端，加载当前模块之前，必须定义该模块所需要的依赖模块，然后当前模块必须放在所需依赖模块加载完成的回调里去执行。

该规范下的轮子：RequireJS

轮子原理&demo：
这里名叫requirejs的工具，并没有支持commonjs规范中的require语法

### 3-commonjs-Transport

> 概况：该规范是基于现有规范稍作变通，只是在此基础上使用工具将模块转换成浏览器能够跑起来的代码模块

该规范下的轮子：Browserify

轮子原理&demo：轮子的原理就是手动去定义浏览器中缺失但在commonjs规范中需要的变量模块（module、exports、require、global）

### 3-commonjs-Wrappings

> 概况：该规范同时包含了transport和AMD规范的相关特性，该规范指出一个模块该如何“包装”

该规范下的轮子：

轮子原理&demo：

### 4-CMD

> 概况：

该规范下的轮子：

轮子原理&demo：

### 5-ES6

> 概况：

该规范下的轮子：

轮子原理&demo：

### UMD(Universal Module Definition) - 通用模块定义

> 概况：

该规范下的轮子：

轮子原理&demo：

### Webpack

> 概况：Webpack 可以处理 CommonJS 、 AMD 和 ES6 模块

该规范下的轮子：

轮子原理&demo：

### Rollup (2015 年 5 月)

> 概况：

该规范下的轮子：

轮子原理&demo：

### SystemJS

> 概况：

该规范下的轮子：

轮子原理&demo：

### JSPM

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