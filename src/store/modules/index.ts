import { homePageList } from '../../server/user'
const state = {

}

const actions = {
  async pageList({ commit }, options) {
    let data = await homePageList()
    console.log(data)
  }
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}