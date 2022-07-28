<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container-fluid">
        <div class="row g-5">
          <div class="col-lg-2 fadeInUp">
            <CategorySidebar />
          </div>
          <div class="col-lg-10 fadeInUp">
            <Products :products="products" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from "~/assets/data/products.json";
import config from "~/assets/data/config.json";

export default {
  name: "categoryComponent",
  head() {
    return {
      title: config.seo.shop
        ? config.seo.shop.title
        : config.seo.mainKeyword + " Shop",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            config.seo.shop && config.seo.shop.metaDescription
              ? config.seo.shop.metaDescription
              : config.seo.mainKeyword + " Shop",
        },
        {
          hid: "robots",
          name: "robots",
          content:
            config.seo.shop && config.seo.shop.robots
              ? config.seo.shop.robots
              : "noindex, follow",
        },
      ],
    };
  },
  data() {
    return {
      products: products.slice(0, 50),
      // products: products.sort(() => 0.5 - Math.random()).slice(0, 50),
    };
  },
};
</script>
