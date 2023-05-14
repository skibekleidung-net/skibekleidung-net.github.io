import config from "~/assets/data/config.json";

export default function getProductThumbnail(product) {
    let filePath;

    if (product.localThumbs && product.localThumbs[0]) {
        filePath = product.localThumbs[0];
    } else if (product.localThumb) {
        filePath = product.localThumb;
    } else {
        filePath = '';
    }

    // Use different image folder path based on the environment
    const imageFolderPath = process.env.NODE_ENV === 'development' ? config.imageFolder : "/assets/images/";

    const thumbnail = imageFolderPath + filePath;


    // if we are in production mode, we will change from .jpg to .webp 
    // as the nuxt/image module is converting the images
    if (process.env.NODE_ENV === 'development') {
        return thumbnail
    } else if (process.env.NODE_ENV === 'production') {

        let dotIndex = thumbnail.lastIndexOf(".");
        if (dotIndex === -1) {
            return thumbnail; // No extension found, return the original thumbnail.
        }

        return thumbnail.substr(0, dotIndex) + ".webp";
    }
}
