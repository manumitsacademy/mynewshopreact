import React from "react";
import store from './store';
import {Provider} from 'react-redux';
import Product from './components/product/Product'
import Home from "./pages/Home";
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Home></Home>
      </div>
    </Provider>
  );
}

