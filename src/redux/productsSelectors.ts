import {AppStateType} from "./store";

export const selectProducts = (state: AppStateType) => {

    // if filter options enabled
    // return filtered products
    if (state.productsPage.filter?.isAvailable) {
        return state.productsPage.products.filter(product => product.quantity > 1);
    }

    return state.productsPage.products;
}

export const selectFilter = (state: AppStateType) => {
    return state.productsPage.filter;
}