<template>
  <div>
    <!-- About Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-6 fadeInUp" style="min-height: 400px">
            <div class="position-relative h-100">
              <nuxt-img
                preset="default"
                class="img-fluid position-absolute w-100 h-100"
                src="/assets/images/featureHeader/outdoorhose.jpg"
                :alt="config.seo.mainKeyword"
                width="612"
                height="514"
                style="object-fit: cover; object-position: center bottom"
              />
            </div>
          </div>
          <div class="col-lg-6 fadeInUp">
            <div class="section-title bg-white text-start text-primary pe-3">
              Damen und Herren
            </div>
            <div class="mb-4 h1">{{ config.seo.mainKeyword }}</div>
            <div v-html="config.seo.featureText"></div>
            <Checklist />
            <nuxt-link
              class="btn btn-primary btn-lg py-3 px-5 mt-2"
              to="/shop/"
              :title="`${config.seo.mainKeyword} Shop`"
              >zum {{ config.seo.mainKeyword }} Shop</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
  </div>
</template>

<script>
import config from "~/assets/data/config.json";

export default {
  data() {
    return {
      config,
    };
  },
};
</script>
