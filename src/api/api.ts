import axios from "axios";
import {ProductType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://artisant.io/api',
})

export const productsAPI = {
    getProducts: () => {
        return instance.get<ProductsResponseType>("/products")
            .then(response => response.data);
    },
}

type ProductsResponseType = {
    status: string;
    data: {
        products: ProductType[];
    };
}