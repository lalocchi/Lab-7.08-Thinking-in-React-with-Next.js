"use client";

import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ProductTable from "../components/ProductTable";


const PRODUCTS = [
  { id: 1, name: "Apple", category: "Fruits", price: 1.0, inStock: true },
  { id: 2, name: "Dragonfruit", category: "Fruits", price: 3.5, inStock: true },
  { id: 3, name: "Passionfruit", category: "Fruits", price: 2.75, inStock: false },
  { id: 4, name: "Spinach", category: "Vegetables", price: 1.5, inStock: true },
  { id: 5, name: "Pumpkin", category: "Vegetables", price: 4.0, inStock: false },
  { id: 6, name: "Peas", category: "Vegetables", price: 0.99, inStock: true },
];

export default function Home() {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Product Table</h1>

      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />

     <ProductTable
        products={PRODUCTS}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </main>
  );
}