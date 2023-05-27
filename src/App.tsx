import React from "react";
import ProductList from "./Components/productList/ProductList";
import { Routes, Route } from "react-router-dom";
import Details from "./Components/productDetails/Details";
import NotFound from "./Components/notFound/NotFound";

export default function App() {
  function addItemToList(): void {}
  return (
    <Routes>
      <Route path="/" element={<ProductList />}></Route>
      <Route
        path="/products/:id"
        element={
          <Details
            addToList={function (index: number, size: string): void {
              throw new Error("Function not implemented.");
            }}
          />
        }
      ></Route>
    </Routes>
  );
}
