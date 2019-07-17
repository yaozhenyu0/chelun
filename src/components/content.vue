<template>
  <div class="content">
    <div class="contList" v-for="(item,key,index) in contListDatas" :key="index">
      <h3>{{key}}</h3>
      <div v-for="(items,inde) in item" :key="inde">
        <dl @click="ContList(items)">
          <dt>
            <img :src="items.CoverPhoto.split(':')[1]" alt />
          </dt>
          <dd>{{items.Name}}</dd>
        </dl>
      </div>
    </div>
    <div :class="hideFlag ? 'hideFlag':'prateList'" :v-if="hideFlag">
      <div class="prateList_con" v-for="(item,index) in prateDataLists" :key="index">
        <h3 @click="onhidden">{{item.GroupName}}</h3>
        <dl v-for="(items,ind) in item.GroupList" :key="ind" @click="gotoPrate(items)">
          <dt>
            <img :src="items.Picture.split(':')[1]" alt />
          </dt>
          <dd>
            <p class="AliasName">{{items.AliasName}}</p>
            <p class="DealerPrice">{{items.DealerPrice}}</p>
          </dd>
        </dl>
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
      home: "6666",
      contListData: [],
      hideFlag: true
    };
  },
  // onShow() {},
  computed: {
    ...mapState({
      contListDatas: (state: any) => state.index.contDataList,
      prateDataLists: (state: any) => state.index.prateDataList
    })
  },
  created() {
    console.log(this);
    this.pageList();
  },
  methods: {
    ...mapActions("index", ["pageList", "prateList", "goPrate"]),
    ContList(items: any) {
      console.log(items);
      this.hideFlag = false;
      this.prateList({
        MasterID: items.MasterID,
        _1563244629855: null
      });
    },
    onhidden() {
      this.hideFlag = !this.hideFlag;
      console.log(this.hideFlag);
    },
    // 跳详情
    gotoPrate(items: any) {
      console.log(items);
      this.goPrate({
        SerialID: items.SerialID,
        _1563244629855: null
      }).then((res: any) => {
        if (res.code == 1) {
          this.$router.push({ path: `/prate` });
        }
      });
    }
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
    background: #f0f0f0;
    text-indent: 1rem;
    line-height: 30px;
  }
}
.contList {
  // dl:last-child {
  //   border-bottom: 0;
  // }
  dl {
    width: 90%;
    height: 50px;
    margin-left: 5%;
    border-bottom: 1px solid#f0f0f0;
    display: flex;
    align-items: center;
    dd {
      margin-left: 30px;
    }
  }
}
.contList dl dt {
  width: 44.15px;
  height: 44.15px;
  img {
    width: 100%;
    height: 100%;
  }
}
.prateListHide {
  display: none;
}
.prateList {
  width: 68%;
  height: 100%;
  position: fixed;
  right: 0;
  top: 0;
  background: #fff;
  display: flex;
  flex-direction: column;
  z-index: 111;
  .prateList_con {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    overflow: auto;
    h3 {
      width: 100%;
      height: 36px;
      background: #f0f0f0;
      text-indent: 1rem;
      line-height: 36px;
    }
    dl {
      width: 100%;
      height: 67px;
      display: flex;
      align-items: center;
      border-bottom: 1px solid #ccc;
      padding: 15px 0;
      dt {
        width: 100px;
        height: 67px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      dd {
        margin-left: 10px;
        .AliasName {
          font-size: 18px;
          color: #ccc;
          margin: 10px 0;
        }
        .DealerPrice {
          font-size: 16px;
          color: red;
          margin: 10px 0;
        }
      }
    }
  }
}
</style>
