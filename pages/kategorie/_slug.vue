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
                Kategorie
              </div>
              <h1 class="mb-5 h2">
                {{ categoryData.name }}
              </h1>
            </div>
            <Products :products="products" />
          </div>
        </div>
      </div>
    </div>
    <!-- because the seoData object differs from the main pages ones, we have to parse the seoData.seo object to get the seo data for this category. -->
    <SeoText :seoData="seoData.seo" v-if="seoData && seoData.seo" />
  </div>
</template>

<script>
import config from "~/assets/data/config.json";
import db from "~/utils/database.js";

export default {
  name: "categoryComponent",
  head() {
    return {
      title:
        this.seoData && this.seoData.seo && this.seoData.seo.title
          ? this.seoData.seo.title
          : config.categorySeo.defaultTitle
              .replaceAll("$PRODUKT", this.categoryData.name)
              .replaceAll("$HERSTELLER", this.categoryData.brand)
              .replaceAll("$KATEGORIE", this.categoryData.name),
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.seoData && this.seoData.seo && this.seoData.seo.metaDescription
              ? this.seoData.seo.metaDescription
              : config.categorySeo.defaultMetaDescription
                  .replaceAll("$PRODUKT", this.categoryData.name)
                  .replaceAll("$HERSTELLER", this.categoryData.brand)
                  .replaceAll("$KATEGORIE", this.categoryData.name),
        },
        {
          hid: "robots",
          name: "robots",
          content:
            this.seoData && this.seoData.seo && this.seoData.seo.robots
              ? this.seoData.seo.robots
              : config.categorySeo.defaultRobots,
        },
      ],
    };
  },
  data() {
    const slug = this.$route.params.slug;
    const categoryData = db.categories.getCategoryFromSlug(slug);
    const filteredProducts = db.products
      .getProductsFromCategory(categoryData)
      .slice(0, config.numberMaximumProductsPerCategory);
    const seoData = db.seo.getSeoForCategoryFromSlug(slug);
    return {
      products: filteredProducts,
      categoryData,
      seoData,
    };
  },
};
</script>
