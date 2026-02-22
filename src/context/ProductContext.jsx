import { createContext, useState, useEffect } from "react";

const FALLBACK_PRODUCTS = [
  { id: 1, name: "Vanilla Bean", description: "Medium Roast, nutty flavor", origin: "Columbia", price: 10 },
  { id: 2, name: "House Blend", description: "Dark Roast, rich flavor", origin: "Vietnam", price: 12 },
];

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(FALLBACK_PRODUCTS);

  useEffect(() => {
    let mounted = true;

    fetch("http://localhost:3002/coffee")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then((data) => {
        if (mounted && Array.isArray(data)) setProducts(data);
      })
      .catch(() => {
        // keep fallback products if server isn't available
      });

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
}