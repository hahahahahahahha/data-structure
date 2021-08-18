//节点
// class ListNode {
//   constructor(key) {
//     this.next = null
//     this.key = key
//   }
// }

// // 链表
// class List {
//   constructor() {
//     this.head = null
//     this.length = 0
//   }
//   static createNode(key) {
//     return new ListNode(key)
//   }
//   // 头插法 
//   // 指定索引插入法
//   insertAtHead(key) {
//     const node = new ListNode(key)
//     // console.log(node);
//     if (this.head) {
//       node.next = this.head
//     }else {
//       node.next = null
//     }
//     this.head = node
//     this.length++
//   }
//   // 尾插法
//   insertAtTail(key) {
//     const newNode = new ListNode(key)
//     let pre = this.findAtIndex(this.length - 1)
//     if (pre ) {
//       pre.next = newNode
//     } else {
//       this.head = newNode
//     }
//     this.length++
//   }
//   // 查找 根据key
//   find(key) {
//     let node = this.head
//     while (node !== null && node.key !== key) {
//       node = node.next
//     }
//     return node
//   }
//   // 查找 根据index
//   findAtIndex(index) {
//     if (index < 0 || index > this.length) return null
//     let current = this.head
//     for (let i = 0; i < index; i++) {
//       current = current.next
//     }
//     return current
//   }
//   // 删除 指定索引
//   delete(index) {
//     if (index < 0 || index > this.length) return null

//     let current = this.head
//     if (index === 0){
//       this.head = current.next
//     }else {
//       let previous = this.findAtIndex(index - 1)
//       current = previous.next
//       console.log('current', previous, current);
//       // 特殊处理删除的最后一个元素
//       if (current === null) previous.next = null
//       // 正常处理删除操作
//       if (current && current.next) previous.next = current.next
//     }
//     this.length--
//     return current
      
//   }
  
//   // 辅助函数
//   toString() {
//     let current = this.head
//     let result = ''

//     while (current) {
//       let next = current.next 
//       next = next ? next.key : 'null'
//       result += `[key: ${current.key}, next: ${next}]--> `
//       current = current.next
//     }
//     return `lenght: ${this.length}, ${result}`
//   }
//   // 是否空链表
//   isEmpty() {
//     return this.length === 0
//   }
//   // 获取链表长度
//   getSize() {
//     return this.length
//   }
//   // 获取头结点
//   getHead() {
//     return this.head
//   }
//   // 清空链表
//   clear() {
//     this.head = null
//     this.length = 0
//   }
//   // 
//   // 
// }

// export {
//   ListNode,
//   List
// }

/***********   测试代码      ***********************/ 
// (function () {
//   setImmediate(function () {
//     console.log(1);
//   }, 0);
//   setTimeout(function () {
//     console.log(2);
//   }, 0);
//   new Promise(function (resolve) {
//     console.log(3);
//     resolve();
//     console.log(4);
//   }).then(function () {
//     console.log(5);
//   });
//   console.log(6);
//   process.nextTick(function () {
//     console.log(7);
//   });
//   console.log(8);
// })()

// (function () {
//   console.log('golb1');

//   setTimeout(function() {
//       console.log('timeout1');
//       process.nextTick(function() {
//           console.log('timeout1_nextTick');
//       })
//       new Promise(function(resolve) {
//           console.log('timeout1_promise');
//           resolve();
//       }).then(function() {
//           console.log('timeout1_then')
//       })
//   })

//   setImmediate(function() {
//       console.log('immediate1');
//       process.nextTick(function() {
//           console.log('immediate1_nextTick');
//       })
//       new Promise(function(resolve) {
//           console.log('immediate1_promise');
//           resolve();
//       }).then(function() {
//           console.log('immediate1_then')
//       })
//   })

//   process.nextTick(function() {
//       console.log('glob1_nextTick');
//   })
//   new Promise(function(resolve) {
//       console.log('glob1_promise');
//       resolve();
//   }).then(function() {
//       console.log('glob1_then')
//   })

//   setTimeout(function() {
//       console.log('timeout2');
//       process.nextTick(function() {
//           console.log('timeout2_nextTick');
//       })
//       new Promise(function(resolve) {
//           console.log('timeout2_promise');
//           resolve();
//       }).then(function() {
//           console.log('timeout2_then')
//       })
//   })

//   process.nextTick(function() {
//       console.log('glob2_nextTick');
//   })
//   new Promise(function(resolve) {
//       console.log('glob2_promise');
//       resolve();
//   }).then(function() {
//       console.log('glob2_then')
//   })

//   setImmediate(function() {
//       console.log('immediate2');
//       process.nextTick(function() {
//           console.log('immediate2_nextTick');
//       })
//       new Promise(function(resolve) {
//           console.log('immediate2_promise');
//           resolve();
//       }).then(function() {
//           console.log('immediate2_then')
//       })
//   })
// })()


// console.log('outer');

// setTimeout(() => {
//   setTimeout(() => {
//     console.log('setTimeout');
//   }, 0);
//   setImmediate(() => {
//     console.log('setImmediate');
//   });
// }, 0);


// async function async1() {
//   console.log('async1 start')
//   await async2()
//   console.log('async1 end')
// }
// async function async2() {
//   console.log('async2')
// }
// console.log('script start')
// setTimeout(function () {
//   console.log('setTimeout0')
// }, 0)
// setTimeout(function () {
//   console.log('setTimeout3')
// }, 3)
// setImmediate(() => console.log('setImmediate'));
// process.nextTick(() => console.log('nextTick'));
// async1();
// new Promise(function (resolve) {
//   console.log('promise1')
//   resolve();
//   console.log('promise2')
// }).then(function () {
//   console.log('promise3')
// })
// console.log('script end')


// const fs = require('fs')

// // timers阶段
// const startTime = Date.now();
// setTimeout(() => {
//   const endTime = Date.now()
//   console.log(`timers: ${endTime - startTime}`)
// }, 0)
// // check阶段
// // setImmediate(() => {
// //   console.log('check阶段')
// // })
// // poll阶段(等待新的事件出现)
// const readFileStart = Date.now();
// fs.readFile('./demo.txt', (err, data) => {
//   // if (err) throw err
//   console.log('ssss----', err,data);
//   let endTime = Date.now()
//   // 获取文件读取的时间
//   console.log(`read time: ${endTime - readFileStart}`)
//   // 通过while循环将fs回调强制阻塞5000s
//   while (endTime - readFileStart < 5000) {
//     endTime = Date.now()
//   }
// })

const fs = require('fs');

fs.readFile(__filename, () => {
  console.log('readFile');
  setTimeout(() => {
    console.log('timeout');
  }, 0);
  setImmediate(() => {
    console.log('immediate');
  });
});
