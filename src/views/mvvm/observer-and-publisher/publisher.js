//发布订阅模式 指的是希望接收的通知对象（Subscriber）基于一个主题 通过自定义的事件订阅主题 
// 被激活的对象（Publisher）通过发布主题事件的方式通知各个订阅主题的Subscriber对象
// 
// 两者的区别：主要看是否有调度中心
// 观察者：把订阅者维护在发布者这里，需要发布消息时直接发消息给订阅者，发布者是知道订阅者存在的，是强耦合
// 发布订阅：发布者不维护订阅者，也不知道订阅者的存在，而是调度中心，通知订阅者，是弱耦合
let pubSub = {
  subs: [],
  // 订阅
  sunScribe(key, fn) {
    if (!this.subs[key]) {
      this.subs[key] = []
    }
    this.subs[key].push(fn)
  },
  // 发布
  publish(...arg) {
    let args = arg
    let key = args.shift()
    let fns = this.subs[key]

    if (!fns || fns.length <= 0) return

    for (let i = 0; i < fns.length; i++) {
      fns[i](args)
    }
  },
  // 取消订阅
  unSubscribe(key) {
    delete this.subs[key]
  }
}