<template>
  <div>
    <!-- Hersteller Start -->
    <div class="container-xxl py-5 category" id="hersteller">
      <div class="container">
        <div class="text-center fadeInUp">
          <div class="section-title bg-white text-center text-primary px-3 h6">
            {{ config.seo.mainKeyword }}
          </div>
          <h3 class="mb-5 h2">Hersteller</h3>
        </div>
        <div class="row g-3">
          <div class="col-lg-7 col-md-6">
            <div class="row g-3">
              <div class="col-lg-12 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/marken/trobolo/"
                  title="Mehr über TROBOLO erfahren"
                >
                  <div class="grayscaleContainer">
                    <nuxt-img
                      preset="default"
                      class="img-fluid grayscale"
                      src="/assets/images/marken/trobolo.webp"
                      alt="TROBOLO"
                    />
                    <div class="overlay">
                      <div class="overlayText">TROBOLO</div>
                    </div>
                  </div>
                  <div
                    class="
                      bg-white
                      text-center
                      position-absolute
                      bottom-0
                      end-0
                      py-2
                      px-3
                    "
                    style="margin: 1px"
                  >
                    <div class="m-0 h5">TROBOLO</div>
                    <!-- <small class="text-primary">Deutschland</small> -->
                  </div>
                </NuxtLink>
              </div>
              <div class="col-lg-6 col-md-12 zoomIn">
                <NuxtLink
                  class="position-relative d-block overflow-hidden"
                  to="/marken/trelino/"
                  title="Mehr über Trelino erfahren"
                >
                  <div class="grayscaleContainer">
                    <nuxt-img
                      preset="default"
                      class="img-fluid grayscale"
                      src="/assets/images/marken/trelino.webp"
                      alt="Trelino"
                    />
                    <div class="overlay">
                      <div class="overlayText">Trelino</div>
                    </div>
                  </div>
                  <div
                    class="
                      bg-white
                      text-center
                      position-absolute
                      bottom-0
                      end-0
                      py-2
                      px-3
                    "
                    style="margin: 1px"
                  >
                    <div class="m-0 h5">Trelino</div>
                    <!-- <small class="text-primary">49 Courses</small> -->
                  </div>
                </NuxtLink>
              </div>
              <div class="col-lg-6 col-md-12 zoomIn">
                <button
                  class="position-relative d-block overflow-hidden"
                  title="Mehr über Kildwick erfahren"
                >
                  <div class="grayscaleContainer">
                    <nuxt-img
                      preset="default"
                      class="img-fluid grayscale"
                      src="/assets/images/marken/kildwick.webp"
                      alt="Kildwick"
                    />
                    <div class="overlay">
                      <div class="overlayText">Kildwick</div>
                    </div>
                  </div>
                  <div
                    class="
                      bg-white
                      text-center
                      position-absolute
                      bottom-0
                      end-0
                      py-2
                      px-3
                    "
                    style="margin: 1px"
                  >
                    <div class="m-0 h5">Kildwick</div>
                    <!-- <small class="text-primary">49 Courses</small> -->
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div class="col-lg-5 col-md-6 zoomIn" style="min-height: 350px">
            <button class="position-relative d-block h-100 overflow-hidden">
              <div class="grayscaleContainer">
                <nuxt-img
                  preset="default"
                  class="img-fluid grayscale"
                  src="/assets/images/marken/meinetrenntoilette.webp"
                  alt="MeineTrenntoilette"
                />
                <div class="overlay">
                  <div class="overlayText">Meine Trenntoilette</div>
                </div>
              </div>
              <div
                class="
                  bg-white
                  text-center
                  position-absolute
                  bottom-0
                  end-0
                  py-2
                  px-3
                "
                style="margin: 1px"
              >
                <div class="m-0 h5">Meine Trenntoilette</div>
                <!-- <small class="text-primary">Deutschland</small> -->
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Hersteller End -->
  </div>
</template>

<script>
import config from "~/assets/data/config.json";

export default {
  name: "herstellerComponent",
  data() {
    return {
      config,
    };
  },
};
</script>
