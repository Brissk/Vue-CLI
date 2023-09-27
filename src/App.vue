<template>
  <Header />
  <div>
    <router-view></router-view>
  </div>
  <Footer />
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  data() {
    return {};
  },
  computed: {},
};
</script>

<style lang="scss">
@import "@/assets/styles/style.css";
.tabs__btn {
  display: flex;
  justify-content: center;
  padding: 20px;
}
</style>
