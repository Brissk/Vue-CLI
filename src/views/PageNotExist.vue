<template>
  <section class="project_d">
    <div class="error">
      <p>Page Not Found</p>
      <p>Error 404</p>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectDetails",
  props: {},
  data() {
    return {};
  },
  components: {},
  computed: {},
};
</script>

<style scoped>
.error {
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
p {
  font-size: 72px;
}
</style>
