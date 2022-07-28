<template>
  <div class="container py-5">
    <div class="row pt-5">
      <h1 v-if="error.statusCode === 404">Seite nicht gefunden</h1>
      <h1 v-else>Es ist ein Problem aufgetreten :(</h1>
      <NuxtLink to="/">Zurück zur Startseite</NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error", // you can set a custom layout for the error page
};
</script>