<template>
  <div>
    <div class="sidebar-widget schedule-widget mt-5">
      <div class="mb-4 h5">{{ product.name }}</div>
      <ul class="list-unstyled">
        <li class="d-flex justify-content-between align-items-center">
          <span>Marke</span>
          <span><nuxt-link :title="`${config.seo.mainKeyword} von ${decode(product.brand)}`"
              :to="`/marken/${brandData.slug}/`" v-html="product.brand"></nuxt-link></span>
        </li>
        <hr />

        <li class="d-flex justify-content-between align-items-center">
          <span>Kategorie</span>
          <nuxt-link :to="`/kategorie/${categoryData.slug}/`" :title="categoryData.name"><span>{{ categoryData.name
          }}</span></nuxt-link>
        </li>
        <hr />

        <div v-for="(spec, index) in product.specifications" :key="index">
          <li class="d-flex justify-content-between align-items-center">
            <span>{{ Object.keys(spec)[0] }}</span>
            <span>{{ Object.values(spec)[0] }}</span>
          </li>
          <hr />
        </div>

        <li class="d-flex justify-content-between align-items-center">
          <span>Bewertung</span>
          <div class="mb-1 mt-3">
            <small v-for="star in product.stars" :key="star" class="pl-3 fa fa-star text-primary"></small>
            <small v-for="index in 5 - product.stars" :key="index" class="fa fa-star text-default"></small>
          </div>
        </li>

        <hr />
      </ul>
      <div class="sidebar-contact-info mt-4">
        <p class="mb-0">Preis</p>
        <h3>{{ parseFloat(product.price).toFixed(2) }} EUR</h3>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import categories from "~/assets/data/categories.json";
import brands from "~/assets/data/brands.json";

var he = require("he");

export default {
  name: "productcard",
  props: {
    product: Object,
  },
  data() {
    const category =
      this.product.categories[this.product.categories.length - 2];

    // get the category object with its subcategories
    let categoryData = categories.find(
      (x) =>
        x.key === category.toLowerCase() ||
        x.subCategories.find((y) => y.key == category.toLowerCase()) || x.key === "sonstiges"
    );

    // get the brand data
    const brandData = brands.find((x) => x.name === this.product.brand);

    return {
      config,
      categoryData,
      brandData,
    };
  },
  methods: {
    decode: function decodeEntity(str) {
      return he.decode(str);
    },
  },
};
</script>
