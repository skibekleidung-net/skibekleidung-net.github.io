<template>
  <!-- Winner Start -->
  <div class="container-xxl py-5" id="testsieger">
    <div class="container">
      <div class="text-center fadeInUp">
        <div class="section-title bg-white text-center text-primary px-3 h6">
          {{ config.seo.mainKeyword }}
        </div>
        <div class="mb-5 h2">Testsieger</div>
      </div>
      <div class="row g-4 justify-content-center">
        <div
          v-for="product in featured"
          :key="product.name"
          class="col-lg-4 col-md-6 col-sm-8 col-xs-12 fadeInUp"
        >
          <ProductItem :product="product" />
        </div>
      </div>
    </div>
  </div>
  <!-- Winner End -->
</template>

<script>
import config from "~/assets/data/config.json";
import products from "~/assets/data/products.json";

const winnerProducts = products.filter((product) =>
  config.winnerProducts.includes(product.sku)
);

export default {
  name: "testsieger",
  data() {
    return {
      featured: winnerProducts,
      config,
    };
  },
};
</script>
