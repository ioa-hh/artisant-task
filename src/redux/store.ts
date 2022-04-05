import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import productsReducer from "./productsReducer";

let rootReducer = combineReducers({
    productsPage: productsReducer,
});

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunkMiddleware)
));

export default store;

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;
export type InferActionTypes<T> = T extends { [key: string]: (...args: any[]) => infer U } ? U : never