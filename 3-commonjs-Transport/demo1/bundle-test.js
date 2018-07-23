(function() {
    function r(e, n, t) {
        function o(i, f) {
            if (!n[i]) {
                if (!e[i]) {
                    var c = "function" == typeof require && require;
                    if (!f && c) return c(i, !0);
                    if (u) return u(i, !0);
                    var a = new Error("Cannot find module '" + i + "'");
                    throw a.code = "MODULE_NOT_FOUND",
                    a
                }
                var p = n[i] = {
                    exports: {}
                };
                e[i][0].call(p.exports,
                function(r) {
                    var n = e[i][1][r];
                    return o(n || r)
                },
                p, p.exports, r, e, n, t)
            }
            return n[i].exports
        }
        for (var u = "function" == typeof require && require,
        i = 0; i < t.length; i++) o(t[i]);
        return o
    }
    return r
})()({
    1 : [function(require, module, exports) {
        //increment.js
        var add = require('./math').add;
        exports.increment = function(val) {
            return add(val, 1);
        };
    },
    {
        "./math": 2
    }],
    2 : [function(require, module, exports) {
        // math.js
        exports.add = function() {
            var sum = 0,
            i = 0,
            args = arguments,
            l = args.length;
            while (i < l) {
                sum += args[i++];
            }
            return sum;
        };
    },
    {}],
    3 : [function(require, module, exports) {

        // program.js
        var inc = require('./increment').increment;
        var result = inc(1); // 2
        console.log('最终值', result);
    },
    {
        "./increment": 1
    }]
},
{},
[3]);