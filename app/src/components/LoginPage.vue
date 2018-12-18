<template>
  <div class="bg">
    <div class="container">
      <form class="form text-center">
        <h2 class="form-title">欢迎登陆</h2>
        <input class="form-control required" type="text" v-model="username" placeholder="用户名"/>
        <input class="form-control required" type="password" model="password" placeholder="密码"/>
        <h5 class="text-danger" v-show="isShowError">用户名或密码错误</h5>
        <button class="btn btn-lg btn-primary btn-block" @click="login" >登陆</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-page',
  data: function () {
    return {
      username: '',
      password: '',
      isError: false
    }
  },
  computed: {
    isShowError: function () {
      return this.isError
    }
  },
  methods: {
    login: function () {
      console.log(this.username)
      console.log(this.password)
      if (this.username === 'wang7liang') {
        this.isError = false
        this.$router.push('/main')
      } else {
        this.isError = true
      }
    }
  }
}
</script>
<style scoped>
  .form {
    max-width: 330px;
    background-color: beige;
    margin:120px auto;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    border:1px solid green;
    border-radius:10px;
  }

</style>
