<template>
  <div>
    <div class="course-item bg-light">
      <div class="position-relative overflow-hidden">
        <NuxtLink :to="`/produkt/${product.slug}/`" :title="product.linkTitle">
          <nuxt-img
            preset="productThumbnail"
            class="img-fluid"
            :src="`${config.imageFolder}${product.localThumb}`"
            :alt="product.linkTitle"
          />
        </NuxtLink>
        <div
          class="
            w-100
            d-flex
            justify-content-center
            position-absolute
            bottom-0
            start-0
            mb-4
          "
        >
          <NuxtLink
            :to="`/produkt/${product.slug}/`"
            class="flex-shrink-0 btn btn-sm btn-primary px-3 border-end"
            style="border-radius: 30px 0 0 30px"
            :title="product.linkTitle"
            >Testbericht</NuxtLink
          >
          <a
            :href="product.shopLink"
            class="flex-shrink-0 btn btn-sm btn-primary px-3"
            style="border-radius: 0 30px 30px 0"
            target="_blank"
            rel="nofollow noopener"
            >Bestellen</a
          >
        </div>
      </div>
      <div class="text-center p-4 pb-0">
        <div class="mb-0 h3">{{ parseFloat(product.price).toFixed(2) }} €</div>
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

var he = require("he");

export default {
  name: "productItem",
  props: {
    product: Object,
  },
  data() {
    // hol die kategorie vom produkt
    const categoryName =
      this.product.categories[this.product.categories.length - 2];

    // get the category object with its subcategories
    let categoryData = categories.find(
      (x) =>
        x.key === categoryName.toLowerCase() ||
        x.subCategories.find((y) => y.key == categoryName.toLowerCase())
    );

    if (categoryData.key === categoryName.toLowerCase()) {
      // console.log("we have the category key");
    } else {
      // finde die subcategory und hole den key
      categoryData = categoryData.subCategories.find(
        (x) => x.key === categoryName.toLowerCase()
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
  methods: {
    decode: function decodeEntity(str) {
      return he.decode(str);
    },
  },
};
</script>
