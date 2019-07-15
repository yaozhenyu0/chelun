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