
<template>
  <main>
    <main-navbar
    :color-on-scroll="400"
    >
    </main-navbar>
    <div class="wrapper">
      <RouterView></RouterView>
    </div>
    <main-footer
      :backgroundColor="'black'"
      >
    </main-footer>
  </main>
</template>

<script>
import Vue from 'vue';
import MainNavbar from "./User/MainNavbar.vue";
import MainFooter from "./User/MainFooter.vue";
import NowUiKit from '../plugins/now-ui-kit';

Vue.use(NowUiKit);

export default {
  components: {
    MainNavbar,
    MainFooter,
  },
}
</script>
