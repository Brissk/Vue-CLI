<template>
  <section class="items">
    <div class="items__flex container">
      <div class="items__product product_1">
        <a class="items__product_link" href="#">
          <img
            class="items__image items__image-1"
            src="@/assets/images/index/Photo-1.png"
            alt=""
          />
          <div class="items__content">
            <div class="items__content_text">
              <p class="items__content_text_1">Modern Kitchan</p>
              <p class="items__content_text_2">Decor / Artchitecture</p>
            </div>
            <div class="items__content_arrow">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </a>
        <div class="items__product_box scale-in-center">
          <a href="cart.html">
            <img src="@/assets/images/cart-add.svg" alt="" />
            <p>Add to cart</p>
          </a>
        </div>
      </div>
      <div class="items__product product_2">
        <a class="items__product_link" href="#">
          <img
            class="items__image items__image-2"
            src="@/assets/images/index/Photo-2.png"
            alt=""
          />
          <div class="items__content">
            <div class="items__content_text">
              <p class="items__content_text_1">Modern Kitchan</p>
              <p class="items__content_text_2">Decor / Artchitecture</p>
            </div>
            <div class="items__content_arrow">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </a>
        <div class="items__product_box scale-in-center">
          <a href="cart.html">
            <img src="@/assets/images/cart-add.svg" alt="" />
            <p>Add to cart</p>
          </a>
        </div>
      </div>
      <div class="items__product product_3">
        <a class="items__product_link" href="#">
          <img
            class="items__image items__image-3"
            src="@/assets/images/index/Photo-3.png"
            alt=""
          />
          <div class="items__content">
            <div class="items__content_text">
              <p class="items__content_text_1">Modern Kitchan</p>
              <p class="items__content_text_2">Decor / Artchitecture</p>
            </div>
            <div class="items__content_arrow">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </a>
        <div class="items__product_box scale-in-center">
          <a href="cart.html">
            <img src="@/assets/images/cart-add.svg" alt="" />
            <p>Add to cart</p>
          </a>
        </div>
      </div>
      <div class="items__product product_4">
        <a class="items__product_link" href="#">
          <img
            class="items__image items__image-4"
            src="@/assets/images/index/Photo-4.png"
            alt=""
          />
          <div class="items__content">
            <div class="items__content_text">
              <p class="items__content_text_1">Modern Kitchan</p>
              <p class="items__content_text_2">Decor / Artchitecture</p>
            </div>
            <div class="items__content_arrow">
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </a>
        <div class="items__product_box scale-in-center">
          <a href="cart.html">
            <img src="@/assets/images/cart-add.svg" alt="" />
            <p>Add to cart</p>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Items",

  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>