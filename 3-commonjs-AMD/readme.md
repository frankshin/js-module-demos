
# Modules/Async派 —— commonjs2-AMD

这一波人有点像“革新派”，他们认为浏览器与服务器环境差别太大，不能沿用旧的模块标准。既然浏览器必须异步加载代码，那么模块在定义的时候就必须指明所依赖的模块，然后把本模块的代码写在回调函数里。模块的加载也是通过下载-回调这样的过程来进行，这个思想就是AMD的基础，由于“革新派”与“保皇派”的思想无法达成一致，最终从CommonJs中分裂了出去，独立制定了浏览器端的js模块化规范AMD（Asynchronous Module Definition）（https://github.com/amdjs/amdjs-api/wiki/AMD）
本文后续会继续讨论AMD规范的内容。