<template>
  <footer class="footer">
    <div class="footer__flex container">
      <div class="footer__left">
        <a class="footer__logo" href="index.html"
          ><img src="@/assets/images/index/Logo.svg" alt="" /> Interno</a
        >
        <p class="footer__text">
          It is a long established fact that a reader will be distracted
          lookings.
        </p>
        <div class="footer__share">
          <a href="#"><i class="fa-brands fa-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
        </div>
      </div>
      <div class="footer__center">
        <h3 class="footer__center_title">Pages</h3>
        <p>Home</p>
        <p>Project</p>
        <p>Blog</p>
      </div>
      <div class="footer__right">
        <h3 class="footer__right_title">Contact</h3>
        <p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
        <p>contact@interno.com</p>
        <p>(123) 456 - 7890</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>