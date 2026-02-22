import { useState } from "react";
import useProducts from "../hooks/useProducts";

function ProductCard({ product }) {
  const { setProducts } = useProducts();
  const [newPrice, setNewPrice] = useState(product.price);

  const handleUpdate = () => {
    fetch(`http://localhost:3001/products/${product.id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ price: parseFloat(newPrice) })
    })
      .then(res => res.json())
      .then(updatedProduct => {
        setProducts(prev =>
          prev.map(p => (p.id === product.id ? updatedProduct : p))
        );
      });
  };

  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p>Origin: {product.origin}</p>
      <p>Price: ${product.price}</p>

      <input
        type="number"
        value={newPrice}
        onChange={e => setNewPrice(e.target.value)}
      />
      <button onClick={handleUpdate}>Update Price</button>
    </div>
  );
}

export default ProductCard;