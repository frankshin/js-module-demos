
# Modules/2.0派 -- commonjs3-Wrappings

这一波人有点像“中间派”，既不想丢掉旧的规范，也不想像AMD那样推到重来。他们认为，Modules/1.0固然不适合浏览器，但它里面的一些理念还是很好的，（如通过require来声明依赖），新的规范应该兼容这些，AMD规范也有它好的地方（例如模块的预先加载以及通过return可以暴漏任意类型的数据，而不是像commonjs那样exports只能为object），也应采纳。最终他们制定了一个Modules/Wrappings（http://wiki.commonjs.org/wiki/Modules/Wrappings）规范，此规范指出了一个模块应该如何“包装”，包含以下内容：

1. 全局有一个module变量，用来定义模块
2. 通过module.declare方法来定义一个模块
3. module.declare方法只接收一个参数，那就是模块的factory，次factory可以是函数也可以是对象，如果是对象，那么模块输出就是此对象。
4. 模块的factory函数传入三个参数：require,exports,module，用来引入其他依赖和导出本模块API
5. 如果factory函数最后明确写有return数据（js函数中不写return默认返回undefined），那么return的内容即为模块的输出。



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