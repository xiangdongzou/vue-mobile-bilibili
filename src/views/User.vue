<template>
  <div class="userinfo">
    <navbar />
    <img src="@/assets/bannerTop_new.png" alt="" class="backImg" />
    <user-detail :userInfo="userInfo" />
    <user-article />
  </div>
</template>

<script>
import Navbar from '../components/common/Navbar.vue'
import UserArticle from '../components/user/userArticle.vue'
import UserDetail from '../components/user/userDetail.vue'

export default {
  data() {
    return {
      userInfo: {}
    }
  },
  components: {
    Navbar,
    UserDetail,
    UserArticle
  }
}
</script>

<style lang="less" scoped>
.userinfo {
  .backImg {
    height: 91px;
    width: 100%;
  }
}
</style>
