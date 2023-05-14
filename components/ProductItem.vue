<template>
  <div>
    <div class="course-item bg-light">
      <div class="position-relative overflow-hidden">
        <NuxtLink :to="`/produkt/${product.slug}/`" :title="product.linkTitle">
          <nuxt-img
            preset="productThumbnail"
            class="img-fluid"
            :src="productThumbnail"
            :alt="product.linkTitle"
          />
        </NuxtLink>
        <div
          class="w-100 d-flex justify-content-center position-absolute bottom-0 start-0 mb-4"
        >
          <NuxtLink
            :to="`/produkt/${product.slug}/`"
            class="flex-shrink-0 btn btn-sm btn-primary px-3"
            style="border-radius: 30px"
            :title="product.linkTitle"
            >Testbericht</NuxtLink
          >
        </div>
      </div>
      <div class="text-center p-4 pb-0">
        <div class="mb-0 h3">{{ calculatedPrice }} €</div>
        <div class="mb-3">
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
          <small>({{ product.reviewCount }})</small>
        </div>
        <div class="mb-4 h5">
          <nuxt-link
            :to="`/produkt/${product.slug}/`"
            class="noLinkStyle"
            :title="product.name"
          >
            {{ product.name }}
          </nuxt-link>
        </div>
      </div>
      <div class="d-flex border-top">
        <small class="flex-fill text-center border-end py-2"
          ><i class="fa fa-toilet text-primary me-2"></i
          ><NuxtLink
            :to="`/marken/${brandData.slug}/`"
            :title="decode(product.brand)"
            v-html="product.brand"
          ></NuxtLink
        ></small>
        <small class="flex-fill text-center border-end py-2"
          ><i class="fa text-primary me-2"></i
          ><NuxtLink
            :to="`/kategorie/${categoryData.slug}/`"
            :title="categoryData.name"
          >
            {{ categoryData.name }}</NuxtLink
          ></small
        >
      </div>
    </div>
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import categories from "~/assets/data/categories.json";
import brands from "~/assets/data/brands.json";
import calculatePrice from "~/modules/calculatePrice";
import getProductThumbnail from "~/modules/getProductThumbnail";

var he = require("he");

export default {
  name: "productItem",
  props: {
    product: Object,
  },
  data() {
    return {
      config,
    };
  },
  computed: {
    calculatedPrice() {
      return calculatePrice(this.product.price);
    },
    productThumbnail() {
      return getProductThumbnail(this.product);
    },
    categoryData() {
      let categoryName =
        this.product.category ||
        this.product.categories[this.product.categories.length - 2];

      return categories.find(
        (c) =>
          c.name === categoryName ||
          c.subCategories.find((sc) => sc.name === categoryName)
      );
    },
    brandData() {
      return brands.find((brand) => brand.name === this.product.brand);
    },
  },
  methods: {
    decode: function decodeEntity(str) {
      return he.decode(str);
    },
  },
};
</script>

<style scoped>
.course-item {
  min-height: 450px; /* Adjust this value based on your desired minimum height */
  display: flex;
  flex-direction: column;
}

.course-item .text-center {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.mb-4 h5 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  hyphens: auto;
}
</style>

