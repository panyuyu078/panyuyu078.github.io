<template>
  <div>
    <div class="banner">
      <img :src="index" alt="">
      <div class="ban_text" v-show="$route.path == '/'">
        <h4>我们专注药品的研发与生产质量</h4>
        <button>了解更多</button><button>查看产品</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      arr: [
        { ind: '', img: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYzNmNGI5NzQyOGZkOTcyMWM1NTEzMjZkZDdhYjMzNGUuanBn.jpg' },
        { ind: 'no2', img: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZTM4NDU1OGRhNDFmOGQ0OGVjYzZjMThiZjFiMTBiZjQuanBn.jpg' },
        { ind: 'no3', img: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvZDc1OThkMjUxNmI5MjNlMWU4NmNlMjNkYTlmMzk2YmUuanBn.jpg' },
        { ind: 'no4', img: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMjMxNzY5YjA4MTE3NzQ2ZjU3ZmQzY2M1OGExYmVhMmQuanBn.jpg' },
        { ind: 'no5', img: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvMGJhZjZkNTljYzc3MGViZGUwNDVhOWIwNzljYzA2MjkuanBn.jpg' },
        { ind: 'no6', img: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvNDI2M2FjOWQzNzI2NDQ1NjAyN2UzMDZkM2Q2ZTVhZTMuanBn.jpg' }
      ],
      index: 'https://ccdn.goodq.top/caches/ef33c99b1ca9007af21ce71ac91e156a/aHR0cHM6Ly81YjZkNmNjYTYzNzM2LnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTgvMDgvYzNmNGI5NzQyOGZkOTcyMWM1NTEzMjZkZDdhYjMzNGUuanBn.jpg',
    }
  },
  watch: {
    '$route.path'(a, b) {
      console.log(a)
      for (var i = 0; i < this.arr.length; i++) {
        if (a == '/' + this.arr[i].ind) {
          this.index = this.arr[i].img;
        }
      }
    }
  }
}

</script>
<style>
.banner {
  height: 520px;
  position: relative;
}

.banner img {
  width: 100%;
  height: 100%;
  display: bolck;
}

.ban_text {
  position: absolute;
  text-align: center;
  font-size: 34px;
  font-weight: normal;
  font-style: normal;
  color: #225175;
  left: 50%;
  top: 235px;
  transform: translateX(-50%);
}

.ban_text button {
  font-size: 14px;
  padding: 14px 70px;
  border-width: 1px;
  border-color: rgb(34, 77, 119);
  border-style: solid;
  background-color: transparent;
  color: rgb(34, 77, 119);
  margin-top: 35px;
  margin-right: 20px;
  transition: .3s;
}

.ban_text button:hover {
  background: rgb(34, 77, 119);
  color: #fff;
}

</style>
