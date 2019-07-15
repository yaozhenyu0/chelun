<template>
  <div class="right">
    <div class="rightList">
      <ul v-for="(item,index) in RightDatas" :key="index">
        <li>{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";
export default Vue.extend({
  data() {
    return {};
  },
  computed: {
    ...mapState({
      RightDatas: (state: any) => state.index.RightData
    })
  },
  created() {
    console.log(this);
  },
  methods: {}
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.rightList {
  width: 5%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 16%;
  ul {
    display: flex;
    flex-direction: column;
    li {
      text-align: center;
      font-size: 14px;
      line-height: 20px;
    }
  }
}
</style>
