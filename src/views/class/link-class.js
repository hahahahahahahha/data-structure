//节点
class ListNode {
  constructor(key) {
    this.next = null
    this.key = key
  }
}

// 链表
class List {
  constructor() {
    this.head = null
    this.length = 0
  }
  static createNode(key) {
    return new ListNode(key)
  }
  // 头插法 
  // 指定索引插入法
  insertAtHead(key) {
    const node = new ListNode(key)
    // console.log(node);
    if (this.head) {
      node.next = this.head
    }else {
      node.next = null
    }
    this.head = node
    this.length++
  }
  // 尾插法
  insertAtTail(key) {
    const newNode = new ListNode(key)
    let pre = this.findAtIndex(this.length - 1)
    if (pre ) {
      pre.next = newNode
    } else {
      this.head = newNode
    }
    this.length++
  }
  // 查找 根据key
  find(key) {
    let node = this.head
    while (node !== null && node.key !== key) {
      node = node.next
    }
    return node
  }
  // 查找 根据index
  findAtIndex(index) {
    if (index < 0 || index > this.length) return null
    let current = this.head
    for (let i = 0; i < index; i++) {
      current = current.next
    }
    return current
  }
  // 删除 指定索引
  delete(index) {
    if (index < 0 || index > this.length) return null

    let current = this.head
    if (index === 0){
      this.head = current.next
    }else {
      let previous = this.findAtIndex(index - 1)
      current = previous.next
      console.log('current', previous, current);
      // 特殊处理删除的最后一个元素
      if (current === null) previous.next = null
      // 正常处理删除操作
      if (current && current.next) previous.next = current.next
    }
    this.length--
    return current
      
  }
  
  // 辅助函数
  toString() {
    let current = this.head
    let result = ''

    while (current) {
      let next = current.next 
      next = next ? next.key : 'null'
      result += `[key: ${current.key}, next: ${next}]--> `
      current = current.next
    }
    return `lenght: ${this.length}, ${result}`
  }
  // 是否空链表
  isEmpty() {
    return this.length === 0
  }
  // 获取链表长度
  getSize() {
    return this.length
  }
  // 获取头结点
  getHead() {
    return this.head
  }
  // 清空链表
  clear() {
    this.head = null
    this.length = 0
  }
  // 
  // 
}

export {
  ListNode,
  List
}