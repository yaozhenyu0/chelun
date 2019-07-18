<template>
  <div class="wrap">
    <div class="wrap_title">
      <span>可以向多个商家咨询最低价，商家及时回复</span>
      <span class="wrap_title_icon">♩</span>
    </div>
    <div class="wrap_show">
      <div class="wrap_show_img">
        <img :src="goInquiryPricesDataList.details.serial.Picture" alt />
      </div>
      <div class="wrap_show_name">
        <p class="wrap_show_name_title">{{goInquiryPricesDataList.details.serial.AliasName}}</p>
        <p>{{goInquiryPricesDataList.details.market_attribute.year}}款 {{goInquiryPricesDataList.details.car_name}}</p>
      </div>
      <div class="wrap_show_arrows">></div>
    </div>
    <div class="wrap_message">
      <p class="wrap_message_g">个人信息</p>
      <p class="wrap_message_name">
        <span>姓名：</span>
        <input type="text" style="direction: rtl;" placeholder="请输入你的真实中文姓名" />
      </p>
      <p class="wrap_message_phone">
        <span>手机：</span>
        <input type="text" style="direction: rtl;" placeholder="请输入你的真实手机号码" />
      </p>
      <p class="wrap_message_city">
        <span>城市：</span>
        <span @click="requCity">
          <span>{{city}}</span>
          <span class="wrap_message_city_j">></span>
        </span>
      </p>
      <p class="wrap_message_btn">
        <span>询最低价</span>
      </p>
    </div>
    <p>选择报价经销商</p>
    <div class="wrap_dealer">
      <div class="wrap_dealer_con" v-for="(item,ind) in goInquiryPricesDataList.list" :key="ind">
        <div class="wrap_dealer_con_l" @click="wrapPitch(item)">
          <div :class="item.pitch?'addPitch':'wrap_dealer_con_l_y'">✔</div>
        </div>
        <div class="wrap_dealer_con_r">
          <p>
            <span class="wrap_dealer_con_r_title">{{item.dealerShortName}}</span>
            <span class="wrap_dealer_con_r_c">{{item.promotePrice}}万</span>
          </p>
          <p>
            <span class="wrap_dealer_con_r_address">{{item.address}}</span>
            <span>售{{item.saleRange}}</span>
          </p>
        </div>
      </div>
      <p>根据您所在城市，同时为您匹配附近优质经销商，货比三家，才有好价</p>
      <div
        class="wrap_dealer_con"
        v-for="(item,index) in goInquiryPricesDataList.nearbys"
        :key="index"
      >
        <div class="wrap_dealer_con_l" @click="wrapPitchs(item)">
          <div :class="item.pitch?'addPitch':'wrap_dealer_con_l_y'">✔</div>
        </div>
        <div class="wrap_dealer_con_r">
          <p>
            <span class="wrap_dealer_con_r_title">{{item.dealerShortName}}</span>
            <span class="wrap_dealer_con_r_c">{{item.promotePrice}}万</span>
          </p>
          <p>
            <span class="wrap_dealer_con_r_address">{{item.address}}</span>
            <span>售{{item.saleRange}}</span>
          </p>
        </div>
      </div>
    </div>
    <div v-if="cut" class="province">
      <p class="location">自动定位</p>
      <p class="d_name">北京</p>
      <p class="location">省份</p>
      <p
        class="province_name"
        v-for="(item,ind) in requestProvinceData"
        :key="ind"
        @click="cityShi(item)"
      >
        <span class="cityName">{{item.CityName}}</span>
        <span class="jt">></span>
      </p>
    </div>
    <div v-if="action" class="locationCity">
      <div @click="maskHid" class="locationCity_mask"></div>
      <div class="locationCity_list">
        <p v-for="(item,ind) in cityshiDataList" :key="ind" @click="close(item)">{{item.CityName}}</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {
      city: "",
      num: 0,
      cut: false,
      flag: false,
      action: false,
      InquiryData: []
    };
  },
  created() {
    // console.log(this.cut);
    this.city = this.goInquiryPricesCityDatas.CityName;
  },
  computed: {
    ...mapState({
      goInquiryPricesDataList: (state: any) =>
        state.index.goInquiryPricesDataList,
      goInquiryPricesCityDatas: (state: any) =>
        state.index.goInquiryPricesCityDatas,
      requestProvinceData: (state: any) => state.index.requestProvinceData,
      cityshiDataList: (state: any) => state.index.cityshiDataList
    })
  },
  methods: {
    ...mapActions("index", ["requestPro", "cityshi", "specificLocation"]),
    // 选中
    wrapPitch(item: any) {
      item.pitch = !item.pitch;
      // console.log(this.goInquiryPricesDataList, item);
    },
    // 选中
    wrapPitchs(item: any) {
      item.pitch = !item.pitch;
      console.log(this.goInquiryPricesDataList, item);
    },
    // 地址
    requCity() {
      this.cut = !this.cut;
      this.requestPro();
    },
    cityShi(item: any) {
      this.action = true;
      this.cityshi({ provinceid: item.CityID });
    },
    //隐藏市区
    maskHid() {
      this.action = false;
      // console.log(this.action);
    },
    //关闭省市
    close(item: any) {
      this.action = false;
      this.cut = false;
      this.city = item.CityName;
      this.flag = true;
      console.log(item);
      this.specificLocation({
        carId: this.goInquiryPricesDataList.details.car_id,
        cityId: item.CityID
      });
    }

    // this.$router.push({ path: `/inquiryPrice` });
  }
});
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  .wrap_title {
    width: 100%;
    height: 30px;
    background: #79cd92;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    .wrap_title_icon {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      border: 1px solid #fff;
      margin-left: 5px;
      font-size: 12px;
      text-align: center;
      line-height: 15px;
    }
  }
  .wrap_show {
    width: 94%;
    height: 100px;
    margin-left: 3%;
    display: flex;
    padding: 8px 0 5px 0;
    align-items: center;
    justify-content: space-between;
    .wrap_show_img {
      width: 115px;
      height: 76px;
      margin-right: 3%;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .wrap_show_name {
      .wrap_show_name_title {
        font-size: 18px;
        padding-bottom: 6px;
        margin-top: -10px;
      }
    }
    .wrap_show_arrows {
      font-size: 24px;
      line-height: 100px;
      color: #ccc;
    }
  }
  .wrap_message {
    width: 100%;
    height: auto;
    .wrap_message_g {
      width: 100%;
      height: 25px;
      text-indent: 3%;
      background: #eee;
      line-height: 25px;
      font-size: 12px;
      color: #666;
    }
    .wrap_message_name {
      width: 94%;
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 3%;
      border-bottom: 1px solid hsl(0, 12%, 94%);
      input {
        width: 80%;
        height: 40px;
        border: 0;
        font-size: 15px;
      }
    }
    .wrap_message_phone {
      width: 94%;
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 3%;
      border-bottom: 1px solid hsl(0, 12%, 94%);
      input {
        width: 80%;
        height: 40px;
        border: 0;
        font-size: 15px;
      }
    }
    .wrap_message_city {
      width: 94%;
      height: 44px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 3%;
      border-bottom: 1px solid hsl(0, 12%, 94%);
      .wrap_message_city_j {
        color: #ccc;
      }
    }
    .wrap_message_btn {
      width: 100%;
      height: auto;
      display: flex;
      padding: 14px 0;
      span {
        width: 80%;
        height: 35px;
        background: #3aacff;
        border-radius: 4px;
        margin-left: 10%;
        text-align: center;
        line-height: 35px;
        color: #fff;
      }
    }
  }
  > p {
    height: 25px;
    text-indent: 3%;
    color: #666;
    font-size: 12px;
    background: #eee;
    line-height: 25px;
  }
  .wrap_dealer {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    .wrap_dealer_con {
      width: 94%;
      height: 82.5px;
      margin-left: 3%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid rgb(238, 235, 235);
      .wrap_dealer_con_l_y {
        width: 12px;
        height: 12px;
        border-radius: 50%;
        border: 2px solid #ccc;
        color: #fff;
        text-align: center;
        line-height: 14px;
        font-size: 12px;
      }
      .addPitch {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        color: #fff;
        text-align: center;
        line-height: 18px;
        font-size: 12px;
        background: #3aacff;
      }
      .wrap_dealer_con_r {
        flex: 1;
        p {
          display: flex;
          justify-content: space-between;
          margin-left: 3%;
          font-size: 12px;
          color: #a2a2a2;
          margin-bottom: 4px;
          .wrap_dealer_con_r_title {
            font-size: 15px;
            color: #666;
          }
          .wrap_dealer_con_r_c {
            color: red;
          }
          .wrap_dealer_con_r_address {
            width: 70%;
          }
        }
      }
    }
    > p {
      font-size: 10px;
      width: 94%;
      margin-left: 3%;
      border-bottom: 1px solid rgb(238, 235, 235);
      padding: 8px 0;
    }
  }
  .province {
    width: 100%;
    height: auto;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: #fff;
    overflow: auto;
    .location {
      width: 100%;
      height: 20px;
      text-indent: 3%;
      font-size: 12px;
      background: #a2a2a2;
      line-height: 20px;
    }
    .d_name {
      width: 100%;
      height: 40px;
      text-indent: 6%;
      line-height: 40px;
    }
    .province_name {
      width: 100%;
      height: 40px;
      border-bottom: 1px solid rgb(241, 241, 241);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .cityName {
      margin-left: 6%;
    }
    .jt {
      margin-right: 6%;
    }
  }
  .locationCity {
    width: 100%;
    height: 100%;
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    .locationCity_mask {
      width: 30%;
      height: auto;
      background: rgba(0, 0, 0, 0.6);
    }
    .locationCity_list {
      width: 75%;
      height: auto;
      background: #fff;
      z-index: 102;
      overflow: auto;
      p {
        width: 100%;
        height: 40px;
        text-indent: 5%;
        border-bottom: 1px solid rgb(241, 241, 241);
        line-height: 40px;
        font-size: 15px;
      }
    }
  }
}
</style>
