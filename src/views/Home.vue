<template>
  <main class="main">
    <div class="main__flex container">
      <div class="main__content">
        <img class="main__image" src="@/assets/images/index/Photo.jpg" alt="" />
      </div>
      <div class="main__content_absolute">
        <h1 class="main__header">Let Your Home Be Unique</h1>
        <p class="main__text">
          There are many variations of the passages of lorem Ipsum
          fromavailable, majority.
        </p>
        <button class="main__button">
          Get Started
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  </main>
  <section class="project">
    <div class="project__flex container">
      <h2 class="project__heading">Follow Our Projects</h2>
      <p class="project__text">
        It is a long established fact that a reader will be distracted by the of
        readable content of page lookings at its layouts points.
      </p>
    </div>
  </section>
  <Items />
  <Content />
  <section class="project">
    <div class="project__flex container">
      <h2 class="project__heading">Articles & News</h2>
      <p class="project__text">
        It is a long established fact that a reader will be distracted by the of
        readable content of a page when lookings at its layouts the points of
        using.
      </p>
    </div>
  </section>

  <section class="blog">
    <div class="blog__flex container">
      <article class="blog__product product_5">
        <a class="blog__product_link" href="#">
          <img
            class="blog__image blog__image-5"
            src="@/assets/images/index/Photo-5.png"
            alt=""
          />
          <div class="blog__notice">
            <p>Kitchen Design</p>
          </div>
          <div class="blog__content">
            <div class="blog__content_text">
              <p class="blog__content_text_1">
                Let’s Get Solution For Building Construction Work
              </p>
            </div>
            <div class="blog__content_arrow">
              <p class="blog__content_text_2">26 December,2022</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </a>
      </article>
      <article class="blog__product product_6">
        <a class="blog__product_link" href="#">
          <img
            class="blog__image blog__image-6"
            src="@/assets/images/index/Photo-6.png"
            alt=""
          />
          <div class="blog__notice">
            <p>Living Design</p>
          </div>
          <div class="blog__content">
            <div class="blog__content_text">
              <p class="blog__content_text_1">
                Low Cost Latest Invented Interior Designing Ideas.
              </p>
            </div>
            <div class="blog__content_arrow">
              <p class="blog__content_text_2">22 December,2022</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </a>
      </article>
      <article class="blog__product product_7">
        <a class="blog__product_link" href="#">
          <img
            class="blog__image blog__image-7"
            src="@/assets/images/index/Photo-7.png"
            alt=""
          />
          <div class="blog__notice">
            <p>Interior Design</p>
          </div>
          <div class="blog__content">
            <div class="blog__content_text">
              <p class="blog__content_text_1">
                Best For Any Office & Business Interior Solution
              </p>
            </div>
            <div class="blog__content_arrow">
              <p class="blog__content_text_2">25 December,2022</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </a>
      </article>
    </div>
  </section>
</template>

<script>
import Content from "@/components/Content.vue";
import Items from "@/components/Items.vue";

export default {
  name: "Home",
  components: {
    Content,
    Items,
  },

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
