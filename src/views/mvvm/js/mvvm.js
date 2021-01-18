
function MVVM(options) {
  
  this.$options = options || {}
  var data = this._data = this.$options.data
  var me = this

  console.log(this._data)
  // 数据代理
  // 实现 vm.xx -> vm._data.xx
  Object.keys(data).forEach(function (key) {
    me._proxyData(key)
  })
  // 格式化计算属性
  this._initComputed()

  // 监听数据变化
  observer(data, this);
  console.log(this._data);
}

MVVM.prototype = {
  constructor: MVVM,

  _proxyData: function (key, setter, getter) {
    var me = this
    setter = setter ||
    Object.defineProperty(me, key, {
      configurable: false,
      enumerable: true,
      get: function proxyGetter() {
        return me._data[key]
      },
      set: function proxySetter(newVal) {
        me._data[key] = newVal
      }
    })
  },

  _initComputed: function () {
    var me = this
    var computed = this.$options.computed
    if (typeof computed === 'object') {
      Object.keys(computed).forEach(function (key) {
        Object.defineProperty(me, key, {
          get: typeof computed[key] === 'function'
            ? computed[key]
            : computed[key].get,
          set: function () {}
        })
      })
    }
  }
}