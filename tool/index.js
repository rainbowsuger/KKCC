// demo01
var a = 20;
function fn1() {
    console.log(this.a);
}
fn1(); // undefined
// demo2
var b = 20;
function fn2() {
    function foo() {
        console.log(this.b);
    }
    foo();
}
fn2(); // undefined
// demo3
var c = 20;
var obj = {
    c: 10,
    e: this.c + 20,
    fn: function () {
        return this.c;
    }
}

console.log(obj.c); // 10
console.log(obj.fn()); // 10
// 'use strict';
// var a = 20;
// function foo () {
//     var a = 1;
//     var obj = {
//         a: 10,
//         c: this.a + 20,
//         fn: function () {
//             return this.a;
//         }
//     }
//     return obj.c;

// }
// // console.log(foo());    // 报异常
// console.log(window.foo());  // 报异常