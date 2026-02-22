import { useState, useId } from "react";
import useProducts from "../hooks/useProducts";

function ProductForm() {
  const { setProducts } = useProducts();
  const id = useId();

  const [formData, setFormData] = useState({
    name: "",
    description: "",
    origin: "",
    price: ""
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    fetch("http://localhost:3001/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...formData,
        price: parseFloat(formData.price)
      })
    })
      .then(res => res.json())
      .then(newProduct => {
        setProducts(prev => [...prev, newProduct]);
      });

    setFormData({
      name: "",
      description: "",
      origin: "",
      price: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`${id}-name`}>Name</label>
      <input id={`${id}-name`} name="name" value={formData.name} onChange={handleChange} />

      <label>Description</label>
      <input name="description" value={formData.description} onChange={handleChange} />

      <label>Origin</label>
      <input name="origin" value={formData.origin} onChange={handleChange} />

      <label>Price</label>
      <input type="number" name="price" value={formData.price} onChange={handleChange} />

      <button type="submit">Add Product</button>
    </form>
  );
}

export default ProductForm;