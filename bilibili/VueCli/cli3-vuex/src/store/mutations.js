export default {
  // 这里的方法都会默认传入一个参数，就是上面的state
  increment(state) {
    state.counter++
  },
  decrement(state) {
    state.counter--
  },
  incrementCount(state, payload) {
    console.log(payload)

    state.counter += payload.count
  },
  decrementCount(state, count) {
    state.counter -= count
  },
  updateStudent(state) {
    // 异步操作直接在mutations里执行是不对的
    // setTimeout(() => {
    //   console.log(state.student[0])
    //   state.student[0].name = 'laogao'
    // }, 1000)
    state.student[0].name = 'laogao'
  }
}
