<template>
  <div class="NavBar">
    <div>
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div>
      <div><van-icon name="search" class="iconNav" /></div>
    </div>
    <div>
      <!-- <img :src="imgUrl" alt="" @click="$router.push('/user')" v-if="imgUrl" /> -->
      <img
        src="@/assets/default_img.jpg"
        alt=""
        @click="$router.push('/login')"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgUrl: ''
    }
  },
  methods: {}
}
</script>

<style scoped lang="less">
.NavBar {
  height: 13.056vw;
  display: flex;
  background-color: white;
  div:nth-child(1) {
    width: 25vw;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 1.389vw;
    div {
      background-color: #f4f4f4;
      height: 6.667vw;
      width: 100%;
      border-radius: 3.333vw;
      position: relative;
      .iconNav {
        color: #aaa;
        position: absolute;
        left: 2.778vw;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    img {
      width: 6.944vw;
      height: 6.944vw;
    }
  }
}
</style>
