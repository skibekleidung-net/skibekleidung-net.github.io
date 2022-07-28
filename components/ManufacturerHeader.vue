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
                :src="productImage"
                :alt="productName"
                style="object-fit: cover; object-position: center bottom"
              />
            </div>
          </div>
          <div class="col-lg-6 fadeInUp">
            <div class="section-title bg-white text-start text-primary pe-3 h6">
              Hersteller
            </div>
            <h1 class="mb-4">{{ productName }}</h1>
            <p class="mb-4">
              {{ textContent }}
            </p>
            <p class="mb-4">
              In folgendem Artikel stellen wir Euch den Hersteller vor. Zudem
              informieren wir über:
            </p>
            <div class="row gy-2 gx-4 mb-4">
              <div class="col-sm-12">
                <p class="mb-0">
                  <a href="#unternehmen">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Das
                    Unternehmen</a
                  >
                </p>
              </div>
              <div class="col-sm-12">
                <p class="mb-0">
                  <a href="#nachhaltigkeit">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Die
                    Nachhaltigkeit
                  </a>
                </p>
              </div>
              <div class="col-sm-12">
                <p class="mb-0">
                  <a href="#produkte">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Die
                    Produkte</a
                  >
                </p>
              </div>
              <div class="col-sm-12">
                <p class="mb-0">
                  <a href="#preis-leistung">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Das
                    Preis-Leistungs-Verhältnis</a
                  >
                </p>
              </div>
              <div class="col-sm-12">
                <p class="mb-0">
                  <a href="#fazit">
                    <i class="fa fa-arrow-right text-primary me-2"></i>Unser
                    Fazit
                  </a>
                </p>
              </div>
            </div>
            <a
              class="btn btn-primary py-3 px-5 mt-2"
              target="_blank"
              rel="nofollow noopener"
              v-bind:href="websiteUrl"
              >zu {{ productName }}</a
            >
          </div>
        </div>
      </div>
    </div>
    <!-- About End -->
  </div>
</template>

<script>
export default {
  name: "manufacturerheader",
  props: {
    productName: String,
    textContent: String,
    productImage: String,
    websiteUrl: String,
  },
};
</script>
