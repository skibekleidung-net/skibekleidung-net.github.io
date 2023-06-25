<template>
  <div>

    <!-- gads -->
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3382175535865982"
     crossorigin="anonymous"></script>
    <!-- gads end -->

    <!-- Navbar Start -->
    <nav
      class="navbar navbar-expand-lg bg-white navbar-light shadow fixed-top p-0"
    >
      <a
        href="/"
        :title="config.title"
        class="navbar-brand d-flex align-items-center px-4 px-lg-5"
      >
        <h2 class="m-0 text-primary" style="font-size: 18px">
          <i class="fa fa-hiking me-3"></i>{{ config.logoText }}
        </h2>
      </a>
      <button
        type="button"
        class="navbar-toggler me-4"
        aria-label="Hauptmenü"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <div class="navbar-nav ms-auto p-4 p-lg-0">
          <!-- single link -->
          <div v-for="(link, index) in navigationLinks" :key="index">
            <a
              :href="link.linkTo"
              :title="link.linkTitle"
              class="nav-item nav-link"
              >{{ link.title }}</a
            >
          </div>

          <!-- end single link -->

          <!-- featured categories links in navigation bar -->
          <div class="nav-item dropdown">
            <nuxt-link
              to="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >Kategorien</nuxt-link
            >
            <div class="dropdown-menu fade-down m-0">
              <div v-for="(category, index) in featuredCategories" :key="index">
                <nuxt-link
                  :to="`/kategorie/${category.slug}/`"
                  :title="category.name"
                  class="dropdown-item"
                  >{{ category.name }}</nuxt-link
                >
              </div>
            </div>
          </div>
          <!-- end featured categories -->

          <!-- subLinks -->
          <div
            class="nav-item dropdown"
            v-for="(link, index) in subLinks"
            :key="index"
          >
            <nuxt-link
              to="#"
              class="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              >{{ link.title }}</nuxt-link
            >
            <div class="dropdown-menu fade-down m-0">
              <div v-for="(subLink, index) in link.subLinks" :key="index">
                <a
                  :href="subLink.linkTo"
                  :title="subLink.linkTitle"
                  class="dropdown-item"
                  >{{ subLink.title }}</a
                >
              </div>
            </div>
          </div>

          <!-- end subLinks -->
        </div>
        <a
          href="/#testsieger"
          class="btn btn-primary py-4 px-lg-5 d-none d-lg-block"
          >Testsieger<i class="fa fa-arrow-right ms-3"></i
        ></a>
      </div>
    </nav>
    <!-- Navbar End -->
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import categories from "~/assets/data/categories.json";

export default {
  name: "headerComponent",
  data() {
    // const featuredCategories = db.categories.getFeaturedCategories();

    return {
      config,
      featuredCategories: categories,
      navigationLinks: config.navigationLinks.filter(
        (x) => !x.subLinks && x.publish
      ),
      subLinks: config.navigationLinks.filter((x) => x.subLinks && x.publish),
    };
  },
};
</script>

<style scoped>
.fas.fa-shopping-cart {
  font-size: 24px; /* Adjust the size as needed */
  padding-right: 20px;
  color: #068a97;
}
</style>