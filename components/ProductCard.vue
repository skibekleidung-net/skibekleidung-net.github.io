<template>
  <div>
    <div class="sidebar-widget schedule-widget mt-5">
      <div class="mb-4 h5">{{ product.name }}</div>
      <ul class="list-unstyled">
        <li class="d-flex justify-content-between align-items-center">
          <span>Marke</span>
          <span
            ><nuxt-link
              :title="`${config.seo.mainKeyword} von ${decode(product.brand)}`"
              :to="`/marken/${brandData.slug}/`"
              v-html="product.brand"
            ></nuxt-link
          ></span>
        </li>
        <hr />

        <li class="d-flex justify-content-between align-items-center">
          <span>Kategorie</span>
          <nuxt-link
            :to="`/kategorie/${categoryData.slug}/`"
            :title="categoryData.name"
            ><span>{{ categoryData.name }}</span></nuxt-link
          >
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
            <small
              v-for="star in product.stars"
              :key="star"
              class="pl-3 fa fa-star text-primary"
            ></small>
            <small
              v-for="index in 5 - product.stars"
              :key="index"
              class="fa fa-star text-default"
            ></small>
          </div>
        </li>

        <hr />

        <li class="d-flex justify-content-between align-items-center">
          <span>vorraussichtliche Lieferzeit</span>
          <span>5 Tage</span>
        </li>
      </ul>

      <hr />

      <div class="sidebar-contact-info mt-4">
        <p class="mb-0">Preis</p>
        <div class="h3">
          {{ calculatedPrice }}
          EUR
        </div>
        <div class="h6">Versand inklusive</div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import categories from "~/assets/data/categories.json";
import brands from "~/assets/data/brands.json";
import calculatePrice from "~/modules/calculatePrice";

var he = require("he");

export default {
  name: "productcard",
  props: {
    product: Object,
  },
  data() {
    const category =
      this.product.category ||
      (this.product.categories && this.product.categories.length > 1
        ? this.product.categories[this.product.categories.length - 2]
        : "Sonstige");
    // get the category object with its subcategories
    let categoryData = categories.find((x) => x.key === category.toLowerCase());

    if (categoryData.key === category.toLowerCase()) {
      // console.log("we have the category key");
    } else {
      // finde die subcategory und hole den key
      categoryData = categoryData.subCategories.find(
        (x) => x.key === category.toLowerCase()
      );
    }

    // get the brand data
    const brandData = brands.find((x) => x.name === this.product.brand);

    return {
      config,
      categoryData,
      brandData,
    };
  },
  computed: {
    calculatedPrice() {
      return calculatePrice(this.product.price);
    },
  },
  methods: {
    decode: function decodeEntity(str) {
      return he.decode(str);
    },
  },
};
</script>
