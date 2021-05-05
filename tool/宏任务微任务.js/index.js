/**
 * 事件循环：宏任务微任务
 */

// 宏任务
setTimeout(() => {
  Promise.resolve().then(() => {
    console.log('宏任务1的微任务3');
  });
  Promise.resolve().then(() => {
    console.log('宏任务1的微任务4');
  });
  console.log('1秒，宏任务1');
}, 1000);

setTimeout(() => {
  console.log('1.5秒，宏任务2');
}, 1500);

// 微任务
Promise.resolve().then(() => {
  console.log('微任务1');
});
Promise.resolve().then(() => {
  console.log('微任务2');
});
// 微任务 该函数可以再浏览器中运行
// queueMicrotask(() => {console.log('微任务1')});
// queueMicrotask(() => {console.log('微任务2')});

// 当前代码
const start = Date.now();
// 为了延迟3秒
while(Date.now() - start < 3000) {}
console.log('3秒后');

// 微任务相当于有从属关系
// 结果：(当前执行代码 > 微任务1 微任务2) > (宏任务1 > 微任务3 微任务4) > 宏任务2