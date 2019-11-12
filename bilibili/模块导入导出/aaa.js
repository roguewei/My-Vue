var name = '小米'
var flage = false

function sum(num1, num2) {
  return num1 + num2
}

if (flage) {
  console.log(sum(20, 30))
}

// 导出可以被其他js引用的内容
export { flage, sum }
