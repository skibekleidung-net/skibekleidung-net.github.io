import products from '~/assets/data/products.json'
import brands from '~/assets/data/brands.json'
import categories from '~/assets/data/categories.json'
import config from '~/assets/data/config.json'

function shuffle(array) {
    let currentIndex = array.length,
        randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {

        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]
        ];
    }

    return array;
}

var db = {
    products: {
        // Get a product from the products.json file by the slug field
        getProductFromSlug(slug) {
            return products.find(x => x.slug === slug)
        },
        getProductFromSku(sku) {
            return products.find(x => x.sku === sku)
        },
        getProductsFromCategory(categoryData) {
            return products.filter((product) =>
                product.category_keys.includes(categoryData.key)
            )
        },
        getFeaturedProducts() {
            return products.filter((product) =>
                config.popularProducts.includes(product.sku)
            );
        },
        getRandomProductsFromCategory(category, amount) {
            return shuffle(products.filter(x => x.categories.includes(category))).slice(0, amount)
        }
    },
    categories: {
        getCategoryNameForProduct(product) {
            return product.categories[product.categories.length - 2]
        },
        getCategoryFromSlug(slug) {
            let categoryData = categories.find(x => x.slug === slug || x.subCategories.find((y) => y.slug === slug))

            if (categoryData.slug === slug) {
                // console.log("we have the category key");
            } else {
                // finde die subcategory und hole den key
                categoryData = categoryData.subCategories.find((x) => x.slug === slug);
            }

            return categoryData
        },
        getFeaturedCategories() {
            // categorien holen
            let featuredCategories = [];
            for (let i = 0; i < config.featuredCategories.length; i++) {
                let category = categories.find(
                    (x) => x.name === config.featuredCategories[i]
                );
                featuredCategories.push(category);
            }

            return featuredCategories
        }
    },
    brands: {
        getBrandFromSlug(slug) {
            return brands.find(x => x.slug === slug)
        },
        getProductsForBrand(brand) {
            return products.filter(x => x.brand === brand.name)
        }
    },
    seo: {
        getSeoForProduct(product) {
            return config.productSeo.products.find(x => x.sku === product.sku)
        },
        getSeoForBrand(brand) {
            return config.brandSeo.brands.find((x) => x.key === brand.key)
        },
        getSeoForCategoryFromSlug(slug) {
            return config.categorySeo.categories.find(
                (x) => x.slug === slug
            );
        },
        getSeoForPage(pageName) {
            return config.seo[pageName]
        }
    }
}

export default db