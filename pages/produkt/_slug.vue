<template>
  <div>
    <ProductHeader
      :product="product"
      :productName="product.name"
      :textContent="product.description"
      :productImage="getProductThumbnail()"
    ></ProductHeader>

    <!-- About Start -->
    <div class="container-xxl py-5" id="testbericht">
      <div class="container">
        <div class="row g-5">
          <div class="col-lg-8 fadeInUp" style="min-height: 400px">
            <h2 class="mb-4" v-if="!seoData">{{ product.name }}</h2>
            <div v-if="seoData && seoData.seo && seoData.seo.texts">
              <div v-for="(text, index) in seoData.seo.texts" :key="index">
                <div class="mb-3 mt-5 h5">
                  <h2>{{ text.title }}</h2>
                </div>
                <p class="mb-4" v-html="text.text"></p>
              </div>
            </div>

            <Checklist />
            <a
              class="btn btn-primary py-3 px-5"
              :data-item-id="product.name"
              :data-item-price="calculatedPrice"
              :data-item-description="product.name"
              :data-item-url="config.hostname + 'produkt/' + slug"
              :data-item-image="getProductThumbnail()"
              :data-item-name="product.name"
              target="_blank"
              rel="nofollow noopener"
              style="display: block; width: 100%"
              :href="product.shopLink"
            >
              Bestellen *
          </a>
          </div>
          <div class="col-lg-4 fadeInUp">
            <ProductCard :product="product" />
            <div class="mt-5">
              <a
                class="btn btn-primary py-3 px-5"
                :data-item-id="product.name"
                :data-item-price="calculatedPrice"
                :data-item-description="product.name"
                :data-item-url="config.hostname + 'produkt/' + slug"
                :data-item-image="getProductThumbnail()"
                :data-item-name="product.name"
                target="_blank"
                rel="nofollow noopener"
                style="display: block; width: 100%"
                :href="product.shopLink"
              >
                Bestellen *
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="text-center fadeInUp">
        <div class="section-title bg-white text-center text-primary px-3 h6">
          Ähnliche Produkte
        </div>
        <div class="mb-5 h2">{{ category }}</div>
      </div>
      <Products :products="relevantProducts" />
    </div>
    <!-- About End -->
  </div>
</template>


<script>
import config from "~/assets/data/config.json";
import products from "~/assets/data/products.json";
import db from "~/utils/database.js";
import calculatePrice from "~/modules/calculatePrice";
import getProductThumbnail from "~/modules/getProductThumbnail";

function customEncodeURI(str) {
  return str.split(" ").join("+");
}

export default {
  name: "product",
  head() {
    return {
      title:
        this.seoData && this.seoData.seo && this.seoData.seo.title
          ? this.seoData.seo.title
              .replaceAll("$PRODUKT", this.product.name)
              .replaceAll("$HERSTELLER", this.product.brand)
              .replaceAll("$KATEGORIE", this.category)
              .replaceAll("$DOMAIN", this.config.domain)
          : config.productSeo.defaultTitle
              .replaceAll("$PRODUKT", this.product.name)
              .replaceAll("$HERSTELLER", this.product.brand)
              .replaceAll("$KATEGORIE", this.category)
              .replaceAll("$DOMAIN", this.config.domain),
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            this.seoData && this.seoData.seo && this.seoData.seo.metaDescription
              ? this.seoData.seo.metaDescription
                  .replaceAll("$PRODUKT", this.product.name)
                  .replaceAll("$HERSTELLER", this.product.brand)
                  .replaceAll("$KATEGORIE", this.category)
                  .replaceAll("$DOMAIN", this.config.domain)
              : config.productSeo.defaultMetaDescription
                  .replaceAll("$PRODUKT", this.product.name)
                  .replaceAll("$HERSTELLER", this.product.brand)
                  .replaceAll("$KATEGORIE", this.category)
                  .replaceAll("$DOMAIN", this.config.domain),
        },
        {
          hid: "robots",
          name: "robots",
          content:
            this.seoData && this.seoData.seo && this.seoData.seo.robots
              ? this.seoData.seo.robots
              : config.productSeo.defaultRobots,
        },
      ],
    };
  },
  data() {
    const slug = this.$route.params.slug;
    const product = db.products.getProductFromSlug(slug);
    const seoData = db.seo.getSeoForProduct(product);
    const category =
      product.category ||
      (product.categories && product.categories.length > 1
        ? product.categories[product.categories.length - 2]
        : "Sonstige");
    // const relevantProducts = db.products.getRandomProductsFromCategory(
    //   category,
    //   config.numberOfRelevantProduct
    // );
    const relevantProducts = products
      .filter((x) => x.categories.includes(category))
      .slice(0, 12);

    return {
      slug,
      product,
      config,
      seoData,
      category,
      relevantProducts,
      affiliateLink: config.affiliate.defaultLink,
    };
  },
  computed: {
    calculatedPrice() {
      return calculatePrice(this.product.price);
    },
  },
  methods: {
    getProductThumbnail() {
      return getProductThumbnail(this.product);
    },
    async fetchAffiliateLink() {
      try {
        const response = await fetch(
          "https://api.surrealnetworks.io/api/x/generate-link",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              domain: "example.com", // replace with your root domain
              keyword: this.product.name,
            }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          this.affiliateLink = data.affiliateLink;
        } else {
          console.error(
            `Failed to generate affiliate link: ${response.status} ${response.statusText}`
          );
        }
      } catch (error) {
        console.error(`Error generating affiliate link: ${error}`);
      }
    },
  },
  created() {
    this.fetchAffiliateLink();
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@context": "https://schema.org/",
          "@type": "Product",
          name: this.product.name,
          image: [config.hostname + this.getProductThumbnail(this.product)],
          description:
            this.seoData && this.seoData.seo.metaDescription
              ? this.seoData.seo.metaDescription
              : this.product.name + " - " + this.product.brand,
          sku: this.product.sku,
          brand: {
            "@type": "Brand",
            name: this.product.brand,
          },
          review: {
            "@type": "Review",
            reviewRating: {
              "@type": "Rating",
              ratingValue: this.product.stars.toString(),
              bestRating: this.product.stars.toString(),
            },
            author: {
              "@type": "Organization",
              name: config.organization,
            },
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: (Math.random() * (5.0 - 4.0) + 4.0)
              .toFixed(1)
              .toString(),
            reviewCount: this.product.reviewCount,
          },
          offers: {
            "@type": "Offer",
            url: config.hostname + config.productUrl + this.product.slug + "/",
            priceCurrency: "EUR",
            price: this.calculatedPrice,
            priceValidUntil: "2024-11-20",
            itemCondition: "https://schema.org/NewCondition",
            availability: "https://schema.org/InStock",
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              item: {
                "@id": config.hostname,
                name: config.seo.mainKeyword,
              },
            },
            {
              "@type": "ListItem",
              position: 2,
              item: {
                "@id":
                  config.hostname +
                  config.kategorieUrl +
                  this.category.toLowerCase() +
                  "/",
                name: this.category,
              },
            },
            {
              "@type": "ListItem",
              position: 3,
              item: {
                "@id":
                  config.hostname + config.productUrl + this.product.slug + "/",
                name: this.product.name,
              },
            },
          ],
        },
      ],
    };
  },
};
</script>
