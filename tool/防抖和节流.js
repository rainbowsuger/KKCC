// 防抖
function debounce (fn, delay) {
  let _this = this
  return (() => {
      if (_this.timer) {
      clearTimeout(_this.timer)
      }
      _this.timer = setTimeout(() => {
      fn()
      }, delay)
  })()
}

// 节流
function throttle (fn, delay) {
  let _this = this
  return (function () {
    if (!_this.valid) {
      // 休息时间 暂不接客
      return false
    }
    // 工作时间，执行函数并且在间隔期内把状态位设为无效
    _this.valid = false
    setTimeout(() => {
      fn()
      _this.valid = true
    }, delay)
  }())
}