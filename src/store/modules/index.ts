import { homePageList, pratePageList, goPrateList, goInquiryPricesCityData, goInquiryPricesData, requestProvince, cityshiData, specificLocationData } from '../../server/user'
const state = {
  title: '',
  contDataList: {},
  prateDataList: [],
  goPrateDataLists: [],
  goInquiryPricesCityDatas: [],
  goInquiryPricesDataList: [],
  requestProvinceData: [],
  cityshiDataList: [],
  specificLocationDataList: []
}

const actions = {

  // Home 列表  所有车
  async pageList({ commit }: any, options: any) {
    let data = await homePageList()
    // console.log(data)
    let ListData: any = {};
    data.data.forEach((item: any) => {
      let key = item.Spelling.slice(0, 1);
      ListData[key] = [];
    })
    for (let key in ListData) {
      data.data.forEach((item: any) => {
        let i = item.Spelling.slice(0, 1);
        if (key == i) {
          ListData[key].push(item);
        }
      })
    }
    commit('contList', ListData)
  },

  // 获取所有的车型
  async prateList({ commit }: any, options: any) {
    let data = await pratePageList(options)
    commit('prateDataList', data.data)
  },

  // 跳转车辆详情
  async goPrate({ commit }: any, options: any) {
    let data = await goPrateList(options)
    // console.log(data, 'data........')
    commit('goPrateDataList', data.data)
    return data
  },

  //询问底价获取地理位置
  async goInquiryPricesCity({ commit }: any) {
    let data = await goInquiryPricesCityData()
    // console.log(data.data)
    commit('goInquiryPricesCitys', data.data)
  },

  // 询问底价商铺页面
  async goInquiryPricesDatas({ commit }: any, options: any) {
    let data = await goInquiryPricesData(options)
    data.data.list.forEach((item: any, ind: any) => {
      item.pitch = false
    })
    // console.log(data, ';;;;;;;;;;;;;;;;')
    commit('goInquiryPricesDataList', data.data)
  },

  //请求地址
  async requestPro({ commit }: any) {
    let data = await requestProvince()
    // console.log(data.data, 'sheng...')
    commit('ProvinceData', data.data)
  },

  // 请求市区
  async cityshi({ commit }: any, options: any) {
    let data = await cityshiData(options)
    // console.log(data)
    commit("citydata", data.data)
  },

  //重新获取具体位置
  async specificLocation({ commit }: any, options: any) {
    let data = await specificLocationData(options)
    console.log(data, options)
    commit('goInquiryPricesDataList', data.data)
  }
}

const mutations = {

  // Home 列表
  contList(state: any, actions: any) {
    // console.log(actions)
    state.contDataList = actions
  },

  // 获取所有的车型
  prateDataList(state: any, actions: any) {
    // console.log(actions)
    state.prateDataList = actions
  },

  // 跳转车辆详情
  goPrateDataList(state: any, actions: any) {
    state.goPrateDataLists = actions
    // console.log(actions)
  },

  //询问底价获取地理位置
  goInquiryPricesCitys(state: any, actions: any) {
    state.goInquiryPricesCityDatas = actions
  },

  // 询问底价商铺页面
  goInquiryPricesDataList(state: any, actions: any) {
    state.goInquiryPricesDataList = actions
    console.log(state.goInquiryPricesDataList, '117..................')
  },

  //请求地址
  ProvinceData(state: any, actions: any) {
    state.requestProvinceData = actions
  },

  // 市区数据
  citydata(state: any, actions: any) {
    state.cityshiDataList = actions
    // console.log(actions)
  },

  //重新获取具体位置
  // specificData(state: any, actions: any) {
  //   state.specificLocationDataList = actions
  // }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}