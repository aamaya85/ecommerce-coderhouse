import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { products } from "../../../productsMock";
import { CartContext } from "../../../context/CartContext";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { addProduct } = useContext(CartContext);
  const [ quantity, setQuantity ] = useState(1)

  const handleQuantity = (q) => {
    setQuantity(q)
  }

  const handleAddProduct = () => {
    addProduct(item, quantity)
  }

  useEffect(() => {
    const getProduct = (id) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const itemsFiltered = products.filter((p) => p.id == id);
          resolve(itemsFiltered[0]);
        }, 200);
      });
    };

    getProduct(id).then((response) => {
      setItem(response);
    });
  }, [id]);


  return (
    <ItemDetail item={item} handleAddProduct={handleAddProduct} handleQuantity={handleQuantity}/>
  );
};
