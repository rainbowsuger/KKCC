// 实现函数不定参相加

function add(...arg) {
    let sum = 0;
    // forEach
    // arg.forEach(item => {
    //     sum+=item;
    // })

    // reduce
    arg.reduce(function(prev, cur, index, arr) {
        console.log(prev, cur, index);
        sum = prev + cur;
        return sum;
    })
    return sum
}
console.log(add(1,2,3,4,5))
console.log(add(1)(2)(3)(4)(5))
function add1(...arg) {
    // 第一次执行时，定义一个数组专门用来存储所有的参数
    // var _args = [].slice.call(arguments); 同下
    var _args = arg;

    // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
    var adder = function () {
        var _adder = function() {
            // [].push.apply(_args, [].slice.call(arguments));
            _args.push(...arguments);
            return _adder;
        };

        // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
        _adder.toString = function () {
            return _args.reduce(function (a, b) {
                return a + b;
            });
        }

        return _adder;
    }
    // return adder.apply(null, _args);
    return adder(..._args);
}
console.log(add1(1,2,3,4,5).toString())
console.log(add1(1)(2)(3)(4)(5).toString())
