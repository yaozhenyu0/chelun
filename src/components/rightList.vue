<template>
  <div class="right">
    <div class="rightList">
      <ul @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
        <li v-for="(item,key,index) in contListDatas" :key="index">{{key}}</li>
      </ul>
      <span v-if="isTouch" class="letter">{{current}}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {
      current: "",
      isTouch: false
    };
  },
  computed: {
    ...mapState({
      contListDatas: (state: any) => state.index.contDataList
    })
  },
  created() {
    console.log(this);
  },
  methods: {
    touchStart(e: Event): void {
      this.isTouch = true;
    },
    touchMove(e: Event): void {
      // console.log(e, ".........");
      let arr = Object.keys(this.contListDatas);
      let pageY = e.touches[0].pageY;
      console.log(pageY, "pageY.....");
      let letterHeight = (32 * window.innerWidth) / 750;
      console.log(letterHeight, "letterHeight.....");
      let letterOffsetTop =
        (window.innerHeight - letterHeight * arr.length) / 2;
      console.log(letterOffsetTop, "letterOffsetTop.....");

      let letterIndex = Math.floor((pageY - letterOffsetTop) / letterHeight);
      console.log(letterIndex, "letterIndex.....");

      // 处理上边界
      if (letterIndex < 0) {
        letterIndex = 0;
      }
      // 处理下边界
      if (letterIndex > arr.length - 1) {
        letterIndex = arr.length - 1;
      }
      console.log(arr[letterIndex]);
      this.current = arr[letterIndex];
    },
    touchEnd(e: Event): void {
      this.isTouch = false;
      this.current = "";
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rightList {
  width: 5%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 101;
  ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    li {
      width: 20px;
      text-align: center;
      font-size: 14px;
      line-height: 26px;
      padding: 0 6px;
    }
  }
  .letter {
    display: inline-block;
    width: 3.6rem;
    height: 3.6rem;
    background: rgba(0, 0, 0, 0.6);
    border-radius: 0.1rem;
    top: 50%;
    left: 50%;
    position: fixed;
    color: #fff;
    font-size: 1.8rem;
    text-align: center;
    line-height: 3.6rem;
    transform: translate3d(-50%, -50%, 0);
  }
}
</style>
