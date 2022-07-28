<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container-fluid">
        <div class="row g-5">
          <div class="col-lg-12 fadeInUp">
            <ul class="list-group text-center">
              <li
                class="list-group-item h2"
                v-for="(brand, index) in brands"
                :key="index"
              >
                <nuxt-link
                  :to="`/marken/${brand.slug}/`"
                  :title="`${config.seo.mainKeyword} von ${brand.name}`"
                  v-html="brand.name"
                ></nuxt-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import brands from "~/assets/data/brands.json";

export default {
  name: "brandComponent",
  head() {
    return {
      title: config.seo.hersteller
        ? config.seo.hersteller.title
        : config.seo.mainKeyword + " Shop",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            config.seo.hersteller && config.seo.hersteller.metaDescription
              ? config.seo.hersteller.metaDescription
              : config.seo.mainKeyword + " Shop",
        },
        {
          hid: "robots",
          name: "robots",
          content:
            config.seo.hersteller && config.seo.hersteller.robots
              ? config.seo.hersteller.robots
              : "noindex, follow",
        },
      ],
    };
  },
  data() {
    // sort alphabetically
    const sortedBrands = brands.sort((a, b) => (a.key > b.key ? 1 : -1));
    return {
      config,
      brands: sortedBrands,
    };
  },
};
</script>
