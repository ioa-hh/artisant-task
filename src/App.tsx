import React, {useEffect} from 'react';
import "./App.scss"
import {Header} from './components/Header/Header';
import {Gallery} from "./components/Gallery/Gallery";
import {Provider, useDispatch, useSelector} from "react-redux";
import store from './redux/store';
import {requestProducts} from "./redux/productsReducer";
import {selectProducts} from "./redux/productsSelectors";

const App: React.FC = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectProducts);

    // request products when app started
    useEffect(() => {
        dispatch(requestProducts());
    }, []);

    return (
        <div className="wrapper">
            <Header/>
            <Gallery products={products}/>
        </div>
    );
}

export const ArtisantTaskApp: React.FC = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}