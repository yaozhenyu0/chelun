<template>
  <div class="wrap">
    <div class="wrap_top" v-if="canceol" @click="selectColor"></div>
    <div class="wrapbox" v-if="bigImg">
      <div class="wrap_big" v-if="showFlag">
        <div class="header">
          <span class="header_color" @click="allColor">颜色 ∨</span>
          <span class="header_s">|</span>
          <span class="header_cer">车款 ∨</span>
        </div>
        <div class="mainImg">
          <div class="mainImg_con">
            <div class="mainImg_con_w" v-for="(item,ind) in requAllPhotoDataList" :key="ind">
              <p @click="allImage(item)">
                <span>{{item.Name}}</span>
                <span>{{item.Count}} 张 ></span>
              </p>
              <img
                v-for="(imgurl,index) in item.List"
                :key="index"
                :src="imgurl.Url.split('{')[0]+'3'+imgurl.Url.split('{')[1].split('}')[1]"
                alt
              />
            </div>
          </div>
        </div>
        <div class="footer"></div>
      </div>
      <div class="wrap_img" v-if="hideFiag">
        <div class="wrap_img_all">
          <img
            v-for="(item,ind) in allImgsDataList.List"
            :key="ind"
            :src="item.Url.split('{')[0]+'3'+item.Url.split('{')[1].split('}')[1]"
            alt
          />
        </div>
      </div>
    </div>
    <Color v-if="color"></Color>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapState, mapActions } from "vuex";
import Color from "@/components/color.vue";
console.log(Color);
export default Vue.extend({
  components: {
    Color
  },
  data() {
    return {
      showFlag: true,
      hideFiag: false,
      bigImg: true,
      color: false,
      canceol: false
    };
  },
  created() {},
  methods: {
    ...mapActions("index", ["allImgs", "allColors"]),
    allImage(item: any) {
      console.log(this.goPrateDataLists.SerialID);
      //   console.log(item);
      this.allImgs({
        SerialID: this.goPrateDataLists.SerialID,
        ImageID: item.Id,
        Page: 1,
        PageSize: 30
      });
      this.showFlag = false;
      this.hideFiag = true;
    },
    allColor() {
      this.canceol = true;
      this.color = true;
      this.bigImg = false;
      this.allColors({
        SerialID: this.goPrateDataLists.SerialID
      });
    },
    selectColor() {
      console.log(1);
      this.bigImg = true;
      this.color = false;
      this.canceol = false;
    }
  },

  computed: {
    ...mapState({
      requAllPhotoDataList: (state: any) => state.index.requAllPhotoDataList,
      goPrateDataLists: (state: any) => state.index.goPrateDataLists,
      allImgsDataList: (state: any) => state.index.allImgsDataList
    })
  }
});
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .wrap_top {
    width: 100%;
    height: 30px;
    background: rgba($color: #fff, $alpha: 0);
    position: fixed;
    top: 0;
    left: 0;
  }
  .header {
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f0f0f0;
    border-bottom: 5px solid #eee;
    .header_color {
      width: 49%;
      text-align: center;
    }
    .header_cer {
      width: 49%;
      text-align: center;
    }
    .header_s {
      font-size: 15px;
      color: #ccc;
    }
  }
  .mainImg {
    width: 100%;
    flex: 1;
    overflow: auto;
    .mainImg_con {
      width: 100%;
      height: auto;
      .mainImg_con_w {
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        position: relative;
        margin-bottom: 10px;
        > p {
          position: absolute;
          left: 0.666%;
          top: 0.666%;
          width: 32%;
          height: 120px;
          background: rgba(56, 90, 130, 0.5);
          color: #f0f0f0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 20;
        }
        > img {
          width: 32%;
          height: 120px;
          margin: 0.666%;
          background-size: cover;
        }
      }
    }
  }
  .footer {
    width: 100%;
    height: 15px;
    background: #f0f0f0;
  }
  .wrap_img {
    width: 100%;
    height: 100%;
    .wrap_img_all {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
      img {
        width: 32%;
        height: 120px;
        background: cover;
        margin: 0.666%;
        background-size: auto;
      }
    }
  }
}
</style>
