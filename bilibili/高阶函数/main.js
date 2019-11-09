// filter/map/reduce
const app = new Vue({
  el: '#app',
  data: {},
  methods: {}
})
const nums = [1, 2, 3, 4, 5, 6]
// filter里面的function是回调函数，每遍历一次就会调用一次该方法，并把值传进去
// filter中的回调函数必须返回一个boolean值
// true：当返回true时，函数内部会自动将这次回调的n加入到新的数组中
// false：当返回false时，函数内部会过滤掉这次的n
let newNums = nums.filter(n => {
  // console.log(n)
  return n > 3
})
console.log(newNums)

// map，回调函数里执行的结果返回给一个新的数组
// 调用map的数组有几个元素就会执行几次回调，然后把回调结果返回给新数组
let newNums2 = nums.map(n => {
  return n * 2
})
console.log(newNums2)

// reduce：对数组中的所有内容进行汇总,reduce函数有两个参数，第一个是回调函数，第二个是初始值
// reduce的回调函数里面有两个参数，第一个参数在第一次遍历时取的是reduce函数的第二个参数，即初始值
// 之后的遍历中preValue取的是回调函数返回的值
let total = nums.reduce((preValue, n) => {
  return preValue + n
}, 0)
console.log(total)
