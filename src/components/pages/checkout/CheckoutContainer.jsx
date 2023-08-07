import { React, useContext, useEffect, useRef, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router-dom";
import { Title, Box, Center, Loader } from "@mantine/core";
import { MessageBox } from "./../../common/messageBox/MessageBox";
import { db } from "../../../firebaseConfig";
import { addDoc, collection } from "firebase/firestore";
import { IconX, IconCheck } from "@tabler/icons-react";
import { notifications } from "@mantine/notifications";
import { FormCheckoutContainer } from "../form/FormCheckoutContainer";

export const CheckoutContainer = (order) => {
  const { cart, getTotalAmount, emptyCart } = useContext(CartContext)
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const refCollection = collection(db, "orders");

  useEffect (() => {
    if (!cart.length && !message) {
      setMessage("El carrito está vacío")
    }
  }, [message])

  const handleCreateOrder = (values) => {
    setLoading(true);
    const order = {
      products: cart.map((item) => {
        return {
          id: item.id,
          quantity: item.quantity,
          price: item.price,
          subtotal: item.price * item.quantity,
        };
      }),
      user: {
        name: values.name,
        email: values.email,
      },
      total: getTotalAmount(),
    };

    addDoc(refCollection, order)
      .then((response) => {
        setMessage(`Se ha creado la orden ${response.id}`)
        emptyCart();
        setLoading(false);
      })
      .catch((error) => {
        notifications.show({
          message: "Hubo un problema al crear la orden 😧",
          icon: <IconX size="1rem" />,
          color: "red",
        });
        setLoading(false);
      });
  };

  return (
    <Box maw={300} mx="auto">
      <Center>
        <Title order={2} mb="sm">
          Orden de compra
        </Title>
      </Center>
      { !message && !loading && <FormCheckoutContainer handleCreateOrder={handleCreateOrder} /> }
      { loading && <Center mt={50}><Loader /></Center> }
      { message && 
        <>
          <MessageBox message={message} /> 
          <Center><Link to="/">Volver al inicio</Link></Center>
        </>
      }
    </Box>
  );
};
