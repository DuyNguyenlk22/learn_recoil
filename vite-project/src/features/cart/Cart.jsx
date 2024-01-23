import React from "react";
import ProductList from "./components/producList";
import CartInfo from "./components/cartInfo";

export default function Cart() {
  return (
    <div>
      <ProductList />
      <CartInfo />
    </div>
  );
}
