/*****************  1  *****************************/
// 用 JavaScript 写一个函数，输入 int 型，返回整数逆序后的字符串。
// 如：输入整型 1234，返回字符串“4321”。要求必须使用递归函数调用，不能用全局变量，输入函数必须只有一个参数传入，必须返回字符串。

function reverse(n) {
  let s = ''
  // 终止条件
  if (n == 0) return s
  // 取余数
  const i = n % 10
  // 减余取整
  s += reverse((n - i) / 10)
  return i + s
}
// 测试
console.log(reverse(1234));


/*****************  two *****************************/
// 使用迭代的方式实现 flatten 函数 
function flatten(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      arr = arr.concat(arr[i])
      arr.splice(i, 1)
      i-- // 注意此处存在数组塌陷，如果不--,无法遍历到连续2个子数组元素
    }
  }
  return arr;
}

let arr01 = [[1], [2], [3], [3, 4, 5, [6, 7], 8], 9, 10, [11, [12, 13]]]
console.log(flatten(arr01))

/*****************  three  *****************************/
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组
// 已知如下数组：
let arr02 = [[1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10];

function flatten02(arr) {
  let flattenArr = [];
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (Array.isArray(item)) {
      arr = arr.concat(item) // concat 返回一个数组副本，从而不会改变原数组
      arr.splice(i, 1)
      i-- // 注意此处存在数组塌陷，如果不--,无法遍历到连续2个子数组元素
    }
  }
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i]
    if (flattenArr.indexOf(item) > -1) continue;
    flattenArr.push(item);
  }
  return flattenArr.sort((a, b) => a - b);
}
console.log('flatten02', flatten02(arr02));

/*****************  four  *****************************/
// 8皇后问题
// 先是二维数组
const queen = function (num) {
  const result = []
  // 1、可以攻击的数组
  const attack = []
  const initAttack = function (num) {
    for (let i = 0; i < num; i++) {
      attack[i] = []
      for (let j = 0; j < num; j++) {
        attack[i][j] = 0
      }
    }
  }
  initAttack(num)

  const checkQueen = function (list, row, col) {
    const len = list.length
    // 同一列
    for (let i = 0; i < len; i++) {
      if (list[i][col] === 1) return false;
    }
    // 斜右上方
    for (let i = row - 1, j = col + 1; i >= 0 && j < len; i--, j++) {
      if (list[i][j] === 1) return false;
    }
    // 斜左上方
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (list[i][j] === 1) return false;
    }
    return true;
  }

  // 递归每一行 找放置皇后的位置
  const putQueen = function (list, row) {
    // 递归终止条件，找到一个解缓存起来
    if (row === list.length) {
      result.push(JSON.parse(JSON.stringify(list)))
      return
    }
    // 循环每一列，找出可以放置皇后的位置
    for (let col = 0; col < list.length; col++) {
      if (checkQueen(list, row, col)) {
        list[row][col] = 1
        putQueen(list, row + 1)
        // 回溯回去
        list[row][col] = 0
      }
    }
  }
  putQueen(attack, 0)
  console.log('attack', attack);
  // let res = []
  // for (let i = 0; i < result.length; i++) {
  //   let item = ''
  //   for (let j = 0; j < result[i].length; j++) {
  //     const element = result[i][j];
  //     item = item + element.join('')
  //   }
  //   res.push([item])
  //   console.log('element---0', item);
  // }
  return result
}
console.log('queen', queen(4));

/*****************    *****************************/
// 给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。
/*
输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/
const combine = function (n, k) {
  let res = []
  let path = []
  const backTrack = function (n, k, index) {

    if (path.length === k) {
      res.push([...path])
      return
    }

    for (let i = index; i <= n; i++) {
      path.push(i)
      backTrack(n, k, i + 1)
      path.pop()
    }
  }
  backTrack(n, k, 1)
  return res
}
console.log('combine', combine(4, 2));
/*****************  6  字符串出现的不重复最长长度 *****************************/
// 字符串出现的不重复最长长度
const lengthOfLongestSubstring = (string) => {
  if (!string) {
    return 0
  }
  let left = 0
  let right = 0
  let map = {}
  let res = 0
  while (right < string.length) {
    if (!map[string[right]]) {
      // 不在窗口内
      res = Math.max(right - left + 1, res);
      map[string[right]] = true
      right++
      // res.push(string[right])
    } else {
      // 在窗口内
      map[string[left]] = false
      left++
    }
  }
  // let map = new Map();
  // let i = -1
  // let res = 0
  // let n = string.length
  // for (let j = 0; j < n; j++) {
  //   if (map.has(string[j])) {
  //     // 移动左指针
  //     i = Math.max(i, map.get(string[j]))
  //   }
  //   // 移动右指针，更新结果
  //   res = Math.max(res, j - i)
  //   map.set(string[j], j)
  // }
  // console.log(map);
  return res
}
const string = 'abcabcbb'
console.log('lengthOfLongestSubstring', lengthOfLongestSubstring(string));
/*****************  7 滑动窗口求值  *****************************/
const winList = [-3, 3, 1, -3, 2, 4, 7]
const winSum = (list, len) => {
  if (!list.length || list.length < len) {
    return -1
  }
  let left = 0
  let right = len
  let res = []
  while (right <= list.length) {
    const tempList = list.slice(left, right)
    const sum = tempList.reduce((pre, cur) => {
      return pre + cur
    }, 0)
    res.push(sum)
    left++
    right++
  }
  return res
}
console.log('winSum', winSum(winList, 3));
/*****************  8 防抖函数  *****************************/
// 原理：在事件被触发n秒后在执行回调，如果在这n秒内再次被触发，则重新计时
// 适用场景
// 1、防止多次提价按钮
// 2、搜索框，防止联想发送多次请求

// 改进版：增加立即执行参数+增加函数返回值
const debounce = (func, wait, immediate) => {
  let timeout, result;
  return function () {
    const context = this
    const args = arguments
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait);
      if (callNow) result = func.apply(context, args)
    } else {
      timeout = setTimeout(() => {
        result = func.apply(context, args)
      }, wait);
    }
    return result
  }
}
debounce()
/*****************  9 节流函数 *****************************/
// 原理：规定在一个单位时间内，只能触发一次函数，如果在这个单位时间内触发多次，只有一次生效
// 适用场景
// 1、拖拽场景：防止高频次触发位置变动
// 2、缩放场景：监控浏览器的resize

const throttle = (func, wait) => {
  let timeout;
  return function () {
    const context = this
    const args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        func.apply(context, args)
      }, wait);
    }
  }
}

throttle()
/*****************  10 使用promise 封装ajax  *****************************/

const getJson = (url) => {
  const promise = new Promise(function (resolve, reject) {
    const handler = function () {

      if (this.readyState !== 4) {
        return
      }
      if (this.readyState === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }
    // 1、实例化XML
    const client = new XMLHttpRequest()
    // 2、打开请求URL
    client.open('GET', url)
    // 3、监听URL的状态
    client.onreadystatechange = handler
    // 4、设置接收参数的类型
    client.responseType = "json"
    // 5、设置请求头
    client.setRequestHeader('Accept', 'application/json')
    // 6、发送请求
    client.send()
  })
  return promise
}
// getJson('/post/1.json').then(
//   res => res,
//   error => console.log("-----rejected----: ", error)
// ).then(
//   res => console.log("resolved:>>>> ", res),
//   error => console.log("rejected----: ", error)
// )
// getJson('/post/2.json').catch(
//   error => console.log("-----rejected----: ", error)
// ).then(
//   res => console.log("-----resolved-: ", res)
// ).finally(
//   () => console.log('finally')
// )

/*****************  11 递归将一维数组构建成tree结构 *****************************/
const treeArray = [
  { id: 1, name: '水果', parentId: null },
  { id: 2, name: '苹果', parentId: 1 },
  { id: 3, name: '苹果-A', parentId: 2 },
  { id: 4, name: '苹果-B', parentId: 2 },
  { id: 5, name: '苹果-C', parentId: 4 },
  { id: 6, name: '苹果-D', parentId: 4 },
  { id: 7, name: '香蕉', parentId: 1 },
  { id: 8, name: '香蕉-E', parentId: 7 },
  { id: 9, name: '香蕉-F', parentId: 8 }
]
// 获取根节点
const getRoot = (list) => {
  let root = null
  if (Array.isArray(list)) {
    list.forEach(item => {
      if (item.parentId === null) {
        root = item
      }
    })
  }
  return root
}
// 
const setChildTree = (root, list) => {
  list.forEach(item => {
    if (item.parentId === root.id) {
      if (root.children) {
        root.children.push(item)
      } else {
        root.children = []
        root.children.push(item)
      }
      setChildTree(item, list)
    }
  })
}
const toTree = (list) => {
  let result = []
  let root = getRoot(list)
  if (root) {
    result.push(root)
    setChildTree(root, list)
  }
  return result
}
console.log(JSON.stringify(toTree(treeArray)));
// const treeData = toTree(array)

/*****************  12  *****************************/
/*****************  13  *****************************/
/*****************  14  *****************************/