<template>
  <div style="margin-top: 5.333vw">
    <van-form>
      <van-field
        v-model="username"
        name="phone&email"
        label="账号"
        placeholder="你的手机号/邮箱"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="请输入密码"
        :rules="[{ required: true }]"
      />
      <div class="forget">忘记密码</div>
      <div class="btn">
        <van-button plain hairline class="register">注册</van-button>
        <van-button plain hairline class="login" @click="login"
          >登录</van-button
        >
      </div>
    </van-form>
    <p>
      登录即代表你同意
      <a href="javascript:;">用户协议</a>
      和
      <a href="javascript:;">隐私政策</a>
    </p>
    <div class="another">
      <span></span>
      <p>其他登录方式</p>
      <span></span>
    </div>
    <div class="icon">
      <div class="icon-main">
        <div class="qq"></div>
        <span class="tips">QQ</span>
      </div>
      <div class="icon-main" style="margin-left: 10.667vw">
        <div class="weibo"></div>
        <span class="tips">微博</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    async login() {
      const res = await this.$http.post('/login', {
        phone: this.username,
        message: this.password
      })
      if (res.status !== 200) return this.$msg.fail('登录失败')
      this.$msg.success('登录成功')
      this.$router.push('/user')
    }
  }
}
</script>

<style lang="less" scoped>
.forget {
  float: right;
  margin: 2.667vw 5.333vw 5.333vw 0;
  color: #fb7299;
  font-size: 3.2vw;
}
.btn {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  margin-top: 5.333vw;
  .register {
    width: 45%;
    color: #fb7299;
    border-color: #fb7299;
    background-color: transparent;
  }
  .login {
    width: 45%;
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
.another {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: 48vw auto;
  margin-bottom: 0;

  p {
    margin: 0 5.333vw 0 5.333vw;
    font-size: 3.733vw;
  }
  span {
    display: block;
    width: 28%;
    height: 0.267vw;
    background: #e7e7e7;
  }
}
.icon {
  margin-top: 5.333vw;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon-main {
    width: 24px;
    height: 44px;
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
  }
  .tips {
    font-size: 3.2vw;
  }
  .qq {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 6.4vw;
    height: 6.4vw;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABIZJREFUaAXtml1oVEcYhnc3mjUbKRZB8CcWe9HGRqgSFTWb2NbfUmijllgoXnujol4k2XhhCKshCQQNepH2plBpSxRBECo0XqWJKAHxopIWYQVDN+hdMDGYTdZnJAvZc87s+eZ4zgYhA8OZn2/e731n5szMmd1QaDEsbA+E/XKfzWbDzc3NO8H7nvQ2nmt4rub5ivh/OBx+xvMO8WZnZ+coT1+CLwIgfmRmZqYLRhsErLKIuVVaWno2mUymBPYFTd5JAMQ/hPgfeNhf0ItDJSKmKE4wGpccqsVFJWJLi2FLS8tqyN+leJelSppdguHBmpqa2NDQUL+0kdXOk4Du7u6y8fHxAeb4Jiugh3xNPB7PDA4ODnhoG4p4aTQ2NtYN+SovbTVtWhsbG3do6goWG78DTU1N8dnZWU+9VZBJKDRSXl5e1draOutil1dtPAL0fEsegn+ZyqmpqUOmcEYCeHE3IeBrUydSe0a2UWqbszMSMD09XZ9rGMSTztnOu7DGBNtIAGv3ARNwj7ZGPsQCent7l0LI00phKKTWxF4sIJVKrWWI1eYTaMDHRyYOxAIAXm8C7NWWaWrkRyyAFeITr6RM2qkR6OnpiUrbiAXQM9uloO9otzSdTm+WYogE9PX1qTNTYOu/lSyj/a21TJcXCRgeHv6CoV2nA/G7HAHHpJgiAUyfosz/eaQrOBPF5uW1SZEAemSjFiGgCs5Fn0qgXQWwtf8M0EkJmJ82fCwN4HufG2bB4zQA55j7STeQAOvH1erHZ+e/Oh/aEUgkEp9B/ryuYZHKP8DPT/DQdrRWAEOoPrbV+WdBA+TrmAkNOhKOAmiwlYau808H6nc50yihw3QUAPkzugYLUQ6fz7nC+crJt00A6+8yFIt3QifQIMpYyo864doETE5O7kfxcifjhSyDU/3ckSaPhk0AtUZfRHlowWZWcaTZYnXhJMCPyyqrH1/ykUjExs0mgKGq9MVbACC8BzZuNgG8wNmcb9Jp4q+5fLGf+O5w82kTwAi8mGs0AYDaQK64gQRU/5gjRDPYV3P48HmeS+eeNgEYqePD9ZKSkt0dHR1/A/KAMnULXdTAfL+gHHZ1dZ0gfQoON8rKyq5ZSWjPGPMNORdVZjKZe5StmF8eVBqyt2Ox2HeSe1KRAEWU48UeptefJAM9H0H+EeTjkH8p6SD1rSsK3N+namtrpxGxV9TAm9GraDRa19bWZpvrOjjRCNAbS9ihk5A/DZD4ykPn1KU8xSgc5937y8XubbXtJXZqBPlfIN9EXdDklfsNxDsc3kS/u7kKAOhjyP+okIsV8Bdh0zon8ecqgOH0fB9K27vEpxIiVhtEiBYLVwHt7e3/AX7d6sAtD/GHrCYH2U9+IG30s9Gc/UU3H6reVYAyqqioOMZmchng1yovCL9BfB8vf4YOuE+7L4lPBO1C2I0S69nAbovsJUY5Gza0lXwrqw+LbxhidYusbuuiOEzzHCX2k77JDv4P6byAmNKJiYm91B+mQh2L1d8QVoKjji6K9Ajx9+rq6v6GhoYZyhbDe9EDbwCypGyyb73l8QAAAABJRU5ErkJggg==);
  }
  .weibo {
    background-size: 100% 100%;
    background-repeat: no-repeat;
    width: 6.4vw;
    height: 6.4vw;
    background-image: url(data:image/png;base64,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);
  }
}
</style>
