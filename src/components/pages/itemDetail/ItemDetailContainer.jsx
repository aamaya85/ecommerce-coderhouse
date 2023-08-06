import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from 'react-router-dom'
import { CartContext } from "../../../context/CartContext";
import { ItemDetail } from "./ItemDetail";
import { db } from "./../../../firebaseConfig";
import { getDoc, collection, doc } from "firebase/firestore";
import { notifications } from "@mantine/notifications";
import { IconCheck } from "@tabler/icons-react";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  const { addProduct } = useContext(CartContext);
  const [ quantity, setQuantity ] = useState(1)
  const navigate = useNavigate()

  const handleQuantity = (q) => {
    setQuantity(q)
  }

  const handleAddProduct = () => {
    addProduct(item, quantity)
    notifications.show({
      message: 'El producto se ha agregado al carrito 🙂',
      icon: <IconCheck size="1rem" />,
      color: 'teal'
    })
  }

  useEffect(() => {

      let refCollection = collection( db , "products" )
      let refDoc = doc( refCollection, id )
      
      getDoc(refDoc).then( res => {
        if (res.exists()){
          setItem({...res.data(), id: res.id})
        } else {
          navigate("/itemNotFound")
        }
        
      })
  
  }, [id]);


  return (
      <ItemDetail item={item} handleAddProduct={handleAddProduct} handleQuantity={handleQuantity}/>
  );
};
