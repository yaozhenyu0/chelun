import { homePageList } from '../../server/user'
const state = {
  ListData: [],
  title: '',
}

const actions = {
  async pageList({ commit }: any, options: any) {
    let data = await homePageList()
    // console.log(data)
    commit('contList', data.data)


  }
}

const mutations = {
  contList(state: any, actions: any) {
    console.log(actions)
    let RightData: any = ['#']
    let Rights: any = []
    let leftData: any = []
    let contListData: any = []
    actions.forEach((item: any, index: any) => {
      // console.log(item.Spelling.substr(0, 1))
      let title = item.Spelling.substr(0, 1)
      RightData.push(title)
    })
    state.contListData = actions
    Rights = [... new Set(RightData)]
    state.RightData = Rights
    // console.log(Rights)
    // Rights.forEach((item: any, index: any) => {
    //   console.log(item)
    //   leftData.push({ name: item })
    //   console.log(leftData)
    //   actions.forEach((item: any, index: any) => {
    //     // console.log(item.Spelling.substr(0, 1))
    //     // let title = item.Spelling.substr(0, 1)
    //     // RightData.push(title)
    //     if (item.Spelling.substr(0, 1) == leftData.name) {
    //       console.log(1)
    //     } else {
    //       console.log(leftData.name)
    //     }
    //   })
    // })
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}