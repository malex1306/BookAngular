import { FavoritesServices } from "./favorites.service";
import { ProductsService } from "./products.service";

export function favoritesFactory(isFavorite: boolean) {
    return () => {
        if (isFavorite) {
            return new FavoritesServices();
        }
        return new ProductsService();
    };
}