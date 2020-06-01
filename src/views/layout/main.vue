<template>
  <div>
    <v-header></v-header>
    <div class="page">
      <transition name="main" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import vHeader from "./header";
import vFooter from "./footer";
export default {
  components: {
    "v-header": vHeader,
    "v-footer": vFooter
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.page{
  padding-top:85px
}
</style>