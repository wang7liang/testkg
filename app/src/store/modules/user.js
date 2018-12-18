import axios from 'axios'

let config = {
  // 请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
  url: '/',

  // 请求方法同上
  method: 'get',

  // 基础url前缀
  baseURL: 'http://127.0.0.1:8888',

  // 这里可以在发送请求之前对请求数据做处理
  transformRequest: [
    function (data) {
      // console.log('数据发送前:' + JSON.stringify(data))
      return data
    }
  ],

  // 这里提前处理返回的数据
  transformResponse: [
    function (data) {
      // console.log('数据发送后:' + JSON.stringify(data))
      return data
    }
  ],

  // 请求头信息
  headers: {'X-Requested-With': 'XMLHttpRequest'},

  // parameter参数
  params: {
    tokenId: 1234
  },

  // post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
  data: {
    sessionId: 5678
  },

  // 设置超时时间
  timeout: 1000,

  // 返回数据类型
  responseType: 'json'
}

let state = {
  users: []
}

let getters = {
  getUsers (state) {
    return state.users
  }
}

let mutations = {
  setUsers (state, users) {
    state.users = users
  }
}

let actions = {
  listUser ({commit, state}) {
    axios.get('/users', config).then(function (res) {
      console.log(res.data)
      let retData = res.data
      commit('setUsers', retData.data)
    }).catch(function (err) {
      console.log('出错了3:' + err)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
