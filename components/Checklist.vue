<template>
  <div class="row gy-2 gx-4 mb-4 mt-5">
    <div
      class="col-sm-6"
      v-for="(item, index) in config.checklist"
      :key="index"
    >
      <p class="mb-0">
        <i class="fa fa-arrow-right text-primary me-2"></i>{{ item }}
      </p>
    </div>
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
