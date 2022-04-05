import React from 'react';
import {ArtisantTaskApp} from './App';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Failed to find the root element');
}
const root = createRoot(rootElement);

root.render(<ArtisantTaskApp />)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
