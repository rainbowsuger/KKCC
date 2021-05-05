let timer = null;
let valid = true;
// 防抖
function debounce (fn, delay) {
  return (() => {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fn()
    }, delay)
  })()
}

// 节流
function throttle (fn, delay) {
  return (function () {
    if (!valid) {
      // 休息时间 暂不接客
      return false
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    valid = false
    setTimeout(() => { // 函数间隔2s后执行
      fn()
      valid = true
    }, delay)
  }())
}
// 节流
function throttle1 (fn, delay) {
  return (function () {
    if (valid) { // 当这个值是true的时候工作
      fn(); // 函数立马执行
      valid = false
      setTimeout(() => {
        valid = true
      }, delay)
    }
  }())
}

function debounceTest() {
  console.log('防抖')
}

function throttleTest() {
  console.log('节流')
}

