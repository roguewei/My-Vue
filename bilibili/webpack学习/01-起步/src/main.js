// 使用commonjs的模块化规范
const { add, mul } = require('./mathUtils.js')

console.log(add(1, 2))
console.log(mul(2, 3))

// es6的模块化规范
import { name, age } from './info'

console.log(name)
console.log(age)
