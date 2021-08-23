/*
 * @Author       : zhuyanglei@xdf.cn
 * @Date         : 2021-01-20 22:52:07
 * @LastEditors  : zhuyanglei@xdf.cn
 * @LastEditTime : 2021-08-23 20:16:53
 * @Description  : 描述信息
 */

// const { delete } = require("vue/types/umd")

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
//  
const list = [
    {
        id:1,
        parentId: null,
        name:"水果"
    },
    {
        id: 2,
        parentId: 1,
        name: "水果-A"
    },
    {
        id: 3,
        parentId: 1,
        name: "水果-B"
    },
    {
        id: 4,
        parentId: 2,
        name: "水果-A-A1"
    }
]
// 递归方法
const tree = (list)=>{

    const root = list.find(item=>item.parentId === null)
    const subTree = (root,list)=>{
        return list.map(item=> item.parentId === root.id)
    }

    const buildTree = (root, sub)=>{

    }
}

// 对象方法
const toTreeData = (list)=>{
    let result = []
    // 1、判断传入的参数是否正确
    if (!Array.isArray(list)) {
        return result
    }
    // 删除元素的children属性
    list.forEach(item=> {
        // delete item.children
    })

    // 2、构建对象遍历存储子元素
    let map = {}
    list.forEach(item=>{
        map[item.id] = item
    })
    // 3、遍历数组，找出对象中的子元素构建树形结构
    list.forEach(item=> {
        let parent = map[item.parentId]
        if (parent) {
            // 子节点
            (parent.children||(parent.children=[])).push(item)

        }else{
            // 父节点
            result.push(item)
        }
    })
   return result
}
console.info(JSON.stringify(toTreeData(list)) );

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
