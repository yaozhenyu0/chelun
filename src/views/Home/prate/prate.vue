<template>
  <div class="wrap">
    <div class="wrap_cont">
      <!--  v-for="(item,ind) in goPrateDataList" :key="ind"   -->
      <div class="wrap_cont_top">
        <div class="wrap_cont_top_img">
          <img :src="goPrateDataList.CoverPhoto" alt @click="allPhoto" />
          <span>{{goPrateDataList.pic_group_count}}张图片</span>
        </div>
      </div>
      <div class="wrap_cont_price">
        <div class="wrap_cont_price_left">
          <div class="wrap_cont_price_left_p">{{goPrateDataList.market_attribute.dealer_price}}</div>
          <div
            class="wrap_cont_price_left_z"
          >指导价 {{goPrateDataList.market_attribute.official_refer_price}}</div>
        </div>
        <div class="wrap_cont_price_btn">
          <button>询问底价</button>
        </div>
      </div>
      <div class="wrap_cont_t">
        <span>全部</span>
        <span>2019</span>
      </div>
      <div class="wrap_cont_engine">
        <p>3.0/250kw 涡轮增压</p>
      </div>
      <div class="wrap_cont_versions" v-for="(item,ind) in goPrateDataList.list" :key="ind">
        <div class="wrap_cont_versions_title">{{item.market_attribute.year}}款 {{item.car_name}}</div>
        <div class="wrap_cont_versions_cont">{{item.horse_power}}马力{{item.gear_num}}挡双离合</div>
        <div class="wrap_cont_versions_price">
          <div class="wrap_cont_versions_price_left"></div>
          <div class="wrap_cont_versions_price_right">
            <div
              class="wrap_cont_versions_price_right_l"
            >指导价 {{item.market_attribute.official_refer_price}}</div>
            <div class="wrap_cont_versions_price_right_r">{{item.market_attribute.dealer_price}}</div>
          </div>
        </div>
        <div class="wrap_cont_versions_inquiry" @click="goInquiryPrice(item)">询问低价</div>
      </div>
    </div>
    <div class="wrap_offers">
      <div class="wrap_offer_floor">询问底价</div>
      <div class="wrap_offer_floor_title">本地经销商为你报价</div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {};
  },
  created() {
    this.goInquiryPricesCity();
  },
  computed: {
    ...mapState({
      goPrateDataList: (state: any) => state.index.goPrateDataLists,
      goInquiryPricesCityDatas: (state: any) =>
        state.index.goInquiryPricesCityDatas
    })
  },
  methods: {
    ...mapActions("index", [
      "goInquiryPricesCity",
      "goInquiryPricesDatas",
      "requAllPhoto"
    ]),

    goInquiryPrice(item: any) {
      console.log(item);
      this.goInquiryPricesDatas({
        carId: item.car_id,
        cityId: this.goInquiryPricesCityDatas.CityID
      });
      this.$router.push({ path: `/inquiryPrice` });
    },
    allPhoto() {
      // console.log(1);
      this.requAllPhoto({
        SerialID: this.goPrateDataList.SerialID
      });
      this.$router.push({ path: `/allPhoto` });
    }
  }
});
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: auto;
}
.wrap_cont {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #f4f4f4;
  padding-bottom: 50px;
  .wrap_cont_top {
    width: 100%;
    height: 164px;
    position: relative;
    background: orangered;
    .wrap_cont_top_img {
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        background-size: 100%;
      }
      span {
        position: absolute;
        bottom: 8%;
        right: 4%;
        padding: 3px 8px;
        background: #333;
        border-radius: 20px;
        color: #f0f0f0;
        font-size: 12px;
      }
    }
  }
  .wrap_cont_price {
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    background: #fff;
    margin-bottom: 8px;
    .wrap_cont_price_left {
      width: 42%;
      margin-left: 3%;
      .wrap_cont_price_left_p {
        font-size: 18px;
        color: red;
      }
      .wrap_cont_price_left_z {
        font-size: 13px;
        color: #ccc;
      }
    }
    .wrap_cont_price_btn {
      width: 52%;
      button {
        width: 90%;
        height: 36px;
        margin-left: 5%;
        background: #00afff;
        border: 0;
        outline: none;
        border-radius: 6px;
        color: #fff;
        font-size: 16px;
      }
    }
  }
  .wrap_cont_t {
    width: 100%;
    height: 38px;
    display: flex;
    align-items: center;
    background: #fff;
    span {
      font-size: 16px;
      margin: 0 10px;
    }
  }
  .wrap_cont_engine {
    width: 100%;
    height: 25px;
    line-height: 25px;
    font-size: 12px;
    p {
      margin-left: 3%;
      color: #999;
    }
  }
  .wrap_cont_versions {
    width: 100%;
    height: 127px;
    background: #fff;
    margin-bottom: 10px;
  }
  .wrap_cont_versions_title {
    width: 94%;
    padding: 6px 0;
    margin-left: 3%;
    font-size: 15px;
    color: #555;
  }
  .wrap_cont_versions_cont {
    width: 94%;
    margin-left: 3%;
    font-size: 12px;
    color: #ccc;
  }
  .wrap_cont_versions_price {
    width: 100%;
    padding: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  .wrap_cont_versions_price_right {
    width: 62%;
    display: flex;
    align-items: center;
    margin-right: 3%;
    text-align: right;
    .wrap_cont_versions_price_right_l {
      font-size: 12px;
      color: #999;
      margin-right: 6px;
      text-align: right;
    }
    .wrap_cont_versions_price_right_r {
      color: red;
      text-align: right;
    }
  }
  .wrap_cont_versions_inquiry {
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    border-top: 1px solid #f0f0f0;
    color: #00afff;
  }
}
.wrap_offers {
  width: 100%;
  height: 50px;
  background: #00afff;
  color: #fff;
  position: fixed;
  bottom: 0;
  left: 0;
  text-align: center;
  .wrap_offer_floor {
    padding-top: 6px;
  }
  .wrap_offer_floor_title {
    font-size: 12px;
  }
}
</style>
