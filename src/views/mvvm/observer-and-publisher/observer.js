// 观察者模式，指的是一个Subject对象，维持一系列依赖它的对象（Observer），当有关状态发生变更时，
// Subject对象通知一系列Observer对象进行更新

// 定义一个主体对象
class Subject {
  constructor() {
    this.observer = []
  }
  // 添加
  add(observer) {
    this.observer.push(observer)
  }
  // 移除
  remove(observer) {
    this.observer.filter(item => item !== observer)
  }
  // 通知
  notify() {
    this.observer.forEach(item => {
      item.update()
    })
  }
}

//  定义观察者对象
class Observer {
  constructor(name) {
    this.name = name 
  }

  update() {
    console.log(`my name is:${this.name}`)
  }
}
