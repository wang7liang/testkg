<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="panel panel-default">
          <div class="panel-body">
            我的主页
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-2">
        <div class="panel panel-default">
          <div class="panel-body">
            <ul class="nav">
              <li><router-link to="/main/users">用户</router-link></li>
              <li><router-link to="/main/others">其他</router-link></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-10">
        <div class="row">
          导航
        </div>
        <div class="row">
          <div class="panel panel-default">
            <div class="panel-body">
              <router-view/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-page'
}
</script>

<style scoped>

</style>
