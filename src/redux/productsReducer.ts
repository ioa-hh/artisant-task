import {AppStateType, InferActionTypes} from "./store";
import {FilterType, ProductType} from "../types/types";
import {ThunkAction} from "redux-thunk";
import {productsAPI} from "../api/api";

const PRODUCTS_RECEIVED = 'artisant-task/products/PRODUCTS_RECEIVED';
const FILTER_CHANGED = 'artisant-task/products/FILTER_CHANGED';

let initialState = {
    products: [] as ProductType[],
    filter: null as null | FilterType,
};

const productsReducer = (state = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
        case PRODUCTS_RECEIVED:
            return _productsReceived(state, action.newProducts);
        case FILTER_CHANGED:
            return _filterChanged(state, action.newFilter);
        default:
            return state;
    }
}

const _productsReceived = (state: InitialStateType, newProducts: ProductType[]) => {

    return {
        ...state,
        products: [...newProducts],
    }
}
const _filterChanged = (state: InitialStateType, newFilter: FilterType) => {
    return {
        ...state,
        filter: newFilter,
    }
}

export const productsActions = {
    productsReceived: (newProducts: ProductType[]) => ({type: PRODUCTS_RECEIVED, newProducts} as const),
    filterChanged: (newFilter: FilterType) => ({type: FILTER_CHANGED, newFilter} as const),
}

// request products from server
export const requestProducts = (): ThunkType =>
    async (dispatch) => {
        try {
            const payload = await productsAPI.getProducts();
            console.log(payload.data)
            if (payload.status === "success") {
                // if request message is success
                // set products in the state
                dispatch(productsActions.productsReceived(payload.data.products))
            }
        } catch (e) {
            // else print error
            console.error(e)
        }
    }

export type InitialStateType = typeof initialState;
type ActionTypes = InferActionTypes<typeof productsActions>;
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionTypes>;
export default productsReducer;