<template>
  <div>
      <ul class="list-unstyled">
        <div class="row" style="border: 1px solid black">
          <li>
            <div class="col-md-2">NO</div>
            <div class="col-md-6">姓名</div>
            <div class="col-md-4">操作</div>
          </li>
        </div>
        <div class="row" style="border: 1px solid black; border-top: 0px">
          <li class="" v-for="(item, index) in users" :key="index" >
            <div class="col-md-2">{{item.id}}</div>
            <div class="col-md-6">{{item.name}}</div>
            <div class="col-md-4">
              <button class="btn btn-xs btn-link" data-toggle="modal" data-target="#userCommentPop" @click="userComment(item)">评价</button>
            </div>
          </li>
        </div>
      </ul>
      <user-comment-pop :user="user"></user-comment-pop>
  </div>

</template>

<script>
import {mapState} from 'vuex'
import UserCommentPop from './UserCommentPop'

export default {
  name: 'user-list',
  components: {
    'user-comment-pop': UserCommentPop
  },
  data: function () {
    return {
      user: {}
    }
  },
  computed: {
    ...mapState('user', ['users'])
  },
  methods: {
    userComment: function (item) {
      var payload = {
        id: item.otherId
      }
      this.$store.dispatch('other/getOther', payload)
      this.user = item
    }
  },
  mounted: function () {
    this.$store.dispatch('user/listUser')
  }
}
</script>

<style scoped>

</style>
