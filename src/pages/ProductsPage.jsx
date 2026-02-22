import { useContext, useState } from "react";
import ProductCard from "../components/ProductCard";
import { ProductContext } from "../context/ProductContext";

export default function ProductsPage() {
  const { products } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-indigo-600 mb-4">Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        className="mb-6 p-2 border border-gray-300 rounded w-full max-w-md"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}