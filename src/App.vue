<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/"></router-link>
      <router-link to="/about"></router-link>
    </div>
    <router-view />-->

    <Home></Home>
  </div>
</template>
<script lang="ts">
import request from "./utils/request";
import { mapState, mapActions } from "vuex";
import { Component, Vue } from "vue-property-decorator";
import Home from "@/views/Home/Home.vue";
@Component({
  components: {
    Home
  }
})
export default class Content extends Vue {}
</script>


<style lang="scss">
* {
  padding: 0;
  margin: 0;
  list-style: none;
  text-decoration: none;
  outline: none;
}
body,
html,
#app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
