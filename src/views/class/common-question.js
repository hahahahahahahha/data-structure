/*
 * @Author       : zhuyanglei@xdf.cn
 * @Date         : 2021-01-20 22:52:07
 * @LastEditors  : zhuyanglei@xdf.cn
 * @LastEditTime : 2021-01-20 23:11:44
 * @Description  : 描述信息
 */

//  递归深克隆
//  export function deepCopy(obj) {
//     //  过滤特殊情况
//     if (obj === null) return null
//     if (typeof obj !== 'object') return obj
//     if (obj instanceof RegExp) {
//         return new RegExp(obj)
//     }
//     if (obj instanceof Date) {
//         return new Date(obj)
//     }

//     // 不直接创建对象的目的 克隆的结果和之前保持相同的所属类
//     let newObj = new obj.constructor
//     for (const key in obj) {
//         if (Object.prototype.hasOwnProperty.call(obj, key)) {
//             newObj[key] = deepCopy(obj[key])
//         }
//     }
//     return newObj
//  }

/************************************/

const defineReactive = function (obj, key, val) {

  Object.defineProperty(obj, key,{
    get() {
      console.log(`${key}属性被读取了...`);
      return val
    },
    set(newVal) {
      console.log(`${key}属性被修改了...`);
      val = newVal
    }
  })
}
const observable = function (obj) {
  if (!obj || typeof obj !== 'object') return
    
  let keys = Object.keys(obj)
  keys.forEach((key) => {
    console.log('key---',key);
    defineReactive(obj,key,obj[key])
  })
  return obj
}
let person = observable({
  name:'tom',
  age:10,
  per: {
    per2:{
      sex: '男'
    },
    height: 190
  }
})
person.per.per2.sex = 'wwwwwwwww--'

console.log(person.per.per2.sex)

/************************************/