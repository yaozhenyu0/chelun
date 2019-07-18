import request from '../utils/request'
//获取首页数据
export function homePageList() {
  return request({
    url: "/v2-car-getMasterBrandList.html",
    method: "GET",
    data: {
      _1563178933183: ""
    }
  });
}

// 车型数据
export function pratePageList(options: any) {
  return request.get(`http://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${options.MasterID}&_1563244629855=${options._1563244629855}`)
}

// 跳转车辆详情
export function goPrateList(options: any) {
  return request.get(`http://baojia.chelun.com/v2-car-getInfoAndListById.html?SerialID=${options.SerialID}&_1563281918512=${options._1563244629855}`)
}

// 询问底价获取地理位置
export function goInquiryPricesCityData() {
  return request.get(`http://baojia.chelun.com/location-client.html`)
}

// 询问底价商铺页面
export function goInquiryPricesData(options: any) {
  return request.get(`http://baojia.chelun.com/v2-dealer-alllist.html?carId=${options.carId}&cityId=${options.cityId}`)
}

//获取省地址
export function requestProvince() {
  return request.get(`http://baojia.chelun.com/v1-city-alllist.html`)
}

//获取市区
export function cityshiData(options: any) {
  return request.get(`http://baojia.chelun.com/v1-city-alllist.html?provinceid=${options.provinceid}`)
}

//重新获取具体位置
export function specificLocationData(options: any) {
  return request.get(`http://baojia.chelun.com/v2-dealer-alllist.html?carId=${options.carId}&cityId=${options.cityId}`)
}

// 获取车型所有图片
export function requAllPhotoList(options: any) {
  return request.get(`http://baojia.chelun.com/v2-car-getImageList.html?SerialID=${options.SerialID}`)
}

// 获取 外观 内饰 空间等图片
export function allImgsList(options: any) {
  return request.get(`http://baojia.chelun.com/v2-car-getCategoryImageList.html?SerialID=${options.SerialID}&ImageID=${options.ImageID}&Page=${options.Page}&PageSize=${options.PageSize}`)
}

// 获取所有颜色
export function allColorsList(options: any) {
  return request.get(`http://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID=${options.SerialID}`)
}