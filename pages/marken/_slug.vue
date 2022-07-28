<template>
  <div>
    <div class="container-fluid py-5">
      <div class="container-fluid">
        <div class="row g-5">
          <div class="col-lg-2 fadeInUp">
            <CategorySidebar />
          </div>
          <div class="col-lg-10 fadeInUp">
            <div class="text-center fadeInUp">
              <div
                class="section-title bg-white text-center text-primary px-3 h6"
              >
                {{ config.seo.mainKeyword }}
              </div>
              <h1 class="mb-5 h2" v-html="brandData.name"></h1>
            </div>
            <Products :products="filteredProducts" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import db from "~/utils/database.js";

export default {
  name: "singleBrandComponent",
  head() {
    return {
      title:
        this.seoData && this.seoData.seo && this.seoData.seo.title
          ? this.seoData.seo.title
          : config.brandSeo.defaultTitle.replaceAll(
              "$HERSTELLER",
              this.brandData.name
            ),
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.seoData && this.seoData.seo && this.seoData.seo.metaDescription
              ? this.seoData.seo.metaDescription
              : config.brandSeo.defaultMetaDescription.replaceAll(
                  "$HERSTELLER",
                  this.brandData.name
                ),
        },
        {
          hid: "robots",
          name: "robots",
          content:
            this.seoData && this.seoData.seo && this.seoData.seo.robots
              ? this.seoData.seo.robots
              : config.brandSeo.defaultRobots,
        },
      ],
    };
  },
  data() {
    const slug = this.$route.params.slug;
    const brandData = db.brands.getBrandFromSlug(slug);
    const seoData = db.seo.getSeoForBrand(brandData);
    const filteredProducts = db.brands
      .getProductsForBrand(brandData)
      .slice(0, 100);

    return {
      filteredProducts,
      brandData,
      seoData,
      config,
    };
  },
};
</script>
