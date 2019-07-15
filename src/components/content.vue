<template>
  <div class="content">
    <div class="contList" v-for="(item,index) in contListDatas" :key="index">
      <dl>
        <dt>
          <img :src="item.CoverPhoto.split(':')[1]" alt />
        </dt>
        <dd>{{item.Name}}</dd>
      </dl>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { mapState, mapActions } from "vuex";

export default Vue.extend({
  data() {
    return {
      home: "6666",
      contListData: []
    };
  },
  // onShow() {},
  computed: {
    ...mapState({
      contListDatas: (state: any) => state.index.contListData
    })
  },
  created() {
    console.log(this);
    this.pageList();
  },
  methods: {
    ...mapActions("index", ["pageList"])
  }
});
// }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.content {
  width: 100%;
  height: 100%;
}
.contList {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  h3 {
    width: 100%;
    height: 30px;
    background: #ccc;
    text-indent: 1rem;
    line-height: 30px;
  }
}
.contList dl {
  width: 90%;
  height: 50px;
  margin-left: 5%;
  border-bottom: 1px solid#333;
  display: flex;
  align-items: center;
}
.contList dl dt {
  width: 44.15px;
  height: 44.15px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
