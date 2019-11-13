function add(n1, n2) {
  return n1 + n2
}

function mul(n1, n2) {
  return n2 * n2
}

// commonjs的导出规范
module.exports = {
  add,
  mul
}
