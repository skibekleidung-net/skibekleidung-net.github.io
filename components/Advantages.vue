<template>
  <div>
    <!-- Vorteile Start -->
    <div class="container-xxl py-5">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            Gründe
          </div>
          <h2 class="mb-5 h2">Vorteile einer {{ config.seo.mainKeyword }}</h2>
        </div>
        <div class="row g-4">
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-water text-primary mb-4"></i>
                <div class="mb-3 h5">Wasserfrei</div>
                <p>
                  Eine {{ config.seo.mainKeyword }} kommt komplett ohne Wasser
                  aus
                </p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-sun text-primary mb-4"></i>
                <div class="mb-3 h5">Autark</div>
                <p>Sie benötigen keine zusätzlichen Sanitäranschlüsse</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-ban text-primary mb-4"></i>
                <div class="mb-3 h5">Keine Chemie</div>
                <p>Dank Trenneinsatz ist keine Chemie notwendig</p>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-sm-6 fadeInUp">
            <div class="service-item text-center pt-3">
              <div class="p-4">
                <i class="fa fa-3x fa-recycle text-primary mb-4"></i>
                <div class="mb-3 h5">Nachhaltig</div>
                <p>
                  Benutzen Sie die Ausscheidungen als nährstoffreichen Kompost
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Vorteile End -->
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
