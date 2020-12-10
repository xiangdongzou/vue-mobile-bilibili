<template>
  <div>
    <van-cell-group>
      <van-field label="中国大陆" class="content" readonly right-icon="arrow" />
    </van-cell-group>
    <van-form>
      <van-field
        center
        label="+86"
        name="phone"
        v-model="phone"
        placeholder="请输入常用手机号"
      >
        <template #button>
          <van-button
            size="small"
            style="color: #fb7299"
            :disabled="disabled"
            @click="sendPhone"
          >
            {{ text }}
          </van-button>
        </template>
      </van-field>
      <van-field
        label="验证码"
        placeholder="请输入验证码"
        v-model="message"
        name="message"
      />
      <div class="btn">
        <van-button plain hairline class="login" @click="login">
          验证登录
        </van-button>
      </div>
    </van-form>
    <p>
      登录即代表你同意
      <a href="javascript:;">用户协议</a>
      和
      <a href="javascript:;">隐私政策</a>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      message: '',
      disabled: false,
      text: '发送验证码',
      countdown: 60
    }
  },
  methods: {
    async login() {
      const res = await this.$http.post('/login', {
        phone: this.phone,
        message: this.message
      })
      if (res.status !== 200) return this.$msg.fail('登录失败')
      localStorage.setItem('token', res.data.token)
      this.$msg.success('登录成功')
      this.$router.push('/')
    },
    async sendPhone() {
      if (!this.phone) {
        this.$msg('请输入手机号')
        return
      }
      const { data } = await this.$http.get('/phone')
      this.message = data.msg
      this.settime()
    },
    settime() {
      if (this.countdown === 0) {
        this.disabled = false
        this.text = '发送验证码'
        this.countdown = 60
        return
      } else {
        this.disabled = true
        this.countdown =
          this.countdown >= 10 ? this.countdown : '0' + this.countdown
        this.text = '重新发送(' + this.countdown + ')秒'
        this.countdown--
      }
      setTimeout(() => {
        this.settime()
      }, 1000)
    }
  }
}
</script>

<style lang="less" scoped>
.content {
  margin: 5.333vw 0;
}
.btn {
  margin-top: 5.333vw;
  display: flex;
  justify-content: center;
  .login {
    width: 90%;
    background-color: #fb7299;
    color: #fff;
  }
}
p {
  font-size: 3.2vw;
  text-align: center;
  margin-top: 8vw;
  padding: 0;
  a {
    margin: 0;
    padding: 0;
    color: #fb7299;
  }
}
</style>
