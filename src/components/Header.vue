<template>
  <header class="header">
    <div class="header__flex container">
      <nav class="header__nav">
        <div class="header__left">
          <a class="header__menu_text" href="/"
            ><img src="@/assets/images/index/Logo.svg" alt="" />Interno</a
          >
        </div>
        <div class="header__right">
          <ul class="header__menu">
            <li class="header__menu_list">
              <a class="header__menu_link" href="/">Home</a>
            </li>
            <li class="header__menu_list">
              <a class="header__menu_link" href="/blog">Blog</a>
            </li>
            <li class="header__menu_list">
              <a class="header__menu_link" href="/blog_details">Blog details</a>
            </li>
            <li class="header__menu_list">
              <a class="header__menu_link" href="/project">Project</a>
            </li>
            <li class="header__menu_list">
              <a class="header__menu_link" href="/project_details"
                >Project details</a
              >
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>
