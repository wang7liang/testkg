<template>
  <div>
    <ul class="list-unstyled">
      <div class="row" style="border: 1px solid black">
        <li>
          <div class="col-md-2">NO</div>
          <div class="col-md-3">性别</div>
          <div class="col-md-4">地址</div>
          <div class="col-md-3">操作</div>
        </li>
      </div>
      <div class="row" style="border: 1px solid black; border-top: 0px">
        <li class="" v-for="(item, index) in others" :key="index" >
          <div class="col-md-2">{{item.id}}</div>
          <div class="col-md-3">{{item.sex}}</div>
          <div class="col-md-4">{{item.address}}</div>
          <div class="col-md-3">&nbsp;</div>
        </li>
      </div>
    </ul>
  </div>

</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'other-list',
  data: function () {
    return {
    }
  },
  computed: {
    ...mapState('other', ['others'])
  },
  mounted: function () {
    this.$store.dispatch('other/listOther')
  }
}
</script>

<style scoped>

</style>
