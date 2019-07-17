<template>
  <div class="home">
    <Content></Content>
    <RightsList></RightsList>
  </div>
</template>

<script lang="ts">
import Content from "@/components/content.vue";
import RightsList from "@/components/rightList.vue";
import { Component, Prop, Vue } from "vue-property-decorator";
console.log(RightsList);
@Component({
  components: {
    Content,
    RightsList
  }
})
export default class Home extends Vue {
  @Prop() private msg!: string;
}
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
}
</style>
