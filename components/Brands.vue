<template>
  <div class="container">
    <div class="row py-5">
      <div class="text-center fadeInUp">
        <div class="section-title bg-white text-center text-primary px-3 h6">
          {{ config.seo.mainKeyword }}
        </div>
        <div class="mb-5 h2">Marken</div>
      </div>
      <div class="col-2 h4 w-50" v-for="(brand, index) in brands" :key="index">
        <nuxt-link
          :to="`/marken/${brand.slug}/`"
          :title="`${config.seo.mainKeyword} von ${brand.name}`"
          v-html="brand.name"
        ></nuxt-link>
      </div>
      <div class="text-center pt-5">
        <nuxt-link
          to="/marken/"
          :title="seoData.title"
          class="btn btn-primary btn-lg"
          >Alle Marken</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import brands from "~/assets/data/brands.json";
import db from "~/utils/database.js";

export default {
  name: "brandsComponent",
  data() {
    const seoData = db.seo.getSeoForPage("shop");

    return {
      config,
      seoData,
      brands: brands.slice(0, 20),
    };
  },
};
</script>

<style>
</style>