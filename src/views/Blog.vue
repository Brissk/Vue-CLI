<template>
  <section class="banner">
    <img src="@/assets/images/blog/banner.jpg" alt="" />
    <div class="banner__flex container">
      <div class="banner__title">
        <h2 class="banner__news">Articles & News</h2>
        <nav class="banner__nav">
          <ul class="banner__ul">
            <li class="banner__li"><a href="#">Home</a></li>
            <li class="banner__li"><a href="#">Blog</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </section>

  <section class="post">
    <div class="post__flex container">
      <h2 class="post__title">Latest Post</h2>
      <div class="post__article">
        <div class="post__article_image">
          <img src="@/assets/images/blog/article.png" alt="" />
        </div>
        <div class="post__article_text">
          <div class="post__article_text_top">
            <h3>Low Cost Latest Invented Interior Designing Ideas</h3>
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
              dignissim maximus.posuere in.Contrary to popular belief.
            </p>
            <p>
              Lorem Ipsum is not simply random text. It has roots in a piece of
              classica.
            </p>
          </div>
          <div class="post__article_text_bottom">
            <div class="post__article_text_bottom_1">26 December,2022</div>
            <div><i class="fa-solid fa-chevron-right"></i></div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="news">
    <div class="news__flex container">
      <article v-for="elem in listOfNews" :key="elem.id" class="news__product">
        <a class="news__product_link" href="#">
          <img class="news__image" :src="elem.image" :alt="elem.notice" />
          <div class="news__notice">
            <p>{{ elem.notice }}</p>
          </div>
          <div class="news__content">
            <div class="news__content_text">
              <p class="news__content_text_1">{{ elem.title }}</p>
            </div>
            <div class="news__content_arrow">
              <p class="news__content_text_2">{{ elem.date }}</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </a>
      </article>
    </div>
  </section>

  <section class="pagination">
    <div class="pagination__flex container">
      <img src="@/assets/images/blog/Pagination.png" alt="" />
    </div>
  </section>
</template>

  <script>
export default {
  name: "Blog",

  data() {
    return {
      listOfNews: [
        {
          id: Date.now(),
          image: require("@/assets/images/blog/news-1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          notice: "Kitchen Design",
          date: "26 December,2022",
        },
        {
          id: Date.now(),
          image: require("@/assets/images/blog/news-2.png"),
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          notice: "Living Design",
          date: "26 December,2022",
        },
        {
          id: Date.now(),
          image: require("@/assets/images/blog/news-3.png"),
          title: "Best For Any Office & Business Interior Solution",
          notice: "Interior Design",
          date: "26 December,2022",
        },
        {
          id: Date.now(),
          image: require("@/assets/images/blog/news-4.png"),
          title: "Let’s Get Solution For Building Construction Work",
          notice: "Kitchen Design",
          date: "26 December,2022",
        },
        {
          id: Date.now(),
          image: require("@/assets/images/blog/news-5.png"),
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          notice: "Living Design",
          date: "26 December,2022",
        },
        {
          id: Date.now(),
          image: require("@/assets/images/blog/news-6.png"),
          title: "Best For Any Office & Business Interior Solution",
          notice: "Interior Design",
          date: "26 December,2022",
        },
      ],
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>
