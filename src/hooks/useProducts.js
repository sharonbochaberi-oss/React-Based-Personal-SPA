import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

export default function useProducts() {
  return useContext(ProductContext);
}