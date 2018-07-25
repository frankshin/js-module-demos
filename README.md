
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

> 概况：

原理&demo：

该规范下的轮子：RequireJS

### 3-commonjs-Transport

> 概况：

原理&demo：

该规范下的轮子：RequireJS

### 3-commonjs-Wrappings

> 概况：

原理&demo：

该规范下的轮子：RequireJS

### 4-CMD

> 概况：

原理&demo：

该规范下的轮子：RequireJS

### 5-ES6

> 概况：

原理&demo：

该规范下的轮子：RequireJS

### UMD(Universal Module Definition) - 通用模块定义

> 概况：

原理&demo：

该规范下的轮子：

### Webpack

> 概况：Webpack 可以处理 CommonJS 、 AMD 和 ES6 模块

原理&demo：

该规范下的轮子：


### Rollup (2015 年 5 月)

> 概况：

原理&demo：

该规范下的轮子：

### SystemJS

> 概况：

原理&demo：

该规范下的轮子：

### JSPM

> 概况：

原理&demo：

该规范下的轮子：

## notes

- 排序没有严格的先后顺序，只是发展历程的大概呈现

## 参考文章 & 感谢
2
js模块化历程：https://www.cnblogs.com/lvdabao/p/js-modules-develop.html
浏览器加载 CommonJS 模块的原理与实现：http://www.ruanyifeng.com/blog/2015/05/commonjs-in-browser.html
JavaScript 模块简史：http://www.css88.com/archives/7628
javascript模块化发展历程：https://juejin.im/post/5b42adf9e51d45192344303f