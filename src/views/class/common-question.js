/*
 * @Author       : zhuyanglei@xdf.cn
 * @Date         : 2021-01-20 22:52:07
 * @LastEditors  : zhuyanglei@xdf.cn
 * @LastEditTime : 2021-01-20 23:11:44
 * @Description  : 描述信息
 */

//  递归深克隆
 export function deepCopy(obj) {
    //  过滤特殊情况
    if (obj === null) return null
    if (typeof obj !== 'object') return obj
    if (obj instanceof RegExp) {
        return new RegExp(obj)
    }
    if (obj instanceof Date) {
        return new Date(obj)
    }

    // 不直接创建对象的目的 克隆的结果和之前保持相同的所属类
    let newObj = new obj.constructor
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            newObj[key] = deepCopy(obj[key])
        }
    }
    return newObj
 }