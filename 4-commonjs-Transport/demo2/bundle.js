// (function() {
//     function r(e, n, t) {
//         function o(i, f) {
//             if (!n[i]) {
//                 if (!e[i]) {
//                     var c = "function" == typeof require && require;
//                     if (!f && c) return c(i, !0);
//                     if (u) return u(i, !0);
//                     var a = new Error("Cannot find module '" + i + "'");
//                     throw a.code = "MODULE_NOT_FOUND",
//                     a
//                 }
//                 var p = n[i] = {
//                     exports: {}
//                 };
//                 e[i][0].call(p.exports,
//                 function(r) {
//                     var n = e[i][1][r];
//                     return o(n || r)
//                 },
//                 p, p.exports, r, e, n, t)
//             }
//             return n[i].exports
//         }
//         for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
//         return o
//     }
//     return r
// })()({
//     1 : [function(require, module, exports) {
//         // foo.js
//         module.exports = function(x) {
//             console.log(x);
//         };
//     },
//     {}],
//     2 : [function(require, module, exports) {
//         // main.js
//         var foo = require("./foo");
//         foo("Hi");
//     },
//     {
//         "./foo": 1
//     }]
// },
// {},
// [2]);


var e = {
    1 : [function(require, module, exports) {
        // foo.js
        module.exports = function(x) {
            console.log(x);
        };
    },
    {}],
    2 : [function(require, module, exports) {
        // main.js
        var foo = require("./foo");
        foo("Hjjj");
    },
    {
        "./foo": 1
    }]
};
var n = {};
var t = [2];

r(e, n , t);
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
    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) o(t[i]);
    return o
}