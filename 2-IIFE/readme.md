
# 模块对象和 IIFE(模块模式)

- 通过使用模块对象和 立即调用的函数表达式(IIFE) ，我们可以减少对全局作用域的污染。

- 在这种方法中，我们只向全局作用域公开一个对象。该对象包含了我们在应用程序中需要的所有方法和值。在本例中，我们只向全局作用域公开了 myApp 对象。所有的函数都将被保存在 myApp 对象中。