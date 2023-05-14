// utils/priceCalculation.js
import config from "~/assets/data/config.json"

export default function calculatePrice(price) {
    return (price * config.snipcart.factor).toFixed(2);
}
