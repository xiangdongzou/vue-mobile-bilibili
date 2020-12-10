<template>
  <div>
    <div class="LoginTop">
      {{ login }}
      <span v-show="flag" @click="toggle">{{ type[1] }}</span>
      <span v-show="!flag" @click="toggle">{{ type[0] }}</span>
    </div>
    <login-msg v-show="flag" />
    <login-pwd v-show="!flag" />
  </div>
</template>

<script>
import LoginMsg from '../components/Login/loginMsg.vue'
import LoginPwd from '../components/Login/loginPwd.vue'

export default {
  data() {
    return {
      login: '登录bilibili',
      type: ['短信登录', '密码登录'],
      flag: false
    }
  },
  methods: {
    toggle() {
      this.flag = !this.flag
    }
  },
  components: {
    LoginMsg,
    LoginPwd
  }
}
</script>

<style lang="less" scoped>
.LoginTop {
  height: 12vw;
  background-color: #fff;
  font-size: 4.267vw;
  text-align: center;
  line-height: 12vw;
  span {
    position: absolute;
    right: 4.333vw;
    top: 0;
    font-size: 3.2vw;
  }
}
</style>
