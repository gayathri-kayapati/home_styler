import { createContext, useEffect, useState } from "react";

export const ProductsData = createContext();

export default function ProductsDataProvider({ children }) {
  const [products, setProducts] = useState([]);
  const getProductsData = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data.products);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div>
      <ProductsData.Provider value={{ products }}>
        {children}
      </ProductsData.Provider>
    </div>
  );
}
