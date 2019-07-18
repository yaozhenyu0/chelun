<template>
  <div class="wrap">
    <div class="wrap_title">全部颜色</div>
    <div class="wrap_year">
      <div class="wrap_year_box">
        <span
          :class="num == ind?'add_year_color':'wrap_year_box_span'"
          v-for="(item,key,ind) in allColorsDataList"
          :key="ind"
          @click="tabyear(ind)"
        >{{key}}</span>
      </div>
    </div>
    <div class="wrap_color">
      <div class="p" v-for="(item,ind) in allColorsDataList" :key="ind">
        <p v-for="(items,index) in item" :key="index" :v-if="index == num">
          <span class="wrap_color_x" :style="{background:items.Value}"></span>
          <span class="wrap_Name_x">{{items.Name}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {
      num: 0
    };
  },

  computed: {
    ...mapState({
      allColorsDataList: (state: any) => state.index.allColorsDataList
    })
  },
  methods: {
    tabyear(ind: any) {
      console.log(ind);
      this.num = ind;
    }
  }
});
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background: #f4f4f4;
  .wrap_title {
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color: #00afff;
    background: #fff;
    margin-bottom: 8px;
  }
  .wrap_year {
    width: 100%;
    height: 40px;
    background: #fff;
    margin-bottom: 8px;
    .wrap_year_box {
      width: 100%;
      height: 40px;
      overflow-x: auto;
      .wrap_year_box_span {
        padding: 0 1rem;
        line-height: 40px;
      }
      .add_year_color {
        padding: 0 1rem;
        line-height: 40px;
        color: #00afff;
      }
    }
  }
  .wrap_color {
    width: 100%;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    padding: 6px 0;
    justify-content: center;
    background: #fff;
    .p {
      width: 45%;
      height: auto;
      display: flex;
      border: 1px solid #3aacff;
      margin: 2% 2%;
      border-radius: 4px;
      align-items: center;
      .wrap_color_x {
        width: 18px;
        height: 18px;
        border: 1px solid #818181;
        margin: 8px;
      }
    }
  }
}
</style>
