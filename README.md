
# 模块规范汇总

> 模块化知识模块不完全汇总

目录结构：

- [script](#script)
- [模块对象和IIFE](#模块对象和IIFE)
- [commonjs](#commonjs)
  - [what](#what)
  - [why](#why)
  - [环境](#运行环境)
  - [应用](#应用)
  - [语法](#语法)
  - [轮子之](#轮子)
- [AMD](#AMD)
  - [what](#what)
  - [why](#why)
  - [环境](#运行环境)
  - [应用](#应用)
  - [语法](#语法)
  - [轮子之](#轮子)
- [CMD](#CMD)
  - [what](#what)
  - [why](#why)
  - [环境](#运行环境)
  - [应用](#应用)
  - [语法](#语法)
  - [轮子之](#轮子)
- [UMD](#UMD)
  - [what](#what)
  - [why](#why)
  - [运行环境](#运行环境)
  - [应用](#应用)
  - [语法](#语法)
  - [轮子之](#轮子)
- [ES6](#ES6)
  - [what](#what)
  - [why](#why)
  - [环境](#运行环境)
  - [应用](#应用)
  - [语法](#语法)
  - [es6模块与commonjs模块比较](#es6模块与commonjs模块比较)
  - [export命令](#export命令)
  - [import命令](#import命令)
  - [export和default命令](#export和default命令)
  - [es6规范加载commonjs模块](#es6规范加载commonjs模块)
  - [require或import加载es6模块](#require或import加载es6模块)
  - [轮子之es6-module-transpiler](#轮子之es6-module-transpiler)
  - [轮子之Rollup](#轮子之Rollup)
  - [轮子之webpack](#轮子之webpack)
- [其他规范及轮子](#其他规范及轮子)
  - [JSPM](#JSPM)
- [参考文章&感谢](#参考文章&感谢)

## script

> 概况：这种用法所处的阶段可以说是前端的草莽时期，完全没有模块的概念，直接使用内嵌脚本,Script 标签引入 JavaScript 文件

## 模块对象和IIFE

> 概况：模块对象和IIFE，即Immediately-invoked function expression立即调用的函数表达式，为了减少上述方式对全局作用域的污染

原理&demo：该规范下，只在全局定义一个变量，所有项目代码和逻辑都包含在这个全局对象中，设计的出发点在于减少对全局作用域的污染。

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

## commonjs

### what

```
1、模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存（执行如下代码）
2、模块加载会阻塞接下来代码的执行，需要等到模块加载完成才能继续执行——同步加载
3、在CommonJs规范中，一个文件就是一个模块，拥有单独的作用域，普通方式定义的变量、函数、对象都属于该模块内；
4、通过require来加载模块，通过exports和modul.exports来暴露模块中的内容（见如下demo）
```

```js
// 进入node模式
// 执行如下代码删除指定模块的缓存
delete require.cache[moduleName];
```

### why

```
js没有模块系统，为了让js在浏览器以外运行，以达到Java、C#、PHP这些后台语言具备开发大型应用的能力
```

### 环境

服务器环境

### 应用

commonjs的实现应用于nodejs的模块规范

### 语法

```js
// a.js
// 相当于：module.exports.a = 'Hello world';
exports.a = 'Hello world';
// b.js
var moduleA = require('./a.js');
console.log(moduleA.a);   // 出hello world
```
ps：在 nodejs 中，exports 是 module.exports 的一个引用（相当于Node为每个模块提供一个exports变量，指向module.exports），当你使用了 module.exports = xxxx，实际上覆盖了 module.exports，但是 exports 并未发生改变。

### 轮子

![Browserify](https://smallpang.oss-cn-shanghai.aliyuncs.com/blog/images/browserify.png?x-oss-process=image/resize,l_260)

轮子的原理就是手动去定义浏览器中缺失但在commonjs规范中需要的变量模块（module、exports、require、global）

## AMD

### what

```
1、异步加载
2、管理模块之间的依赖性，便于代码的编写和维护
```

### why

该规范即从commonjs中分离出来的派系：Modules/Async派，该规范的支持者认为commonjs的基础规范还是只能服务于服务端，因为浏览器加载模块必须是异步的，不同于服务端，所以在浏览器端，加载当前模块之前，必须定义该模块所需要的依赖模块，然后当前模块必须放在所需依赖模块加载完成的回调里去执行。

### 运行环境

浏览器环境

### 应用

requireJS是参照AMD规范实现的

### 语法

```js
// a.js
define(function (){
　　return {
　　　a:'hello world'
　　}
});
// b.js
require(['./a.js'], function (moduleA){
    console.log(moduleA.a); // hello world
});
```

### 轮子

![](https://smallpang.oss-cn-shanghai.aliyuncs.com/blog/images/logo%20%281%29.png)

## CMD

### what

CMD是在AMD基础上改进的一种规范，和AMD不同在于对依赖模块的执行时机处理不同，CMD是就近依赖，而AMD是前置依赖

### why

待补充

### 环境

浏览器环境

### 应用

seajs是参照UMD规范实现的，requireJS的最新的几个版本也是部分参照了UMD规范的实现

### 语法

```js
// a.js
define(function (require, exports, module){
　exports.a = 'hello world';
});
// b.js
define(function (require, exports, module){
  var moduleA = require('./a.js');
  console.log(moduleA.a); // hello world
});
```

### 轮子

![](https://smallpang.oss-cn-shanghai.aliyuncs.com/blog/images/logo.png)

seajs全面拥抱Modules/Wrappings规范，不用requirejs那样回调的方式来编写模块。而它也不是完全按照Modules/Wrappings规范，seajs并没有使用declare来定义模块，而是使用和requirejs一样的define，或许作者本人更喜欢这个名字吧。（然而这或多或少又会给人们造成理解上的混淆）

## UMD

### what

UMD规范本质上是一套识别当前环境支持的if/else语句,兼容AMD和commonJS规范的同时，还兼容全局引用的方式

### why

如果在项目中不得不编写三种风格的模块类型，即模块模式/IIFE、最初的commonjs、从commonjs分离出的AMD，使用UMD(Universal Module Definition 通用模块定义)规范可以识别当前环境支持的模块风格

### 环境

浏览器或服务器环境

### 应用

无

### 语法

```js
// 这里的语法借鉴unserscorejs，并加以改造
if (typeof exports != 'undefined' && !exports.nodeType) {
  // Node, CommonJS
  if (typeof module != 'undefined' && !module.nodeType && module.exports) {
    exports = module.exports = _;
  }
  exports._ = _;
} else if (typeof define == 'function' && define.amd) {
  // AMD
  define('underscore', [], function() {
    return _;
  });
} else {
  // 暴露全局到window（准确说是当前运行环境）
  root._ = _;
}
```

### 轮子

[SystemJS](https://github.com/systemjs/systemjs)是一个通用的模块加载器(亦称为垫片库-polyfill)，它能在浏览器或者NodeJS上动态加载CommonJS、AMD、全局模块对象和ES6模块，将其转为ES5格式。通过使用插件，它不仅可以加载JavaScript，还可以加载CoffeeScript和TypeScript。它在后台调用的是Google的Traceur转码器。

## ES6

![](https://smallpang.oss-cn-shanghai.aliyuncs.com/blog/images/QQ20180728-140143%402x.png?x-oss-process=image/resize,l_260)

### what

严格意义上说，commonjs、AMD等模块化规范都是产生于非ECMA官方的技术社区，在2015年6月份发布的ES6版本中，模块已经成为JavaScript语言的一部分，我们可以在项目中使用es6的模块语法，es6用关键字import和export导入和导出模块，这里以redux-thunk为例看下使用语法：

### why

```
1.es6的加载方式称为“编译时加载”或者静态加载，即ES6可以在编译时就完成模块加载，效率要比CommonJS模块的加载方式高(eg: import命令是编译阶段执行的，在代码运行之前)
2.静态加载的方式能够通过静态分析，进一步拓宽JavaScript的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。
3.不再需要UMD模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。目前，通过各种工具库，其实已经做到了这一点。
4.将来浏览器的新API就能用模块格式提供，不再必须做成全局变量或者navigator对象的属性。
5.不再需要对象作为命名空间（比如Math对象），未来这些功能可以通过模块提供。
```

### 环境

浏览器或服务器环境（以后可能支持）

### 应用

ES6的最新语法支持规范

### 语法

```
导入：import {模块名A，模块名B...} from '模块路径'
导出：export和export default
import('模块路径').then()方法
```

### es6模块与commonjs模块比较

* CommonJS模块输出的是一个值的拷贝，ES6模块输出的是值的引用。
* CommonJS模块是运行时加载，ES6模块是编译时输出接口。(因为CommonJS加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。而ES6模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。)

### export命令

```js
// profile.js
export var firstName = 'Michael';
export var lastName = 'Jackson';
export var year = 1958;
// 或
var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
export {firstName, lastName, year};
```

### import命令

```js
// 引入
import {firstName, lastName, year} from './profile.js';
import { lastName as surname } from './profile.js'
```

### export的default命令

export default为模块指定默认输出，用户不需要知道所要加载的变量名/函数名
```js
// xxxName为任意名称，同时import命令后面，不使用大括号
export default function () {
  console.log('foo');
}
import xxxName from './export-default';
```
ps：export default命令用于指定模块的默认输出。显然，一个模块只能有一个默认输出，因此export default命令只能使用一次

### es6规范加载commonjs模块

Node 的import命令加载 CommonJS 模块，Node 会自动将module.exports属性，当作模块的默认输出，即等同于export default xxx，如下：

```js
// CommonJS 模块 a.js
module.exports = {
  foo: 'hello',
  bar: 'world'
}
// 等同于
export default {
  foo: 'hello',
  bar: 'world'
}
```
import命令加载上面的commonjs（a.js）模块，module.exports会被视为默认输出，即import命令实际上输入的是这样一个对象{ default: module.exports }

所以，一共有三种写法，可以拿到 CommonJS 模块的module.exports：
```js
// 写法一
import baz from './a';
// baz = {foo: 'hello', bar: 'world'};

// 写法二
import {default as baz} from './a';
// baz = {foo: 'hello', bar: 'world'};

// 写法三
import * as baz from './a';
// baz = {
//   get default() {return module.exports;},
//   get foo() {return this.default.foo}.bind(baz),
//   get bar() {return this.default.bar}.bind(baz)
// }
```

### require或import加载es6模块

有如下的模块文件app.js

```js
export default function(){}
```

在babel5中，编译结果如下：
```js
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = function () {};
module.exports = exports["default"];

// import获取模块
import something from './app';
// or:
import { default as something } from './app';
```

在babel6+中，编译结果如下：
```js
'use strict';
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = function () {};
```
如上所示，babel6中不再给module.exports赋值，现在获取模块如下：
```js
require('./app').default
```

### 轮子之es6-module-transpiler

> ES6 module transpiler是square公司开源的一个转码器，可以将ES6模块转为CommonJS模块或AMD模块的写法，从而在浏览器中使用.

```javascript {cmd="node"}
// 安装解码器
$ npm install -g es6-module-transpiler
// 使用compile-modules命令将es6文件解码
$ compile-modules convert bundle.js main.js
// -o参数可以指定转码后的文件名(包括指定路径)
$ compile-modules convert -o dist/bundle.js main.js
```

### 轮子之Rollup

![](https://smallpang.oss-cn-shanghai.aliyuncs.com/blog/images/rollup.png?x-oss-process=image/resize,l_260)

> 概况：[Rollup](http://www.rollupjs.com/)是另一个JavaScript ES6模块打包器。发布于2015年5月，与Browserify和Webpak不同，rollup只包含在项目中用到的代码。如果有大模块，带有很多函数，但是你只是用到少数几个，rollup只会将需要的函数包含到打包文件中，从而显著减少打包文件大小。

rollup在angular2中的应用：

轮子原理&demo：

```javascript {cmd="node"}
$ npm install -g rollup

// sum.js
let add = (a,b) => a + b;
let sub = (a,b) => a - b;
export { add, sub };

// main.js
import sum from "./sum";
var answer = sum(1, 3);
document.getElementById("answer").innerHTML = answer;

// 执行打包命令
- For browsers:
// compile to a <script> containing a self-executing function ('iife')
$ rollup main.js --file bundle.js --format iife

- For Node.js:
// compile to a CommonJS module ('cjs')
$ rollup main.js --file bundle.js --format cjs

- For both browsers and Node.js:
// UMD format requires a bundle name
$ rollup main.js --file bundle.js --format umd --name "myBundle"

// 备注：1、xx: output format: amd、cjs、system、esm、iife、umd
//      2、在生成的bundle.js中会发现，引入但是未使用的sub方法并未被打包进来

```

### 轮子:webpack

> 概况：Webpack 可以处理 CommonJS 、 AMD 和 ES6 模块

该规范下的轮子：

轮子原理&demo：

# 其他规范及轮子

## JSPM

![](https://smallpang.oss-cn-shanghai.aliyuncs.com/blog/images/jspm.png?x-oss-process=image/resize,l_260)

> 概况： [JSPM](https://jspm.org/docs/0.16/getting-started.html)是 JavaScript 开发工具的瑞士军刀，它是既是包管理器，又是模块加载器，又是模块打包器。

demo：

```js
// 安装到全局
npm install jspm -g

// 初始化项目
cd my-project
npm install jspm --save-dev
jspm init

// Install any packages from the jspm Registry, GitHub or npm:
jspm install npm:lodash-node
jspm install github:components/jquery
jspm install jquery
jspm install myname=npm:underscore

// demo:
// main.js
import {bootstrap} from './bootstrap.js';
bootstrap(2, 4);

// sum.js
export function bootstrap(a, b) {
    let res = a + b;
    console.log(res);
}

// html
<!doctype html>
<script src="jspm_packages/system.js"></script>
<script src="config.js"></script>
<script>
System.import('lib/main.js');
</script>

// Bundle for production
// methd1: Refresh the browser, and see the entire app loaded from a single bundle file.
jspm bundle lib/main --inject

// method2:
jspm bundle-sfx lib/main
// Alternatively, use jspm bundle-sfx lib/main to create a bundle script that can be used on its own with a <script> tag independent of config.js and system.js.

```

## 参考文章&感谢

- [js模块化历程](https://www.cnblogs.com/lvdabao/p/js-modules-develop.html)
- [浏览器加载 CommonJS 模块的原理与实现](http://www.ruanyifeng.com/blog/2015/05/commonjs-in-browser.html)
- [JavaScript模块简史](http://www.css88.com/archives/7628)
- [js模块规范](https://segmentfault.com/a/1190000012419990)
