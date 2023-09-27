<template>
  <section class="banner">
    <img src="@/assets/images/project/banner.jpg" alt="" />
    <div class="banner__flex container">
      <div class="banner__title">
        <h2 class="banner__news">Our Project</h2>
        <nav class="banner__nav">
          <ul class="banner__ul">
            <li class="banner__li"><a href="#">Home</a></li>
            <li class="banner__li"><a href="#">Project</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </section>

  <section class="category">
    <div class="category__flex container">
      <div class="category__heading">
        <button
          class="tabs__right_btn"
          @click="currentTab = nameButton"
          v-for="nameButton in nameButtons"
          :key="nameButton.id"
        >
          {{ nameButton }}
        </button>
      </div>
      <component :is="changeTabs"></component>
    </div>
  </section>

  <section class="pagination">
    <div class="pagination__flex container">
      <img src="@/assets/images/blog/Pagination.png" alt="" />
    </div>
  </section>
</template>

<script>
import Bedroom from "@/components/Bedroom.vue";
import Kitchen from "@/components/Kitchen.vue";

export default {
  name: "Project",
  components: {
    Bedroom,
    Kitchen,
  },

  data() {
    return {
      nameButtons: ["Bedroom", "Kitchen"],
      currentTab: "Bedroom",
    };
  },

  mounted() {},

  methods: {},
  computed: {
    changeTabs() {
      return `${this.currentTab}`;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
