import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    listData: []
  },
  mutations: {
    addData(state, data) {
      state.listData.push(data)
    },
    updateData(state, data) {
      state.listData[data.id].nik = data.nik
      state.listData[data.id].nama = data.nama
      state.listData[data.id].email = data.email
      state.listData[data.id].telp = data.telp
    },
    deleteData(state, idx) {
      state.listData.splice(idx, 1);
    }
  },
  actions: {
    addData(context, data) {
      context.commit('addData', data)
    },
    updateData(context, data) {
      context.commit('updateData', data)
    },
    deleteData(context, idx) {
      context.commit('deleteData', idx)
    }
  },
})
