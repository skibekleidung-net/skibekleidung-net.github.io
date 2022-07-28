<template>
  <div class="row">
    <div
      v-for="(product, index) in products"
      :key="index"
      class="col-lg-2 col-md-4 col-sm-6 col-xs-12 fadeInUp"
    >
      <ProductItem :product="product" class="mt-5" />
    </div>
  </div>
</template>

<script>
export default {
  name: "products",
  props: {
    products: Array,
  },
};
</script>
