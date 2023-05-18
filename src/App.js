import React from "react";
import ProductForm from "./Components/ProductForm";
import { CartProvider } from "./Components/CartContext";
import Cart from "./Components/Cart";

const App = () => {
  return (
    <CartProvider>
      <ProductForm />

      <Cart />
    </CartProvider>
  );
};

export default App;
