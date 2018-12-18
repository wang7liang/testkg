<template>
    <div id="userCommentPop" class="modal fade" role="dialog" >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">用户评价</div>
          <div class="modal-body">
            <div class="form">
              <div class="form-control">
                {{user.name}}
              </div>
              <div class="form-control">
                {{other.sex}}
              </div>

              <p><button class="btn btn-xs btn-link" data-toggle="modal" data-target="#otherSkillPop" @click="editOtherSkill()">编辑能力</button></p>
              <p>新增能力:</p>
              <p>删除的能力:</p>
              <div v-for="(item, index) in deleteSkill" :key="index">
                <span style="background:aliceblue">{{item.name}}</span>
                <a @click='triggerSkill(item)'>x</a>&nbsp;
              </div>
              <button class="btn" @click="submit">提交</button>
            </div>
          </div>

        </div>
      </div>
      <other-skill-pop :tmpOther="tmpOther"></other-skill-pop>
    </div>
</template>

<script>
import {mapState} from 'vuex'
import OtherSkillPop from './OtherSkillPop'

export default {
  name: 'user-comment-pop',
  props: ['user'],
  data: function () {
    return {
      tmpOther: {}
    }
  },
  components: {
    'other-skill-pop': OtherSkillPop
  },
  computed: {
    ...mapState('other', ['other', 'otherOld']),
    deleteSkill: function () {
      console.log('重新计算被删除的技能')
      let arr = []

      if (this.otherOld.skill === undefined) {
        arr = []
      } else {
        this.otherOld.skill.forEach(itemOld => {
          let find = false
          this.other.skill.forEach(item => {
            console.log(itemOld.name + ':' + item.name)
            if (itemOld.id === item.id) {
              find = true
            }
          })
          if (!find) {
            arr.push(itemOld)
          }
        })
      }
      return arr
    }
  },
  methods: {
    triggerSkill (skill) {
      // let index
      // this.otherOld.skill.forEach((item, key) => {
      //   if (item.id === skill.id) {
      //     index = key
      //   }
      // })
      // this.other.skill.splice(index, 1, skill)
      this.other.skill.push(skill)
    },
    editOtherSkill: function () {
      this.tmpOther = JSON.parse(JSON.stringify(this.other))
    },
    submit: function () {
    }
  }
}
</script>

<style scoped>

</style>
