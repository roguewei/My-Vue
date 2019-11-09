const app = new Vue({
  el: '#app',
  data: {
    books: [
      {
        id: 1,
        name: 'JAVA入门到放弃',
        price: 110,
        count: 1
      },
      {
        id: 2,
        name: 'MySQL删库到跑路',
        price: 120,
        count: 1
      },
      {
        id: 3,
        name: 'C++指针瞎几把指',
        price: 130,
        count: 1
      },
      {
        id: 4,
        name: 'PHP世界上最不好语言',
        price: 140,
        count: 1
      }
    ]
  },
  methods: {
    decrement(index) {
      if (this.books[index].count > 1) {
        this.books[index].count--
      }
    },
    increment(index) {
      this.books[index].count++
    },
    delbooks(index) {
      this.books.splice(index, 1)
    }
  },
  computed: {
    totalPrice() {
      let total = 0
      for (let i in this.books) {
        total += this.books[i].price * this.books[i].count
      }
      return total
    }
  },
  filters: {
    showPrice(price) {
      return '￥' + price.toFixed(2)
    }
  }
})
