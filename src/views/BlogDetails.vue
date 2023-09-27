<template>
  <section class="tabs">
    <div class="tabs__flex container">
      <div class="tabs__left">
        <component :is="changeTabs"></component>
      </div>
      <div class="tabs__right">
        <h2 class="tabs__right_heading">Tabs</h2>
        <div>
          <button
            class="tabs__right_btn"
            @click="currentTab = nameButton"
            v-for="nameButton in nameButtons"
            :key="nameButton.id"
          >
            {{ nameButton }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import KitchenComp from "@/components/KitchenComp.vue";
import BedroomComp from "@/components/BedroomComp.vue";

export default {
  name: "BlogDetails",
  props: {},
  data() {
    return {
      nameButtons: [
        "Kitchen",
        "Bedroom",
        "Kitchen",
        "Bedroom",
        "Kitchen",
        "Bedroom",
      ],
      currentTab: "Kitchen",
    };
  },
  components: {
    KitchenComp,
    BedroomComp,
  },
  computed: {
    changeTabs() {
      return `${this.currentTab}Comp`;
    },
  },
};
</script>
