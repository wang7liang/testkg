<template>
    <div id="otherSkillPop" class="modal fade" role="dialog" >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">用户能力</div>
          <div class="modal-body">
            <div v-for="(item, index) in tmpOther.skill" :key="index">
              <span style="background:aliceblue">{{item.name}}</span>
              <a @click='triggerSkill(item)'>x</a>&nbsp;
            </div>
            <button class="btn" @click="confirm">确定</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: 'user-comment-pop',
  props: ['tmpOther'],
  methods: {
    triggerSkill (skill) {
      let index
      this.tmpOther.skill.forEach((item, key) => {
        if (item.id === skill.id) {
          index = key
        }
      })
      this.tmpOther.skill.splice(index, 1)
    },
    confirm: function () {
      this.$store.commit('other/setOther', this.tmpOther)
    }
  }
}
</script>

<style scoped>

</style>
