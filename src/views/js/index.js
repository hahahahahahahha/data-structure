/****************   1、数组扁平化   *****************************/

// 示例
const list = [1, [2, [3, [4, 5]]], 6];

// 方法1：flat()
const res1 = list.flat(Infinity)
console.log('res1', res1);

// 方法2： 正则
console.log('-----', JSON.stringify(list));
const res2 = JSON.stringify(list).replace(/\[|\]/g,'').split(',')
console.log('res2', res2);

// 方法3：正则改良版本
console.log('', JSON.parse('[' + JSON.stringify(list).replace(/\[|\]/g, '') + ']'));

// 方法4：reduce
const flatten = arr => {
  return arr.reduce((pre, cur)=> {
    return pre.concat(Array.isArray(cur)?flatten(cur):cur)
  }, [])
}
console.log('flatten', flatten(list));

// 方法5：函数递归
const res5 = []
const fn = arr => {
  for (let i = 0; i < arr.length; i++) {
   if (Array.isArray(arr[i])) {
     fn(arr[i])
   }else {
     res5.push(arr[i])
   }
  }
}
console.log('函数递归', fn(list), res5);

/****************   2、数组去重   *****************************/
// 示例： 
const list2 = [1, 1,1, '1', 17, 1, true, true, false, false, false, 'true', false, 'a', {}, {}];
// => [1, '1', 17, true, false, 'true', 'a', {}, {}]
// 方法1：利用Set
const res21 = Array.from(new Set(list2))
console.log('set', res21);

// 方法2：两层for循环+spice

const unique1 = arr => {
  let len = arr.length
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j,1) // 改方法会改变数组length
        len--
        j-- //存在数组塌陷问题，所以让j--,保证第三个重复的元素可以被遍历到
      }
    }   
  }
  return arr
}
console.log('两层for循环', unique1(list2));

// 方法3：利用indexOf  同理include、filter
const unique2 = arr => {
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (res.indexOf(arr[i] === -1)) {
      res.push(arr[i])
    }    
  }
  return res
}
console.log('利用indexOf', unique2(list2));

// 方法4：利用Map
const unique3 = arr => {
  const map = new Map()
  const res = []
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i],true)
      res.push(arr[i])
    }
  }
  return res
}

console.log('利用Map', unique3(list2));

/****************   3、类数组转化为数组  *****************************/
// 示例
const list3 = {
  '0': 1,
  '1': 2,
  '2': 3,
  '3': 4,
  '4': 5,
  '5': 6,
  '6': 7,
  '7': 8,
  '8': 9,
  '9': 0,
  length: 10
}
// 方法1：Array.from
console.log('Array.from',Array.from(list3));

// 方法2： Array.prototype.slice.call
const res31 = Array.prototype.slice.call(list3)
console.log('Array.prototype.slice.call', res31);

// 方法3：扩展运算符
// const res32 = [...list3]
// console.log('扩展运算符', res32);

// 方法4：利用concat
const res33 = Array.prototype.concat.apply([], list3)
console.log('利用concat', res33);

/****************   4、Function.prototype.call   *****************************/
// 示例
// const name = '李四'
// console.log('name', name);
const obj4 = {
  name:'张三',
  printName(age) {
   return this.name+age
  }
}
Function.prototype.myCall = function (context = window, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error')
  }
  const fn = Symbol('fn')
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}
const printFunc = obj4.printName
console.log('printFunc', printFunc());
console.log('myCall', printFunc.myCall(obj4,18,189));
/****************   5、Function.prototype.apply()   *****************************/
// 示例
Function.prototype.myApply = function (context = window, args) {
  if (typeof this !== 'function') {
    throw new TypeError('Type Error')
  }
  const fn = Symbol('fn')
  context[fn] = this
  const res = context[fn](...args)
  delete context[fn]
  return res
}
console.log('myApply', printFunc.myApply(obj4, [180, 189]));
/****************   6、Function.prototype.bind   *****************************/
// 示例
Function.prototype.myBind = function (context, ...args) {
  if (typeof this !== 'function') {
    throw new Error("Type Error");
  }
  // 保存this
  let self = this

  return function Fn () {
    // 考虑new
    if (this instanceof Fn) {
      console.log(args, arguments);
      return new self(...args, ...arguments)
    }
    return self.apply(context, [...args,...arguments])
  }
}
function A(a, b) {
  this.a = a;
  this.b = b
}
var a = A.myBind({ x: 1 }, 1)
var b = new a(2) // {a: 1, b: 2}
console.log('b', b);

/****************   7、debounce 防抖   *****************************/
const debounce = (fn, time) => {
  let timeout = null
  return function () {
    clearTimeout(timeout)
    timeout =  setTimeout(() => {
      fn.apply(this, arguments)
    }, time);
  }
}


/****************   8、throttle(节流)   *****************************/
const throttle = (fn, time) => {
  let flag = true
  return function () {
    if (flag) return
    flag = false
    setTimeout(()=>{
      fn.apply(this, arguments)
      flag = true
    }, time)
  }
}

/****************   9、函数柯里化   *****************************/
//  指的是将一个接受多个参数的函数，变为接受一个参数返回一个函数的固定形式，便于再次调用
// 示例： 实现add(1)(2)(3)(4) = 10    add(1)(1,2,3)(2) = 9

function add() {
  const _args = [...arguments]
  function fn() {
    _args.push(...arguments)
    return fn
  }
  fn.toString = function () {
    return _args.reduce((sum, cur) => sum + cur)
  }
  return fn
}

console.log('add', add(1)(2)(3)(4).toString());
console.log('add(1)(1,2,3)(2)', add(1)(1, 2, 3)(2).toString());


/****************   10、new操作   *****************************/
//步骤：
// 1、以ctor.prototype 为原型创建一个对象
// 2、执行构造函数并将this绑定到创建的对象上
// 3、判断构造函数执行返回的结果是否引用类型，若是则返回构造函数执行的结果，否则返回创建的对象
function myNew(ctor, ...args) {
  if (typeof ctor !== 'function') {
    throw new TypeError('Type Error')
  }

  const obj = Object.create(ctor.prototype)
  const res = ctor.apply(obj, args)

  const isObject = typeof res === 'object' && res !== null
  const isFunction = typeof res === 'function'
  return isObject || isFunction ? res : obj
}
/****************   11、Promise   *****************************/
// 

function MyPromise(excutor) {
  this.status = 'pending' //状态默认为等待
  this.value = null // resolve值
  this.reason = null // reject值
  this.onResolvedFunc = [] //使用Function原型作为默认函数值
  this.onRejectedFunc = []
  
  const resolve = value => {
    // 只有在等待状态，才能进入解决状态
    setTimeout(() => {
      if (this.status === 'pending') {
        this.value =  value
        this.status = 'fullfilled'
        // 调用所有的then resolve
        this.onResolvedFunc.forEach(fun => fun(this.value))
      }
    });
  }

  const reject = reason => {
    // 只有在等待状态，才能进入拒绝状态
    setTimeout(() => {
      if (this.status === 'pending') {
        this.reason = reason
        this.status = 'rejected'
        this.onRejectedFunc.forEach(fun => fun(this.reason))
      }
    });
  }

  // 执行传入的函数参数
  excutor(resolve, reject)
}

// 增加then方法
MyPromise.prototype.then = function (onResolved, onRejected) {
  if (this.status === 'fullfilled') {
    onResolved(this.value)
  }
  if (this.status === 'rejected') {
    onRejected(this.reason)
  }
  // 存储resolve reject函数
  if (this.status === 'pending') {
    this.onResolvedFunc.push(onResolved)
    this.onRejectedFunc.push(onRejected)
  }
}

// 测试
// let p = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('res')
//   }, 1000);
// })
// p.then(res =>  console.log(res))
let p = new MyPromise((resolve, reject) => {
  resolve(1);
});
p.then(res => console.log("res1:", res)); //res1: 1
p.then(res => console.log("res2:", res)); //res2: 1

/****************   12、Promise.all   *****************************/
Promise.myAll = function (array) {
  return new Promise((resolve, reject) => {
    const ans = []
    let index = 0
    for (let i = 0; i < array.length; i++) {
      array[i].then(res=> {
        ans[i] = res
        index++
        if (index === array.length) {
          resolve(ans)
        }
      }).catch(error=> reject(error))
    }
  })
}
/****************   13、Promise.race   *****************************/
Promise.myRace = function (array) {
  return new Promise((resolve, reject) => {
    array.forEach(item=> {
       // 如果不是Promise实例需要转化为Promise实例
      Promise.resolve(item).then(val => resolve(val), error => reject(error))
    })
  })
}
/****************   14、Promise并行限制   *****************************/
// 示例：
// addTask(1000, '1');
// addTask(500, '2');
// addTask(300, '3');
// addTask(400, '4');
// output: 2 3 1 4
// 思路：使用队列，add向队列中插入promise，判断当前执行数量是否小于2，如果小于2，从队列中弹出，并且执行Promise绑定的then函数

class Scheduler {
  constructor() {
    this.queue = []
    this.maxCount = 2
    this.runCount = 0
  }
  add(promiseCreator) {
    this.queue.push(promiseCreator)
  }

  request() {
    // 队列为空或者运行的promise超过最大数 不执行
    if (!this.queue || !this.queue.length || this.runCount >= this.maxCount) return
    this.runCount++

    this.queue.shift()().then(() => {
      this.runCount--
      this.request()
    })
  }
  taskStart() {
    for (let i = 0; i < this.maxCount; i++) { 
      this.request()
    }
  }
}

// 测试
const timeout = time => new Promise(resolve => {
  setTimeout(resolve, time);
})

const scheduler = new Scheduler();

const addTask = (time, order) => {
  // scheduler.add(() => timeout(time).then(() => console.log(order)))
}


addTask(1000, '1');
addTask(500, '2');
addTask(300, '3');
addTask(400, '4');

scheduler.taskStart()


/****************   15、深拷贝(递归)   *****************************/
const cloneDeep = function (target, hash = new WeakMap()) {
  // 特殊参数处理
  if (typeof target !== 'object' || target === null) {
    return target
  }

  // 在hash表中缓存
  if (hash.has(target)) return hash.get(target)
  // 处理下是object 还是 array 
  const cloneTarget = Array.isArray(target) ? [] : {}
  hash.set(target, cloneTarget)

  // 针对Symbol属性
  const symKeys = Object.getOwnPropertySymbols(target)
  if (symKeys.length) {
    symKeys.forEach(symKey => {
      if (typeof target[symKey] === 'object' && target[symKey] !== null) {
        cloneTarget[symKey] = cloneDeep(target[symKey])
      }else {
        cloneTarget[symKey] = target[symKey]
      }
    })
  }

  for (const key in target) {
    if (Object.hasOwnProperty.call(target, key)) {
      cloneTarget[key] = typeof target[key] === 'object' && target[key] !== null ? cloneDeep(target[key], hash) : target[key]
    }
  }
  return cloneTarget
}

// 测试
let o1 = {
  a: 1,
  b: null,
  c: undefined,
  d: "hello",
  e: [111, 222, 333, 444],
  f: true,
  s: Symbol('ww'),
}
o1.oo = o1   // 循环引用
let o2 = cloneDeep(o1)
o2.e = [1,2,23]
console.log('-----',o1,o2)
/****************   16、数组扁平化   *****************************/
// 实现将 urlStr 主机地址后面的参数转化为对象。
// 示例:
// { name: 'koala', study: [ 'js', 'node' ] }
let urlStr = 'http://www.inode.club?name=koala&study=js&study=node&study=html';

const queryString = function (request) {

  let params = request.split('?')[1]
  let query = params.split('&')
  let result = {}
  for (let i = 0; i < query.length; i++) {
    const item = query[i].split('=')
    let key = item[0]
    let value = item[1]
    if (result[key]) {
      result[key] = Array.isArray(result[key]) ? result[key] : [result[key]]
      result[key].push(value)
    }else {
      result[key] = value
    }
  }
  return result
}
console.log('queryString',queryString(urlStr));

/****************   17、intanceof的实现   *****************************/
// instanceof左侧是一个对象，右侧是一个函数，用于判断构造的函数的prototype属性是否出现在对象的原型链上

const myInstanceof = function (left, right) {
  if (typeof right !== 'function') {
    throw new Error("Type Error");
  }
  // 获取对象的原型
  let proto = Object.getPrototypeOf(left)
  // 获取构造函数的protoType对象
  let protoType = right.protoType

  // 判断构造函数的prototype对象是否在对象的原型链上
  while (true) {
    if (!proto) return false
    if (proto === protoType) return true
    // 如果没有找 就继续从原型上找
    proto = Object.getPrototypeOf(proto)
    
  }
}